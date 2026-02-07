import { motion } from 'framer-motion';

interface HeroProps {
    bgImage?: string;
}

const Hero: React.FC<HeroProps> = ({ bgImage }) => {
    return (
        <div className="relative min-h-[90vh] w-full bg-cream pt-64 pb-20 overflow-hidden">
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-anthropic-black/5 text-anthropic-black/60 text-xs font-headings font-semibold mb-8 tracking-wide">
                            ASESORÍA EXPERTA • CHILE 2026
                        </div>
                        <h1 className="text-5xl md:text-7xl font-headings font-bold text-anthropic-black leading-[1.1] mb-8 tracking-tight">
                            Desbloquea el potencial de tus proyectos <span className="underline decoration-anthropic-black/20 underline-offset-[12px] decoration-2">inmobiliarios.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-body text-anthropic-black/70 leading-relaxed mb-10 max-w-xl">
                            Gestionamos tus permisos y asesorías con un enfoque estratégico y técnico, asegurando la viabilidad de cada etapa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden md:block mt-20"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src={bgImage || '/hero-placeholder.jpg'}
                                alt="Gestión Inmobiliaria"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-cream p-8 rounded-2xl shadow-xl border border-anthropic-black/5 max-w-xs">
                            <p className="font-body italic text-anthropic-black/60 text-lg">
                                "La eficiencia normativa es el motor de la inversión inmobiliaria moderna."
                            </p>
                            <footer className="mt-4 font-headings font-bold text-anthropic-black">— ESN Nexus Team</footer>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="h-[1px] w-full bg-anthropic-black/10"></div>
                <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm font-headings text-anthropic-black/40">
                    <span>MÁS DE 15 AÑOS DE EXPERIENCIA EN EL MERCADO CHILENO</span>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>CERTIFICACIÓN DOM</span>
                        <span>GESTIÓN MUNICIPAL</span>
                        <span>PERMISOS DE EDIFICACIÓN</span>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-anthropic-black/10"></div>
            </div>
        </div>
    );
};

export default Hero;
