import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import SectionWrapper, { slideLeftVariants, slideRightVariants } from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { GithubIcon, LinkedinIcon } from './Icons';
import { NOTCH_CLIP, NOTCH_CLIP_SM } from '@/lib/shapes';

const contactLinks = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22,7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
        label: 'email', value: 'mushfiq.srijon@gmail.com', href: 'mailto:mushfiq.srijon@gmail.com',
        from: '#2563eb', to: '#06b6d4', tag: 'MAIL',
    },
    {
        icon: <GithubIcon size={18} />,
        label: 'github', value: 'github.com/Mushfiq-Srijon', href: 'https://github.com/Mushfiq-Srijon',
        from: '#7c3aed', to: '#2563eb', tag: 'GIT',
    },
    {
        icon: <LinkedinIcon size={18} />,
        label: 'linkedin', value: 'linkedin.com/in/mushfiq011', href: 'https://www.linkedin.com/in/mushfiq011',
        from: '#06b6d4', to: '#10b981', tag: 'IN',
    },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '';

        try {
            const res = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': token,
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('Request failed');

            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <SectionWrapper id="contact">
            <SectionHeading label="get in touch" title="Contact Me" />

            <div className="flex flex-col lg:flex-row gap-10 items-start">
                <motion.div className="flex-1 w-full space-y-5" variants={slideLeftVariants}>
                    <p className="text-muted leading-relaxed mb-2 text-sm">
                        Open to internship opportunities, freelance projects, and interesting collaborations. Have something in mind? Let's talk.
                    </p>

                    {contactLinks.map((link) => (
                        <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="relative group block">
                            <div
                                className="absolute inset-0 translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                style={{ background: `linear-gradient(135deg, ${link.from}30, ${link.to}30)`, clipPath: NOTCH_CLIP_SM }}
                            />
                            <div
                                className="relative flex items-center gap-4 p-5 bg-white transition-transform duration-300 group-hover:-translate-y-0.5"
                                style={{ clipPath: NOTCH_CLIP_SM, boxShadow: `0 8px 28px ${link.from}14` }}
                            >
                                <div className="absolute top-0 left-0 w-6 h-6" style={{ background: `linear-gradient(135deg, ${link.from}, ${link.to})`, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${link.from}18, ${link.to}18)`, color: link.from }}>
                                    {link.icon}
                                </div>
                                <div>
                                    <p className="font-mono text-xs text-muted/60 mb-0.5">{link.label}</p>
                                    <p className="text-sm font-semibold" style={{ background: `linear-gradient(135deg, ${link.from}, ${link.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {link.value}
                                    </p>
                                </div>
                                <span className="ml-auto font-mono text-[10px] tracking-wider" style={{ color: link.to, opacity: 0.6 }}>{link.tag}</span>
                            </div>
                        </a>
                    ))}
                </motion.div>

                <motion.div className="flex-1 w-full" variants={slideRightVariants}>
                    <div className="relative">
                        <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ background: 'linear-gradient(135deg, #2563eb30, #06b6d430)', clipPath: NOTCH_CLIP }} />
                        <form onSubmit={handleSubmit} className="relative bg-white p-8" style={{ clipPath: NOTCH_CLIP, boxShadow: '0 10px 36px rgba(37,99,235,0.10)' }}>
                            <div className="absolute top-0 left-0 w-8 h-8" style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

                            <h3 className="font-display font-bold text-ink text-lg mb-6">Send a Message</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="font-mono text-xs text-muted/70 block mb-2 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text" required value={form.name} onChange={handleChange('name')}
                                        disabled={status === 'sending'}
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-lg text-ink text-sm placeholder:text-muted/40 focus:outline-none transition-all duration-200 disabled:opacity-60"
                                        style={{ background: 'rgba(37,99,235,0.06)', border: '1.5px solid rgba(37,99,235,0.25)' }}
                                        onFocus={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.5)'; }}
                                        onBlur={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.25)'; }}
                                    />
                                </div>
                                <div>
                                    <label className="font-mono text-xs text-muted/70 block mb-2 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email" required value={form.email} onChange={handleChange('email')}
                                        disabled={status === 'sending'}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg text-ink text-sm placeholder:text-muted/40 focus:outline-none transition-all duration-200 disabled:opacity-60"
                                        style={{ background: 'rgba(37,99,235,0.06)', border: '1.5px solid rgba(37,99,235,0.25)' }}
                                        onFocus={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.5)'; }}
                                        onBlur={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.25)'; }}
                                    />
                                </div>
                                <div>
                                    <label className="font-mono text-xs text-muted/70 block mb-2 uppercase tracking-wider">Message</label>
                                    <textarea
                                        rows={5} required value={form.message} onChange={handleChange('message')}
                                        disabled={status === 'sending'}
                                        placeholder="What's on your mind?"
                                        className="w-full px-4 py-3 rounded-lg text-ink text-sm placeholder:text-muted/40 focus:outline-none transition-all duration-200 resize-none disabled:opacity-60"
                                        style={{ background: 'rgba(37,99,235,0.06)', border: '1.5px solid rgba(37,99,235,0.25)' }}
                                        onFocus={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.5)'; }}
                                        onBlur={e => { e.currentTarget.style.border = '1.5px solid rgba(37,99,235,0.25)'; }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)' }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>Send Message ↗</>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#10b981' }}>
                                        <CheckCircle2 size={16} />
                                        Message sent! I'll get back to you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#ef4444' }}>
                                        <XCircle size={16} />
                                        Something went wrong — try emailing me directly instead.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}