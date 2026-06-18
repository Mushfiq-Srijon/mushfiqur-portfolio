import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const stats = [
    { value: '3+', label: 'Years Coding' },
    { value: '3', label: 'Projects Shipped' },
    { value: '2', label: 'Stacks Mastered' },
    { value: '3rd', label: 'Year at AUST' },
];

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="flex flex-col md:flex-row gap-16 items-start">

                <div className="flex-1">
                    <SectionHeading label="about me" title="Who I Am" />

                    <div className="space-y-4 text-muted leading-relaxed">
                        <p>
                            I'm Mushfiqur Rahman, a Full-Stack Web Developer and 3rd year CSE student at
                            <span className="text-ink font-medium"> Ahsanullah University of Science and Technology (AUST)</span>.
                        </p>
                        <p>
                            I specialise in building practical, real-world web applications — from pharmacy platforms to World Cup hubs to expense trackers. My go-to stack is
                            <span className="text-ink font-medium"> Laravel + PHP + React + TypeScript + MySQL</span>, and I've also worked with the MERN stack.
                        </p>
                        <p>
                            I enjoy turning complex problems into clean, usable products — whether that's a team university project or something I build solo from scratch.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="https://github.com/Mushfiq-Srijon" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-circuit/30 text-circuit font-mono text-sm hover:bg-circuit/5 transition-colors">
                            github.com/Mushfiq-Srijon
                        </a>
                        <a href="https://www.linkedin.com/in/mushfiq011" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-circuit/30 text-circuit font-mono text-sm hover:bg-circuit/5 transition-colors">
                            linkedin/mushfiq011
                        </a>
                    </div>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="bg-surface border border-circuit/10 rounded-xl p-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <p className="font-display text-3xl font-bold text-circuit">{stat.value}</p>
                                <p className="font-mono text-xs text-muted mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}