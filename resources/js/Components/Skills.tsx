import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const skillGroups = [
    {
        category: 'Backend',
        icon: '⚙️',
        skills: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'REST API'],
    },
    {
        category: 'Frontend',
        icon: '🖥️',
        skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Inertia.js'],
    },
    {
        category: 'Database',
        icon: '🗄️',
        skills: ['MySQL', 'MongoDB'],
    },
    {
        category: 'Tools & Others',
        icon: '🛠️',
        skills: ['Git', 'GitHub', 'Vite', 'Composer', 'npm', 'Postman', 'VS Code'],
    },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <SectionHeading label="what i work with" title="Skills & Stack" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.category}
                        className="bg-surface border border-circuit/10 rounded-xl p-6 hover:border-circuit/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg">{group.icon}</span>
                            <h3 className="font-display font-semibold text-ink">{group.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-canvas border border-circuit/15 font-mono text-xs text-circuit hover:bg-circuit/5 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}