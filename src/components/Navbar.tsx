import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-cream-dark/95 border-anthropic-black/5 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-6">
                        <img
                            src="/logo.png"
                            alt="ESN Nexus Gestión SpA"
                            className={`${scrolled ? 'h-24 md:h-32' : 'h-32 md:h-48'} w-auto object-contain transition-all duration-300 bg-transparent`}
                        />
                        <span className={`font-headings font-bold tracking-tighter transition-colors ${scrolled ? 'text-anthropic-black' : 'text-anthropic-black'} text-4xl md:text-5xl`}>
                            ESN Nexus
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 ml-auto">
                        {['Servicios', 'Expertos', 'Proyectos', 'Normativa', 'Recursos'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-headings text-lg font-medium text-anthropic-black/80 hover:text-anthropic-black transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="text-anthropic-black font-headings text-lg font-bold hover:text-anthropic-black/70 transition-all border-b-2 border-anthropic-black"
                        >
                            Contáctanos
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-anthropic-black">
                            {isOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-cream-dark border-b border-anthropic-black/5"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {['Servicios', 'Expertos', 'Proyectos', 'Normativa', 'Contacto'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-3 text-lg font-headings font-medium text-anthropic-black border-b border-anthropic-black/5 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
