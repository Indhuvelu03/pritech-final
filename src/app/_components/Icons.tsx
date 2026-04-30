import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      {...props}
    />
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </BaseIcon>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 16a7 7 0 1114 0" />
      <path d="M12 12l3-3" />
      <path d="M8 16h8" />
    </BaseIcon>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 6a4 4 0 005 5l-8 8a2 2 0 11-3-3l8-8a4 4 0 01-2-2z" />
      <path d="M8 16l-1.5 1.5" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12.5l1.8 1.8 3.7-4.1" />
    </BaseIcon>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 18v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1" />
      <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M20 18v-1.5a2.5 2.5 0 00-2-2.45" />
      <path d="M15.5 5.2a2.7 2.7 0 010 5.1" />
    </BaseIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </BaseIcon>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M9.5 13.5L8 21l4-2.4 4 2.4-1.5-7.5" />
    </BaseIcon>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3.5 9.5l3-2.5 3.5 3.5-2.5 2.5-4-3.5z" />
      <path d="M20.5 9.5l-3-2.5-3.5 3.5 2.5 2.5 4-3.5z" />
      <path d="M9 10.5l2.2 2.2a1.6 1.6 0 002.3 0l1.8-1.8" />
      <path d="M8.8 14.2l1.5 1.5a1.4 1.4 0 002 0l.5-.5" />
      <path d="M11 16l.9.9a1.4 1.4 0 002 0l1.1-1.1" />
    </BaseIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="40"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" />
    </svg>
  );
}
