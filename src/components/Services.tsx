import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        number: '01',
        title: 'Normativa Urbanística y DOM',
        description: 'Asesoría experta en la Ordenanza General de Urbanismo y Construcciones (OGUC DS N°47) y aplicación de circulares DDU vigentes.',
        details: ['Permisos de Edificación y Loteos', 'Fusiones y Subdivisiones Prediales', 'Regularizaciones y Cambios de Destino']
    },
    {
        number: '02',
        title: 'Permisos Sectoriales y Medio Ambiente',
        description: 'Gestión ante organismos públicos para la aprobación de proyectos complejos, asegurando cumplimiento sanitario y ambiental.',
        details: ['Autorizaciones Seremi de Salud', 'Evaluación Ambiental (SEIA)', 'Informes Sanitarios y Calificación Técnica']
    },
    {
        number: '03',
        title: 'Vivienda de Interés Público (SERVIU)',
        description: 'Especialistas en programas habitacionales de integración social (DS19) y gestión de proyectos ante el SERVIU.',
        details: ['Revisión de Proyectos DS19', 'Habilitación Normativa de Terrenos', 'Fiscalización Técnica de Obras (ITO)']
    },
    {
        number: '04',
        title: 'Coordinación de Especialidades',
        description: 'Articulación integral con redes de especialistas para optimizar la eficiencia y sustentabilidad del proyecto.',
        details: ['Eficiencia Energética y Climatización', 'Proyectos de Acústica y Suelos', 'Coordinación BIM y Especialidades']
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-black mb-6 tracking-tight">
                            Servicios de Asesoría Técnica
                        </h2>
                        <p className="text-xl font-body text-anthropic-black/60 leading-relaxed">
                            Brindamos asesoría técnica y legal de alto nivel para asegurar el éxito y cumplimiento normativo de sus desarrollos inmobiliarios.
                        </p>
                    </div>
                </div>

                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-t border-anthropic-black/10 py-12 flex flex-col md:grid md:grid-cols-12 gap-8 items-start hover:bg-anthropic-black/[0.02] px-4 -mx-4 transition-colors"
                        >
                            <div className="md:col-span-1 text-sm font-headings font-bold text-anthropic-black/20">
                                {service.number}
                            </div>

                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-headings font-bold text-anthropic-black mb-2">{service.title}</h3>
                            </div>

                            <div className="md:col-span-4">
                                <p className="text-lg font-body text-anthropic-black/70 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-sm font-headings text-anthropic-black/50">
                                            <span className="w-1.5 h-1.5 bg-anthropic-black/20 rounded-full mr-3"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-3 flex md:justify-end">
                                <a
                                    href="#contacto"
                                    className="inline-flex items-center text-anthropic-black font-headings font-bold text-sm border border-anthropic-black/10 px-6 py-3 rounded-full hover:bg-anthropic-black hover:text-cream transition-all group"
                                >
                                    Ficha Técnica <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-anthropic-black/10"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;
