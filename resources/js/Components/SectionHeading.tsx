import { motion } from 'framer-motion';
import { fadeUpVariants } from './SectionWrapper';

type Props = {
    label: string;
    title: string;
};

export default function SectionHeading({ label, title }: Props) {
    return (
        <motion.div className="mb-14" variants={fadeUpVariants}>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--color-circuit)', opacity: 0.7 }}>
                # {label}
            </p>
            <h2 className="font-display font-bold leading-tight text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                {title}
            </h2>
            <div className="mt-4 flex items-center gap-2">
                <div className="h-0.5 w-12 rounded-full bg-circuit" />
                <div className="h-0.5 w-4 rounded-full bg-glow" />
                <div className="h-0.5 w-2 rounded-full bg-mint" />
            </div>
        </motion.div>
    );
}