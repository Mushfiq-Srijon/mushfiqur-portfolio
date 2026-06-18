import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
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
        accent: 'circuit',
    },
    {
        name: 'Kickscape',
        type: 'Solo Project',
        description: 'A comprehensive FIFA World Cup 2026 hub with real-time match schedules, team standings, a 1000+ player database, stadium info, and an AI-powered chatbot for World Cup discussions.',
        features: ['Live match schedule', '1000+ player database', 'AI chatbot (Groq)'],
        stack: ['Laravel', 'React', 'TypeScript', 'MySQL'],
        live: 'https://kickscape.vercel.app/',
        github: 'https://github.com/Mushfiq-Srijon/Kickscape',
        accent: 'glow',
    },
    {
        name: 'FetchBucks',
        type: 'Solo Project',
        description: 'An expense tracking web app where users can set monthly budgets, create custom expense categories, and track daily expenses anytime, anywhere.',
        features: ['Monthly budget setting', 'Custom categories', 'Daily expense tracking'],
        stack: ['Laravel', 'React', 'TypeScript', 'MySQL'],
        live: 'https://fetchbucks.vercel.app/',
        github: null,
        accent: 'mint',
    },
];

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <SectionHeading label="things i've built" title="Projects" />

            <div className="flex flex-col gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        className="group bg-surface border border-circuit/10 rounded-2xl p-8 hover:border-circuit/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-6">

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-mono text-xs text-muted border border-muted/20 rounded-full px-3 py-0.5">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-circuit transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-muted leading-relaxed text-sm mb-4">
                                    {project.description}
                                </p>

                                <ul className="space-y-1 mb-5">
                                    {project.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-muted">
                                            <span className="w-1.5 h-1.5 rounded-full bg-circuit shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-canvas border border-circuit/15 font-mono text-xs text-circuit">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-circuit text-white font-medium text-sm hover:bg-circuit/90 transition-colors">
                                        Live Demo
                                    </a>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-circuit/30 text-ink font-medium text-sm hover:border-circuit transition-colors">
                                            <GithubIcon size={16} />
                                            Source
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="hidden md:flex shrink-0 w-14 items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-px h-full min-h-32 bg-linear-to-b from-transparent via-circuit/20 to-transparent" />
                                    <span className="font-mono text-xs text-muted/50 rotate-90 whitespace-nowrap mt-4">
                                        0{i + 1}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}