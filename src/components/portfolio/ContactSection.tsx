import { useRef, useState } from "react";
import { ArrowUpRight, Linkedin, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contactEmail, contactPhoneDisplay, contactPhoneHref, whatsappUrl } from "@/data/contact";

type SubmissionState = "idle" | "sending" | "success" | "error" | "unconfigured";

const createEmailDraft = (form: HTMLFormElement) => {
  const values = new FormData(form);
  const projectType = String(values.get("project_type") ?? "");
  const subject = projectType ? `Portfolio inquiry — ${projectType}` : "Portfolio inquiry";
  const body = [
    `Name: ${String(values.get("name") ?? "")}`,
    `Email: ${String(values.get("email") ?? "")}`,
    projectType ? `Project type: ${projectType}` : "",
    "",
    String(values.get("message") ?? ""),
  ].filter((line, index) => line || index === 3).join("\n");
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const statusMessages: Record<Exclude<SubmissionState, "idle">, string> = {
  sending: "Sending your message…",
  success: "Message sent. Thanks for reaching out.",
  error: "The form could not send your message. It has not been sent.",
  unconfigured: "The contact form is not configured here. Your message has not been sent.",
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmissionState>("idle");
  const [projectType, setProjectType] = useState("");
  const [emailDraft, setEmailDraft] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, VITE_YOUR_PUBLIC_KEY } = import.meta.env;
    const form = formRef.current;
    if (!form) return;
    const fallbackDraft = createEmailDraft(form);
    setEmailDraft(null);
    if (!VITE_YOUR_SERVICE_ID || !VITE_YOUR_TEMPLATE_ID || !VITE_YOUR_PUBLIC_KEY) {
      setEmailDraft(fallbackDraft);
      setState("unconfigured");
      return;
    }
    setState("sending");
    try {
      // Loaded on demand so the email SDK stays out of the initial bundle.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, form, { publicKey: VITE_YOUR_PUBLIC_KEY });
      setState("success");
      setEmailDraft(null);
      setProjectType("");
      form.reset();
    } catch (error: unknown) {
      const details: { status?: unknown; text?: unknown } = typeof error === "object" && error !== null
        ? error as { status?: unknown; text?: unknown }
        : { text: error };
      console.error("EmailJS contact form failed:", {
        status: details.status,
        message: details.text,
      });
      setEmailDraft(fallbackDraft);
      setState("error");
    }
  };

  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="section-index">Start a conversation</p>
          <h2 id="contact-title">Have a project to <span>move forward?</span></h2>
          <p className="contact-lede">I’m employed full-time and open to focused freelance, contract, and project-based work outside my regular hours. Tell me what you’re building, where you need support, or what’s getting in the way.</p>
          <div className="contact-direct-links">
            <a className="contact-email" href={`mailto:${contactEmail}`}><Mail size={18} aria-hidden="true" />{contactEmail}</a>
            <a className="contact-phone" href={contactPhoneHref}><Phone size={18} aria-hidden="true" />{contactPhoneDisplay}</a>
          </div>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/chiragkanani07/" target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" /><span>WhatsApp</span><ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <p className="contact-availability"><span className="signal-dot" aria-hidden="true" /> Available for project collaboration alongside my full-time role</p>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} aria-busy={state === "sending"} aria-describedby="contact-form-helper" data-reveal>
          <div className="form-heading"><span>Send a note</span><Mail size={18} aria-hidden="true" /></div>
          <p className="form-helper" id="contact-form-helper">Tell me what you are building and where you need support.</p>
          <div className="form-pair">
            <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          </div>
          <label>What do you need help with? <span className="optional">Optional</span>
            <select name="project_type" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
              <option value="">Choose a project type</option>
              <option>Web application</option><option>Mobile application</option><option>API or integration</option><option>Existing product</option><option>Other</option>
            </select>
          </label>
          <input type="hidden" name="subject" value={`Portfolio inquiry${projectType ? ` — ${projectType}` : ""}`} />
          <label>Message<textarea name="message" rows={5} required placeholder="A little about the project, the challenge, or the support you need…" /></label>
          <button className="button button-primary form-submit" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send message"}<Send size={16} aria-hidden="true" />
          </button>
          <p className={`form-status state-${state}`} role="status" aria-live="polite">
            {state === "idle" ? null : statusMessages[state]}
            {state === "error" || state === "unconfigured" ? <> <a href={emailDraft ?? `mailto:${contactEmail}`}>{emailDraft ? "Open a prefilled email" : "Email me directly"}</a>.</> : null}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
