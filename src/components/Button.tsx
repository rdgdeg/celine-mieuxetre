import React from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "outline";

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
    "bg-brand text-white hover:bg-brand-light hover:shadow-cta active:bg-brand-dark",
  secondary:
    "bg-cream-warm text-brand-dark ring-1 ring-warm-border hover:bg-peach-light hover:ring-brand/30",
  outline:
    "bg-transparent text-brand ring-2 ring-brand/40 hover:bg-brand hover:text-white hover:ring-brand",
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
  const classes = `inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 ${variantClasses[variant]} ${shine ? "btn-shine" : ""} ${className}`;

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
