import { whatsappLink } from "@/lib/site-config";

export function WhatsAppButton({
  message,
  variant = "primary",
  className = "",
  children,
}: {
  message: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors";

  const variants: Record<string, string> = {
    primary: "bg-clay text-cream hover:bg-clay-dark",
    secondary:
      "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
    ghost: "text-clay hover:text-clay-dark underline underline-offset-4",
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
