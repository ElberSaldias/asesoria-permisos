import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="expertos" className="py-32 bg-anthropic-black text-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Header Section */}
                    <div className="lg:col-span-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-[2px] w-20 bg-secondary mb-12"></div>
                            <h2 className="text-4xl md:text-6xl font-headings font-bold tracking-tight max-w-4xl">
                                Expertos en normativa inmobiliaria y gestión constructiva estratégica.
                            </h2>
                        </motion.div>
                    </div>

                    {/* Left Column - Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xl md:text-2xl font-body text-cream/80 leading-relaxed mb-12">
                                Nuestro equipo está liderado por Ingenieros Constructores e Ingenieros Civiles Industriales con amplia trayectoria en el sector público y privado. Contamos con especialización postgraduada en Permisología Inmobiliaria y actualización constante en las últimas normativas.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="text-lg font-headings font-bold mb-3 text-secondary">Certificación Profesional</h4>
                                    <p className="text-cream/60 font-body text-lg leading-relaxed">
                                        Diplomados en Permisología y gestión de proyectos complejos, garantizando rigor técnico en cada etapa.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-headings font-bold mb-3 text-secondary">Actualización Normativa</h4>
                                    <p className="text-cream/60 font-body text-lg leading-relaxed">
                                        Dominio de la Ley Marco de Autorizaciones Sectoriales y leyes de agilización administrativa vigentes.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Vision/Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:col-start-9 border-l border-cream/10 pl-12 py-4"
                    >
                        <div className="mb-12">
                            <div className="text-5xl font-headings font-bold mb-2">14+</div>
                            <div className="text-sm font-headings font-bold text-cream/40 uppercase tracking-widest">Años de Expertiz</div>
                        </div>
                        <div className="mb-12">
                            <div className="text-5xl font-headings font-bold mb-2">100%</div>
                            <div className="text-sm font-headings font-bold text-cream/40 uppercase tracking-widest">Efectividad Normativa</div>
                        </div>
                        <blockquote className="mt-16">
                            <p className="text-2xl font-body italic text-cream/70 leading-relaxed">
                                "La clave del éxito inmobiliario radica en una estrategia de permisos sólida desde el día uno."
                            </p>
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
