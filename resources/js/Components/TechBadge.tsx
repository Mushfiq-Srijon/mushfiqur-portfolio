type Props = {
    label: string;
    style?: React.CSSProperties;
};

export default function TechBadge({ label, style }: Props) {
    return (
        <span
            style={style}
            className="absolute px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-circuit/20 text-circuit font-mono text-[9px] sm:text-xs font-medium shadow-sm whitespace-nowrap"
        >
            {label}
        </span>
    );
}