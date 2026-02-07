import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formState.name,
                        email: formState.email,
                        phone: formState.phone || null,
                        project_type: formState.projectType || null,
                        message: formState.message,
                        status: 'pending'
                    }
                ]);

            if (supabaseError) throw supabaseError;

            setIsSubmitted(true);
            setFormState({ name: '', email: '', phone: '', projectType: '', message: '' });
        } catch (err) {
            console.error(err);
            setError('Error al enviar el formulario. Intente nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contacto" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Header/Info */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-black mt-4 mb-8 tracking-tight">
                            ¿Hablemos de tu proyecto?
                        </h2>
                        <p className="text-xl font-body text-anthropic-black/70 leading-relaxed mb-10">
                            Complete el formulario y nuestros expertos analizarán preliminarmente la viabilidad normativa de su caso. Respondemos en menos de 24 horas hábiles.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-anthropic-black/5 rounded-lg">
                                    <Send className="w-5 h-5 text-anthropic-black/40" />
                                </div>
                                <div>
                                    <h4 className="font-headings font-bold text-anthropic-black">Respuesta Rápida</h4>
                                    <p className="text-sm font-body text-anthropic-black/60">Análisis preliminar en el primer contacto.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/50 backdrop-blur-sm border border-anthropic-black/5 p-8 md:p-12 rounded-3xl">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-headings font-bold text-anthropic-black mb-4">¡Mensaje Enviado!</h4>
                                        <p className="text-lg font-body text-anthropic-black/60 mb-8 max-w-sm mx-auto">
                                            Un asesor revisará su requerimiento y lo contactará a la brevedad.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-anthropic-black font-headings font-bold hover:underline"
                                        >
                                            Enviar otra consulta
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {error && (
                                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3">
                                                <AlertCircle className="w-5 h-5 text-red-600" />
                                                <p className="text-sm font-headings font-medium text-red-800">{error}</p>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-headings font-bold text-anthropic-black/40 ml-1">NOMBRE</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full px-5 py-4 bg-white/80 border border-anthropic-black/10 rounded-2xl focus:ring-4 focus:ring-anthropic-black/5 focus:border-anthropic-black/30 outline-none transition-all placeholder:text-anthropic-black/20 font-body text-lg backdrop-blur-sm"
                                                    placeholder="Ej: Juan Pérez"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-headings font-bold text-anthropic-black/40 ml-1">TELÉFONO</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="w-full px-5 py-4 bg-white/80 border border-anthropic-black/10 rounded-2xl focus:ring-4 focus:ring-anthropic-black/5 focus:border-anthropic-black/30 outline-none transition-all placeholder:text-anthropic-black/20 font-body text-lg backdrop-blur-sm"
                                                    placeholder="+56 9..."
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-headings font-bold text-anthropic-black/40 ml-1">EMAIL</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-5 py-4 bg-white/80 border border-anthropic-black/10 rounded-2xl focus:ring-4 focus:ring-anthropic-black/5 focus:border-anthropic-black/30 outline-none transition-all placeholder:text-anthropic-black/20 font-body text-lg backdrop-blur-sm"
                                                placeholder="juan@empresa.cl"
                                                value={formState.email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-headings font-bold text-anthropic-black/40 ml-1">TIPO DE PROYECTO</label>
                                            <select
                                                name="projectType"
                                                className="w-full px-5 py-4 bg-white/80 border border-anthropic-black/10 rounded-2xl focus:ring-4 focus:ring-anthropic-black/5 focus:border-anthropic-black/30 outline-none transition-all font-body text-lg appearance-none cursor-pointer backdrop-blur-sm"
                                                value={formState.projectType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Seleccione una opción</option>
                                                <option value="habitacional">Habitacional / Inmobiliario</option>
                                                <option value="comercial">Comercial / Oficinas</option>
                                                <option value="industrial">Industrial</option>
                                                <option value="loteria">Loteo / Subdivisión</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-headings font-bold text-anthropic-black/40 ml-1">MENSAJE</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                required
                                                className="w-full px-5 py-4 bg-white/80 border border-anthropic-black/10 rounded-2xl focus:ring-4 focus:ring-anthropic-black/5 focus:border-anthropic-black/30 outline-none transition-all resize-none placeholder:text-anthropic-black/20 font-body text-lg backdrop-blur-sm"
                                                placeholder="Describa brevemente su requerimiento..."
                                                value={formState.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-anthropic-black text-cream font-headings font-bold text-lg py-5 px-8 rounded-2xl transition-all shadow-xl shadow-anthropic-black/10 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 flex items-center justify-center group"
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    Solicitar Asesoría
                                                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
