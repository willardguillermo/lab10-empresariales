import "./Button.css";

const VARIANTS = ["primary", "secondary", "ghost"];

/**
 * Reusable button. The content comes from `children` and the look from `variant`.
 * With `href` it renders a link styled as a button (navigation); without it, a real <button> (action).
 */
export default function Button({ children, variant = "primary", size = "md", href, className = "", type = "button", ...rest }) {
  const safeVariant = VARIANTS.includes(variant) ? variant : "primary";
  const classes = ["btn", `btn--${safeVariant}`, `btn--${size}`, className].filter(Boolean).join(" ");

  if (href) {
    return <a className={classes} href={href} {...rest}>{children}</a>;
  }
  return <button type={type} className={classes} {...rest}>{children}</button>;
}
