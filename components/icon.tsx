import {
  Layout,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingBag,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Layout,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingBag,
  LifeBuoy,
};

/** Rendert ein Lucide-Icon anhand seines Namens (aus content.json). */
export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Layout;
  return <Cmp className={className} aria-hidden="true" />;
}
