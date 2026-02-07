import { motion } from 'framer-motion';
import { ExternalLink, FileText, BookOpen, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ResourceSection = ({ title, icon: Icon, links }: { title: string, icon: LucideIcon, links: { label: string, url: string }[] }) => (
    <div className="flex flex-col h-full bg-white/50 backdrop-blur-sm border border-anthropic-black/5 p-8 rounded-3xl hover:shadow-xl hover:shadow-anthropic-black/[0.02] transition-all">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-anthropic-black text-cream rounded-xl">
                <Icon size={24} />
            </div>
            <h3 className="text-2xl font-headings font-bold text-anthropic-black tracking-tight">{title}</h3>
        </div>
        <ul className="space-y-4 flex-1">
            {links.map((link, idx) => (
                <li key={idx}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex justify-between items-start gap-4 hover:text-primary transition-colors"
                    >
                        <span className="font-headings font-medium text-anthropic-black/70 group-hover:text-anthropic-black leading-snug">
                            {link.label}
                        </span>
                        <ExternalLink size={16} className="text-anthropic-black/20 group-hover:text-anthropic-black mt-1 flex-shrink-0" />
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Resources = () => {
    const data = [
        {
            title: "Normativa y Leyes",
            icon: BookOpen,
            links: [
                { label: "Ley General de Urbanismo (LGUC)", url: "https://www.leychile.cl/Navegar?idNorma=13560" },
                { label: "Ordenanza General (OGUC)", url: "https://www.minvu.gob.cl/marco-normativo/" },
                { label: "Ley de Aportes al Espacio Público", url: "https://www.minvu.gob.cl/ley-de-aportes-al-espacio-publico/" },
                { label: "Ley n° 21.631 de Agilización de Permisos", url: "https://www.minvu.gob.cl/ley-de-agilizacion-sobre-permisos-de-construccion/" }
            ]
        },
        {
            title: "Circulares DDU",
            icon: FileText,
            links: [
                { label: "Índice de Circulares Vigentes", url: "https://www.minvu.gob.cl/elementos-tecnicos/circulares-division-de-desarrollo-urbano-ddu/indice-de-las-circulares-generales-vigentes/" },
                { label: "Repositorio Histórico DDU", url: "https://www.minvu.gob.cl/elementos-tecnicos/circulares-division-de-desarrollo-urbano-ddu/" }
            ]
        },
        {
            title: "Trámites y Técnica",
            icon: ClipboardCheck,
            links: [
                { label: "Formularios Únicos Nacionales (DOM)", url: "https://www.minvu.gob.cl/elementos-tecnicos/formularios-unicos-nacionales/" },
                { label: "Normativa Técnica DITEC", url: "https://www.minvu.gob.cl/ditec/" },
                { label: "Visor de Planes Reguladores", url: "https://www.minvu.gob.cl/elementos-tecnicos/planes-reguladores-2023/" }
            ]
        }
    ];

    return (
        <section id="recursos" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-black mb-6 tracking-tight">
                        Información de Interés
                    </h2>
                    <p className="text-xl font-body text-anthropic-black/60 leading-relaxed max-w-2xl">
                        Accesos directos a la normativa oficial, circulares DDU y documentación técnica del Ministerio de Vivienda y Urbanismo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {data.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ResourceSection {...section} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
