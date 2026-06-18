import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
    id: string;
    children: ReactNode;
    className?: string;
};

export default function SectionWrapper({ id, children, className = '' }: Props) {
    return (
        <motion.section
            id={id}
            className={`relative max-w-5xl mx-auto px-6 py-24 ${className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.section>
    );
}