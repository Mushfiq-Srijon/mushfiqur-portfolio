import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <SectionHeading label="get in touch" title="Contact Me" />

            <div className="flex flex-col md:flex-row gap-12 items-start">

                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-muted leading-relaxed mb-8">
                        I'm currently open to internship opportunities, freelance projects, and collaborations. Whether you have a project in mind or just want to say hi — my inbox is open.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:mushfiq.srijon@gmail.com" className="flex items-center gap-4 p-4 bg-surface border border-circuit/10 rounded-xl hover:border-circuit/30 transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-circuit/10 flex items-center justify-center shrink-0 group-hover:bg-circuit/20 transition-colors">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-circuit)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22,7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-muted mb-0.5">email</p>
                                <p className="text-ink text-sm font-medium">mushfiq.srijon@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://github.com/Mushfiq-Srijon" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-surface border border-circuit/10 rounded-xl hover:border-circuit/30 transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-circuit/10 flex items-center justify-center shrink-0 group-hover:bg-circuit/20 transition-colors">
                                <GithubIcon size={18} className="text-circuit" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-muted mb-0.5">github</p>
                                <p className="text-ink text-sm font-medium">github.com/Mushfiq-Srijon</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/mushfiq011" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-surface border border-circuit/10 rounded-xl hover:border-circuit/30 transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-circuit/10 flex items-center justify-center shrink-0 group-hover:bg-circuit/20 transition-colors">
                                <LinkedinIcon size={18} className="text-circuit" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-muted mb-0.5">linkedin</p>
                                <p className="text-ink text-sm font-medium">linkedin.com/in/mushfiq011</p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <form className="bg-surface border border-circuit/10 rounded-2xl p-8 space-y-5">
                        <div>
                            <label className="font-mono text-xs text-muted block mb-2">name</label>
                            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-canvas border border-circuit/15 text-ink text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-circuit transition-colors" />
                        </div>
                        <div>
                            <label className="font-mono text-xs text-muted block mb-2">email</label>
                            <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-canvas border border-circuit/15 text-ink text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-circuit transition-colors" />
                        </div>
                        <div>
                            <label className="font-mono text-xs text-muted block mb-2">message</label>
                            <textarea rows={5} placeholder="What's on your mind?" className="w-full px-4 py-3 rounded-lg bg-canvas border border-circuit/15 text-ink text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-circuit transition-colors resize-none" />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-lg bg-circuit text-white font-medium text-sm hover:bg-circuit/90 transition-colors">
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}