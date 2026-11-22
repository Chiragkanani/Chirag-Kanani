import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Send } from "lucide-react";

type SubmissionState = "idle" | "sending" | "success" | "error" | "unconfigured";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmissionState>("idle");
  const [projectType, setProjectType] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, VITE_YOUR_PUBLIC_KEY } = import.meta.env;
    if (!VITE_YOUR_SERVICE_ID || !VITE_YOUR_TEMPLATE_ID || !VITE_YOUR_PUBLIC_KEY || !formRef.current) {
      setState("unconfigured");
      return;
    }
    setState("sending");
    try {
      await emailjs.sendForm(VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID, formRef.current, { publicKey: VITE_YOUR_PUBLIC_KEY });
      setState("success");
      setProjectType("");
      formRef.current.reset();
    } catch (error: unknown) {
      const details: { status?: unknown; text?: unknown } = typeof error === "object" && error !== null
        ? error as { status?: unknown; text?: unknown }
        : { text: error };
      console.error("EmailJS contact form failed:", {
        status: details.status,
        message: details.text,
      });
      setState("error");
    }
  };

  const message = {
    idle: "Your message will go directly to my inbox.",
    sending: "Sending your message…",
    success: "Message sent. Thanks for reaching out.",
    error: "The message could not be sent. Please email me directly.",
    unconfigured: "The contact form is not configured on this deployment. Please email me directly.",
  }[state];

  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-index">Start a conversation</p>
          <h2 id="contact-title">Have a project<br />to <span>move forward?</span></h2>
          <p className="contact-lede">Tell me what you’re building, where you need support, or what’s getting in the way. I’m open to remote freelance, contract and project-based collaboration.</p>
          <a className="contact-email" href="mailto:chiragkanani2003@gmail.com">chiragkanani2003@gmail.com <ArrowUpRight size={18} aria-hidden="true" /></a>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/chiragkanani07/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="https://github.com/Chiragkanani" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
          <p className="contact-availability"><span className="signal-dot" /> Open to project collaboration</p>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-heading"><span>Send a note</span><Mail size={18} aria-hidden="true" /></div>
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
          <p className={`form-status state-${state}`} role="status" aria-live="polite">{message}{state !== "idle" && state !== "sending" && state !== "success" ? <> <a href="mailto:chiragkanani2003@gmail.com">Email me directly</a>.</> : null}</p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
