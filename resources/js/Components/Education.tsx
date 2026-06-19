import { motion } from 'framer-motion';
import SectionWrapper, { fadeUpVariants } from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { NOTCH_CLIP_SM } from '@/lib/shapes';

const education = [
    {
        level: 'University',
        institution: 'Ahsanullah University of Science & Technology (AUST)',
        program: 'BSc in Computer Science & Engineering',
        duration: '2023 — Present',
        note: 'Currently in 3rd year',
        from: '#2563eb', to: '#06b6d4',
    },
    {
        level: 'College',
        institution: 'Dhaka College',
        program: 'Group: Science',
        duration: '2020-2022',
        note: 'HSC: GPA 5.00/5.00',
        from: '#7c3aed', to: '#2563eb',
    },
    {
        level: 'School',
        institution: 'Dhaka Shiksha Board Laboratory School & College',
        program: 'Group: Science',
        duration: '2012-2020',
        note: 'SSC: GPA 5.00/5.00',
        from: '#06b6d4', to: '#10b981',
    },
];

export default function Education() {
    return (
        <SectionWrapper id="education">
            <SectionHeading label="academic background" title="Education" />

            <div className="relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-circuit/40 via-glow/30 to-mint/20 hidden md:block" />

                <div className="space-y-6">
                    {education.map((edu) => (
                        <motion.div key={edu.level} variants={fadeUpVariants} className="relative flex gap-6">
                            <div className="hidden md:flex flex-col items-center pt-5 flex-shrink-0 w-8">
                                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${edu.from}, ${edu.to})`, boxShadow: `0 0 0 4px ${edu.from}1a` }} />
                            </div>

                            <div className="relative flex-1">
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ background: `linear-gradient(135deg, ${edu.from}25, ${edu.to}25)`, clipPath: NOTCH_CLIP_SM }} />
                                <div className="relative bg-white p-6" style={{ clipPath: NOTCH_CLIP_SM, boxShadow: `0 6px 26px ${edu.from}12` }}>
                                    <div className="absolute top-0 left-0 w-7 h-7" style={{ background: `linear-gradient(135deg, ${edu.from}, ${edu.to})`, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: edu.from }}>{edu.level}</span>
                                        <span className="font-mono text-xs text-muted/60">{edu.duration}</span>
                                    </div>
                                    <h3 className="font-display font-bold text-ink text-lg mb-1">{edu.institution}</h3>
                                    <p className="text-muted text-sm mb-1">{edu.program}</p>
                                    <p className="text-muted/60 text-xs font-mono">{edu.note}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}