export default function CircuitBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-canvas">
            <div className="absolute inset-0 bg-engineering-wash" />
            <div className="absolute inset-0 bg-grid-lines opacity-50" />

            <svg className="absolute -top-24 -right-24 w-80 h-80 opacity-[0.22]" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="#2563eb" strokeWidth="1.5" />
            </svg>

            <svg className="absolute bottom-0 -left-20 w-72 h-72 opacity-[0.20]" viewBox="0 0 200 200">
                <polygon points="100,8 184,54 184,146 100,192 16,146 16,54" fill="none" stroke="#7c3aed" strokeWidth="1.8" />
            </svg>

            <svg className="absolute top-1/3 right-[8%] w-44 h-44 opacity-[0.18]" viewBox="0 0 100 100">
                <rect x="10" y="10" width="80" height="80" rx="14" fill="none" stroke="#10b981" strokeWidth="1.8" transform="rotate(20 50 50)" />
            </svg>

            <svg className="absolute bottom-[15%] left-[6%] w-36 h-36 opacity-[0.18]" viewBox="0 0 100 100">
                <rect x="15" y="15" width="70" height="70" fill="none" stroke="#2563eb" strokeWidth="1.8" transform="rotate(-12 50 50)" />
            </svg>
        </div>
    );
}