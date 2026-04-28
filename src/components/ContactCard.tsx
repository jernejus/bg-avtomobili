import { Phone, MessageCircle, Mail } from "lucide-react";
import type { Contact } from "@/lib/site";

export function ContactCard({
  contact,
  image,
  title,
  showWhatsapp = true,
  showViber = true,
}: {
  contact: Contact;
  image?: string;
  title?: string;
  showWhatsapp?: boolean;
  showViber?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elevated)]">
      {image && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-surface">
          <img
            src={image}
            alt={contact.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            {title}
          </div>
        )}
        <div className="mt-1 font-display text-xl font-bold text-foreground">{contact.name}</div>
        <div className="text-sm text-muted-foreground">{contact.role}</div>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-deep transition-colors"
          >
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
          {showWhatsapp && "whatsapp" in contact && (contact as { whatsapp?: string }).whatsapp && (
            <a
              href={`https://wa.me/${(contact as { whatsapp: string }).whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          )}
          {showViber && "viber" in contact && (contact as { viber?: string }).viber && (
            <a
              href={`viber://chat?number=${encodeURIComponent((contact as { viber: string }).viber)}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#7360F2]" /> Viber
            </a>
          )}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
          >
            <Mail className="h-4 w-4" /> E-pošta
          </a>
        </div>
      </div>
    </div>
  );
}
