import type { LucideIcon } from 'lucide-react';

type Props = {
    icon: LucideIcon;
    label: string;
    style?: React.CSSProperties;
};

export default function InfoBadge({ icon: Icon, label, style }: Props) {
    return (
        <span
            style={style}
           className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-circuit/20 text-circuit font-mono text-xs font-medium shadow-sm whitespace-nowrap"
        >
            <Icon size={12} className="flex-shrink-0" />
            <span>{label}</span>
        </span>
    );
}