import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import SectionWrapper, { fadeUpVariants } from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { GithubIcon } from './Icons';

const projects = [
    {
        name: 'CareMeds',
        type: 'Team Project',
        description: 'A web-based platform where users can check medicine availability and place orders online — supporting home delivery and pharmacy pickup. Helps patients avoid visiting multiple pharmacies physically.',
        features: ['Medicine browsing & cart', 'Home delivery & pickup', 'Online ordering system'],
        stack: ['Laravel', 'React', 'TypeScript', 'MySQL'],
        live: 'https://care-meds-sd.vercel.app/',
        github: 'https://github.com/Mushfiq-Srijon/CareMeds-SD',
        images: ['/images/projects/caremeds-1.png', '/images/projects/caremeds-2.png', '/images/projects/caremeds-3.png'],
        from: '#2563eb', to: '#06b6d4',
        num: '01',
    },
    {
        name: 'Kickscape',
        type: 'Solo Project',
        description: 'A comprehensive FIFA World Cup 2026 hub with real-time match schedules, team standings, a 1000+ player database, stadium info, and an AI-powered chatbot for World Cup discussions.',
        features: ['Live match schedule', '1000+ player database', 'AI chatbot (Groq)'],
        stack: ['Laravel', 'React', 'TypeScript', 'MySQL'],
        live: 'https://kickscape.vercel.app/',
        github: 'https://github.com/Mushfiq-Srijon/Kickscape',
        images: ['/images/projects/kickscape-1.png', '/images/projects/kickscape-2.png', '/images/projects/kickscape-3.png'],
        from: '#7c3aed', to: '#2563eb',
        num: '02',
    },
    {
        name: 'FetchBucks',
        type: 'Solo Project',
        description: 'An expense tracking web app where users can set monthly budgets, create custom expense categories, and track daily expenses anytime, anywhere.',
        features: ['Monthly budget setting', 'Custom categories', 'Daily expense tracking'],
        stack: ['Laravel', 'React', 'TypeScript', 'MySQL'],
        live: 'https://fetchbucks.vercel.app/',
        github: null,
        images: ['/images/projects/fetchbucks-1.png', '/images/projects/fetchbucks-2.png', '/images/projects/fetchbucks-3.png'],
        from: '#06b6d4', to: '#10b981',
        num: '03',
    },
];

function ProjectImage({
    src, alt, from, to, className, onOpen,
}: { src: string; alt: string; from: string; to: string; className?: string; onOpen: (src: string) => void }) {
    const [broken, setBroken] = useState(false);

    return (
        <div className={`relative group overflow-hidden cursor-pointer ${className}`} onClick={() => !broken && onOpen(src)}>
            {broken ? (
                <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${from}1a, ${to}1a)` }}>
                    <ImageIcon size={24} style={{ color: from, opacity: 0.5 }} />
                </div>
            ) : (
                <img src={src} alt={alt} onError={() => setBroken(true)} className="w-full h-full object-cover" />
            )}
            {!broken && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <SectionWrapper id="projects">
            <SectionHeading label="things i've built" title="Projects" />

            <div className="flex flex-col gap-16">
                {projects.map((project, i) => {
                    const reversed = i % 2 === 1;
                    return (
                        <motion.div
                            key={project.name}
                            variants={fadeUpVariants}
                            className={`flex flex-col gap-8 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                        >
                            {/* Photo stack: big on top, two small underneath */}
                            <div className="w-full md:w-1/2 flex flex-col gap-3">
                                <ProjectImage
                                    src={project.images[0]}
                                    alt={`${project.name} main screenshot`}
                                    from={project.from} to={project.to}
                                    className="rounded-2xl w-full h-56 md:h-64 border border-circuit/10"
                                    onOpen={setLightbox}
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <ProjectImage
                                        src={project.images[1]}
                                        alt={`${project.name} screenshot 2`}
                                        from={project.from} to={project.to}
                                        className="rounded-xl w-full h-28 border border-circuit/10"
                                        onOpen={setLightbox}
                                    />
                                    <ProjectImage
                                        src={project.images[2]}
                                        alt={`${project.name} screenshot 3`}
                                        from={project.from} to={project.to}
                                        className="rounded-xl w-full h-28 border border-circuit/10"
                                        onOpen={setLightbox}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 bg-white rounded-2xl p-7 border border-circuit/10" style={{ boxShadow: `0 6px 28px ${project.from}10` }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${project.from}12`, color: project.from }}>
                                        {project.type}
                                    </span>
                                    <span className="font-mono text-xs text-muted/80">{project.num}</span>
                                </div>

                                <h3 className="font-display text-2xl font-bold mb-3" style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    {project.name}
                                </h3>

                                <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

                                <ul className="space-y-2 mb-5">
                                    {project.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-muted">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.from }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full font-mono text-xs" style={{ background: `${project.from}10`, color: project.from }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-105" style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}>
                                        Live Demo ↗
                                    </a>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-canvas text-ink border border-circuit/15 hover:border-circuit/30 transition-all duration-200 hover:scale-105">
                                            <GithubIcon size={15} />
                                            Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            onClick={() => setLightbox(null)}
                        >
                            <X size={28} />
                        </button>
                        <motion.img
                            src={lightbox}
                            alt="Project screenshot enlarged"
                            className="max-w-full max-h-full rounded-xl"
                            initial={{ scale: 0.92 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.92 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}