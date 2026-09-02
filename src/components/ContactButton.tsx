import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactButton = ({ label = "Contact Me" }: { label?: string }) => (
  <Button
    asChild
    className="contact-gradient rounded-full px-8 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground shadow-contact outline outline-2 outline-offset-2 outline-primary-foreground/90 transition-transform duration-300 hover:-translate-y-1 hover:brightness-110 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
  >
    <a href="#contact">
      {label}
      <ArrowUpRight aria-hidden="true" />
    </a>
  </Button>
);

export default ContactButton;