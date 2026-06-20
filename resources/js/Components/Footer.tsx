export default function Footer() {
    return (
        <footer className="relative border-t border-circuit/10 bg-canvas">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="text-center md:text-left">
                    <p
                        className="font-display font-bold text-lg"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        &lt;Mushfiqur /&gt;
                    </p>
                    <p className="font-mono text-xs text-muted mt-1">Full-Stack Web Developer</p>
                </div>

                <p className="font-mono text-xs text-muted/70">
                    © {new Date().getFullYear()} Mushfiqur Rahman. All rights reserved.
                </p>

                <a href="#" className="font-mono text-xs text-circuit hover:text-glow transition-colors">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}