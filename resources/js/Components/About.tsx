import { motion } from 'framer-motion';
import SectionWrapper, { slideLeftVariants, slideRightVariants, scaleVariants } from './SectionWrapper';
import SectionHeading from './SectionHeading';

const facts = [
    { value: '3', label: 'Projects Shipped' },
    { value: '5+', label: 'Core Technologies' },
    { value: '3rd Year', label: 'CSE Student' },
    { value: 'Open', label: 'To Opportunities' },
];
export default function About() {
    return (
        <SectionWrapper id="about">
            <SectionHeading label="about me" title="Who I Am" />

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <motion.div className="flex-1 space-y-5 text-muted leading-relaxed text-[15px]" variants={slideLeftVariants}>
                    <p>
                        I'm <span className="text-ink font-semibold">Mushfiqur Rahman</span>, a full-stack web developer currently in my third year of a BSc in Computer Science & Engineering. I build web applications end to end — from database schema to the last bit of UI polish — and I enjoy the part where a messy real-world problem turns into something people can actually click through and use.
                    </p>

                    <p>
                        My primary stack is <span className="text-ink font-medium">Laravel, PHP, React, TypeScript, and MySQL</span> — I reach for this combination by default because it lets me move fast on both the backend and the interface without switching mental models. I've also built with the <span className="text-ink font-medium">MERN stack</span>, and I like staying comfortable on both sides of the JavaScript/PHP divide rather than locking into one ecosystem.
                    </p>
                    <p>
                        Outside of coursework, I'm usually shipping something solo or pairing up for a team build. I'm currently open to internship opportunities, freelance work, and collaborations where I can learn from people better than me.
                    </p>

                </motion.div>

                <motion.div className="w-full lg:w-60 grid grid-cols-2 gap-4 flex-shrink-0" variants={slideRightVariants}>
                    {facts.map((fact) => (
                        <motion.div
                            key={fact.label}
                            variants={scaleVariants}
                            className="bg-white rounded-xl p-2 text-center border border-circuit/10 hover:border-circuit/25 hover:-translate-y-0.5 transition-all duration-300"
                            style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.06)' }}
                        >
                            <p className="font-display text-2xl font-bold text-circuit">{fact.value}</p>
                            <p className="font-mono text-xs text-muted mt-1 leading-tight">{fact.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}