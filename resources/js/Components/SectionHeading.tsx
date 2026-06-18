type Props = {
    label: string;
    title: string;
};

export default function SectionHeading({ label, title }: Props) {
    return (
        <div className="mb-12">
            <p className="font-mono text-xs text-circuit mb-2">// {label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
            <div className="mt-3 w-12 h-0.5 bg-circuit rounded-full" />
        </div>
    );
}