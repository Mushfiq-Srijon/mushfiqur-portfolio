import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/Components/Icons';
import { useState } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-canvas/80 border-b border-circuit/10">
            <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="font-mono text-sm text-circuit">&lt;Mushfiqur /&gt;</a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="font-mono text-sm text-muted hover:text-circuit transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com/Mushfiq-Srijon" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit transition-colors">
                        <GithubIcon size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mushfiq011" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit transition-colors">
                        <LinkedinIcon size={20} />
                    </a>
                </div>

                <button className="md:hidden text-ink" onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-canvas border-t border-circuit/10">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-mono text-sm text-muted hover:text-circuit">
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-4 pt-2">
                        <a href="https://github.com/Mushfiq-Srijon" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit">
                            <GithubIcon size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mushfiq011" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit">
                            <LinkedinIcon size={20} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}