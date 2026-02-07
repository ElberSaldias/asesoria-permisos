import { motion } from 'framer-motion';

const regulations = [
    {
        tag: "OGUC",
        title: "Ordenanza de Urbanismo",
        desc: "Actualización constante en las normativas del MINVU para asegurar cumplimiento en todas las escalas."
    },
    {
        tag: "SEREMI",
        title: "Autorizaciones Sanitarias",
        desc: "Cumplimiento de estándares de salud para proyectos comerciales, industriales y residenciales."
    },
    {
        tag: "SEIA",
        title: "Impacto Ambiental",
        desc: "Gestión avanzada de declaraciones y estudios de impacto ambiental para proyectos de gran envergadura."
    }
];

const Regulations = () => {
    return (
        <section id="normativa" className="py-24 bg-cream-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-black mb-8 tracking-tight">
                            Marco Normativo Vigente
                        </h2>
                        <p className="text-xl font-body text-anthropic-black/70 leading-relaxed mb-10">
                            Nuestra práctica se basa en el dominio profundo de la arquitectura legal chilena. Operamos con total transparencia y rigor técnico.
                        </p>
                        <div className="inline-flex items-center gap-4 text-anthropic-black/40 font-headings font-bold text-sm tracking-widest uppercase border-t border-anthropic-black/10 pt-8">
                            <span>Chile 2026</span>
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            <span>Gestión Sectorial</span>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="space-y-6">
                            {regulations.map((reg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-cream p-8 border border-anthropic-black/5 rounded-2xl flex gap-8 items-start hover:shadow-lg hover:shadow-anthropic-black/[0.05] transition-all cursor-default"
                                >
                                    <div className="bg-anthropic-black text-cream px-3 py-1 rounded-md text-[10px] font-headings font-bold uppercase tracking-wider">
                                        {reg.tag}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-headings font-bold text-anthropic-black mb-2">{reg.title}</h4>
                                        <p className="font-body text-anthropic-black/60 text-lg">{reg.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Regulations;
