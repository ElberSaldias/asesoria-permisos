

const Footer = () => {
    return (
        <footer className="bg-cream-dark/50 border-t border-anthropic-black/5 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-6 mb-10">
                            <img src="/logo.png" alt="ESN Nexus" className="h-32 w-auto object-contain" />
                            <span className="font-headings font-bold text-5xl tracking-tighter text-anthropic-black">
                                ESN Nexus
                            </span>
                        </div>
                        <p className="max-w-xs font-body text-anthropic-black/50 text-lg leading-relaxed">
                            Expertos en gestión de permisos y consultoría inmobiliaria. Maximizamos la eficiencia de sus proyectos cumpliendo con la normativa vigente.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="font-headings font-bold text-sm text-anthropic-black/40 uppercase tracking-widest mb-8">Navegación</h4>
                        <ul className="space-y-4 font-headings font-medium text-anthropic-black/70">
                            <li><a href="#servicios" className="hover:text-anthropic-black transition-colors">Servicios</a></li>
                            <li><a href="#expertos" className="hover:text-anthropic-black transition-colors">Expertos</a></li>
                            <li><a href="#proyectos" className="hover:text-anthropic-black transition-colors">Proyectos</a></li>
                            <li><a href="#contacto" className="hover:text-anthropic-black transition-colors" >Contacto</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-4">
                        <h4 className="font-headings font-bold text-sm text-anthropic-black/40 uppercase tracking-widest mb-8">Recursos</h4>
                        <ul className="space-y-4 font-headings font-medium text-anthropic-black/70">
                            <li><a href="#" className="hover:text-anthropic-black transition-colors">Ley de Permisos Sectoriales</a></li>
                            <li><a href="#" className="hover:text-anthropic-black transition-colors">Normativa OGUC</a></li>
                            <li><a href="#" className="hover:text-anthropic-black transition-colors">Plazos Legales 2026</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-anthropic-black/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm font-headings text-anthropic-black/40">
                    <p>&copy; {new Date().getFullYear()} ESN Nexus Gestión SpA. Todos los derechos reservados.</p>
                    <div className="mt-8 md:mt-0 flex gap-10">
                        <a href="#" className="hover:text-anthropic-black transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-anthropic-black transition-colors">Términos</a>
                        <a href="#" className="hover:text-anthropic-black transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
