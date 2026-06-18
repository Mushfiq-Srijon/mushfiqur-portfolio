export default function Footer() {
    return (
        <footer className="relative border-t border-circuit/10 bg-canvas">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs text-muted">
                    &lt;Mushfiqur /&gt; © {new Date().getFullYear()}
                </p>
                <p className="font-mono text-xs text-muted">
                    Built with Laravel · React · TypeScript · Tailwind
                </p>
            </div>
        </footer>
    );
}