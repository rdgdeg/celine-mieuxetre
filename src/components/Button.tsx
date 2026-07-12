import React from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "lavender";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  shine?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta active:bg-brand-dark active:translate-y-0",
  secondary:
    "bg-white/80 border-2 border-brand/30 text-brand backdrop-blur-sm hover:bg-brand hover:text-white hover:border-brand active:bg-brand-dark",
  lavender:
    "bg-transparent border-2 border-lavender text-lavender hover:bg-lavender hover:text-white active:bg-lavender-light",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  target,
  rel,
  shine = false,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${variantClasses[variant]} ${shine ? "btn-shine" : ""} ${className}`;

  if (href?.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
