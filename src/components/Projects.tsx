import { motion } from 'framer-motion';

const projects = [
    {
        title: "Complejo Habitacional Las Condes",
        category: "PERMISOS DE EDIFICACIÓN",
        year: "2024",
        description: "Gestión integral de permisos sectoriales y coordinación DOM para proyecto de 120 unidades."
    },
    {
        title: "Centro Logístico Quilicura",
        category: "PLANIFICACIÓN TERRITORIAL",
        year: "2023",
        description: "Estudio de cabida y cambios de destino para nave industrial de alta complejidad técnica."
    },
    {
        title: "Edificio de Oficinas El Golf",
        category: "COORDINACIÓN TÉCNICA",
        year: "2024",
        description: "Aprobación de expedientes ante SEREMI de Salud y habilitación normativa de redes."
    }
];

const Projects = () => {
    return (
        <section id="proyectos" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-black mb-6 tracking-tight">
                        Casos de Éxito
                    </h2>
                    <p className="text-xl font-body text-anthropic-black/60 leading-relaxed max-w-2xl">
                        Una selección de proyectos donde nuestra gestión normativa ha sido clave para la viabilidad técnica y financiera.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col cursor-pointer"
                        >
                            <div className="aspect-[16/10] bg-anthropic-black/5 rounded-2xl mb-6 flex items-center justify-center border border-anthropic-black/5 group-hover:bg-anthropic-black/10 transition-colors">
                                <span className="text-anthropic-black/20 font-headings font-bold text-4xl">{project.year}</span>
                            </div>
                            <span className="text-xs font-headings font-bold text-secondary uppercase tracking-widest mb-3">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-headings font-bold text-anthropic-black mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="font-body text-anthropic-black/60 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
