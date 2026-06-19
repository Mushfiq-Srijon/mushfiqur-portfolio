import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionWrapper, { fadeUpVariants, staggerContainer } from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { Code2 } from 'lucide-react';
import {
    SiLaravel, SiPhp, SiReact, SiTypescript, SiMysql,
    SiNodedotjs, SiExpress, SiMongodb, SiJavascript,
    SiGit, SiGithub, SiTailwindcss, SiVite, SiPostman,
    SiInertia, SiC, SiCplusplus, SiPython, SiProteus,
    SiArduino, SiXampp,
} from '@icons-pack/react-simple-icons';

type Skill = { name: string; icon: any; color: string };

const coreStack: Skill[] = [
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
];

const otherStack: Skill[] = [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'JavaScript', icon: SiJavascript, color: '#D4B400' },
    { name: 'Inertia.js', icon: SiInertia, color: '#9553E9' },
];

const tools: Skill[] = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'XAMPP', icon: SiXampp, color: '#007ACC' },
    { name: 'VS Code', icon: Code2, color: '#007ACC' },
];

const otherskills: Skill[] = [
    { name: 'C', icon: SiC, color: '#F05032' },
    { name: 'C++', icon: SiCplusplus, color: '#181717' },
    { name: 'Python', icon: SiPython, color: '#38BDF8' },
    { name: 'Proteus', icon: SiProteus, color: '#646CFF' },
    { name: 'Arduino', icon: SiArduino, color: '#885630' },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

function SkillCard({ skill }: { skill: Skill }) {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={cardVariants}
            className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-circuit/10 hover:border-circuit/25 hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: `0 3px 14px ${skill.color}12` }}
        >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${skill.color}18` }}>
                <Icon size={18} color={skill.color} />
            </div>
            <span className="font-medium text-sm text-ink">{skill.name}</span>
        </motion.div>
    );
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
    return (
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
                <h3 className="font-display font-semibold text-ink text-base">{label}</h3>
                <div className="h-px flex-1 bg-circuit/10" />
            </div>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0 } } }}
            >
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
}
export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <SectionHeading label="what i work with" title="Skills & Stack" />

            <SkillGroup label="Core Stack" skills={coreStack} />
            <SkillGroup label="Other Stack (MERN)" skills={otherStack} />
            <SkillGroup label="Tools & Workflow" skills={tools} />
            <SkillGroup label="Other Skills (Tools and Progamming Languages)" skills={otherskills} />
        </SectionWrapper>
    );
}