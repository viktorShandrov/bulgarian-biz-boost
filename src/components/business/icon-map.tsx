import {
  Activity,
  AlignCenter,
  Hammer,
  PaintRoller,
  ShieldCheck,
  ShowerHead,
  Siren,
  Smile,
  Sparkles,
  Wrench,
  Zap,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Activity,
  AlignCenter,
  Hammer,
  PaintRoller,
  ShieldCheck,
  ShowerHead,
  Siren,
  Smile,
  Sparkles,
  Wrench,
  Zap,
};

export function ServiceIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Icon = (name && icons[name]) || CircleDot;
  return <Icon className={className} aria-hidden="true" />;
}
