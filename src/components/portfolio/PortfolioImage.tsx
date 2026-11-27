import { useState, type ImgHTMLAttributes } from "react";

const PortfolioImage = ({
  alt,
  className,
  onLoad,
  onError,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const classes = ["portfolio-image", `portfolio-image--${status}`, className].filter(Boolean).join(" ");

  return (
    <img
      {...props}
      alt={status === "error" ? `Image failed to load${alt ? `: ${alt}` : ""}` : alt}
      className={classes}
      onLoad={(event) => {
        setStatus("loaded");
        onLoad?.(event);
      }}
      onError={(event) => {
        setStatus("error");
        onError?.(event);
      }}
    />
  );
};

export default PortfolioImage;
