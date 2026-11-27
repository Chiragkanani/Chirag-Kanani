import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import profilePhoto from "@/assets/chirag-kanani-profile.png";
import PortfolioImage from "@/components/portfolio/PortfolioImage";

interface ProfilePhotoProps {
  className: "hero-avatar" | "footer-cta-avatar";
  loading?: "eager" | "lazy";
}

const ProfilePhoto = ({ className, loading = "lazy" }: ProfilePhotoProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 10);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsPreviewOpen(false);
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isPreviewOpen]);

  const closePreview = () => setIsPreviewOpen(false);

  return (
    <>
      <button
        className={`profile-photo-trigger ${className}`}
        type="button"
        aria-label="Open portrait preview"
        aria-haspopup="dialog"
        onClick={() => setIsPreviewOpen(true)}
      >
        <PortfolioImage src={profilePhoto} alt="" width="768" height="768" loading={loading} decoding="async" />
      </button>
      {isPreviewOpen && createPortal(
        <div
          className="profile-photo-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closePreview();
          }}
        >
          <div
            ref={dialogRef}
            className="profile-photo-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Portrait of Chirag Kanani"
            tabIndex={-1}
          >
            <button ref={closeButtonRef} className="profile-photo-close" type="button" aria-label="Close portrait preview" onClick={closePreview}>
              <X size={20} aria-hidden="true" />
            </button>
            <PortfolioImage className="profile-photo-preview" src={profilePhoto} alt="Portrait of Chirag Kanani" />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProfilePhoto;
