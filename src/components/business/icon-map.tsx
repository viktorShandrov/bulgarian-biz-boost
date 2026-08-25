import {
  Activity,
  AlignCenter,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Clock,
  Hammer,
  HeartHandshake,
  MapPin,
  PaintRoller,
  ShieldCheck,
  ShowerHead,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  UserCheck,
  Wrench,
  Zap,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 3C4.5 3 3 5 3 7.5c0 3.5 1.5 6 2.5 9 .8 2.4 1.7 4.5 2.5 4.5 1 0 1.5-1.5 2-3 .5-1.5 1-2 2-2s1.5.5 2 2c.5 1.5 1 3 2 3 .8 0 1.7-2.1 2.5-4.5 1-3 2.5-5.5 2.5-9C21 5 19.5 3 17 3c-2 0-3 1-5 1s-3-1-5-1z" />
    </svg>
  );
}

const icons: Record<string, LucideIcon | React.ComponentType<{ className?: string }>> = {
  Activity,
  AlignCenter,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Clock,
  Hammer,
  HeartHandshake,
  MapPin,
  PaintRoller,
  ShieldCheck,
  ShowerHead,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Tooth: ToothIcon,
  UserCheck,
  Wrench,
  Zap,
  CircleDot,
};

export function ServiceIcon({
  name,
  className,
}: {
  name?: string | undefined;
  className?: string | undefined;
}) {
  const Icon = (name && icons[name]) || ToothIcon || CircleDot;
  return <Icon className={className} aria-hidden="true" />;
}


