import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import CircuitBackground from '@/Components/CircuitBackground';
import Navbar from '@/Components/Navbar';
import HeroPhoto from '@/Components/HeroPhoto';
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Education from '@/Components/Education';

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <CircuitBackground />

            <section className="relative max-w-[1380px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

                    <motion.div
                        className="flex-1 text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >

                        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight">
                            MD.Mushfiqur<br />Rahman
                        </h1>

                        <p className="text-muted text-base mt-4 max-w-md leading-relaxed">
                            Full-Stack Web Developer · 3rd year CSE student at AUST · Building real-world apps with Laravel, React &amp; TypeScript.
                        </p>

                        <div className="flex items-center flex-wrap gap-3 mt-8">
                            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-circuit text-white font-medium text-sm hover:bg-circuit/90 transition-colors flex items-center gap-2">
                                View Projects <ArrowRight size={15} />
                            </a>
                            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-circuit/30 text-ink font-medium text-sm hover:border-circuit transition-colors">
                                Contact Me
                            </a>

                            <a href="/resume/resume.pdf"
                                download
                                className="px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105"
                                style={{ background: 'rgba(37,99,235,0.06)', border: '1.5px solid rgba(37,99,235,0.25)', color: '#2563eb' }}
                            >
                                <Download size={15} /> Resume
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
            </section >
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div >
    );
}