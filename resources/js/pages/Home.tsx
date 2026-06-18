import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CircuitBackground from '@/Components/CircuitBackground';
import Navbar from '@/Components/Navbar';
import HeroPhoto from '@/Components/HeroPhoto';
import { GithubIcon, LinkedinIcon } from '@/Components/Icons';
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <CircuitBackground />

            <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    <motion.div
                        className="flex-1 text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <p className="font-mono text-sm text-circuit mb-3">$ whoami</p>

                        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight">
                            Mushfiqur<br />Rahman
                        </h1>

                        <p className="text-muted text-base mt-4 max-w-md leading-relaxed">
                            Full-Stack Web Developer · 3rd year CSE student at AUST · Building real-world apps with Laravel, React &amp; TypeScript.
                        </p>

                        <div className="flex items-center gap-3 mt-8">
                            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-circuit text-white font-medium text-sm hover:bg-circuit/90 transition-colors flex items-center gap-2">
                                View Projects <ArrowRight size={15} />
                            </a>
                            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-circuit/30 text-ink font-medium text-sm hover:border-circuit transition-colors">
                                Contact Me
                            </a>
                        </div>

                        <div className="flex items-center gap-5 mt-7">
                            <a href="https://github.com/Mushfiq-Srijon" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit transition-colors">
                                <GithubIcon size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/mushfiq011" target="_blank" rel="noreferrer" className="text-muted hover:text-circuit transition-colors">
                                <LinkedinIcon size={22} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                        <HeroPhoto />
                    </motion.div>

                </div>
            </section>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}