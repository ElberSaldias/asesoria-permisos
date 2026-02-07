import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('chat_messages');
        if (saved) {
            try {
                // Parse dates back to Date objects
                const parsed = JSON.parse(saved);
                return parsed.map((m: Message) => ({ ...m, timestamp: new Date(m.timestamp) }));
            } catch (e) {
                console.error("Error parsing chat history", e);
            }
        }
        return [{
            id: '1',
            text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte con tus trámites inmobiliarios hoy?',
            sender: 'bot',
            timestamp: new Date()
        }];
    });

    // Save to localStorage whenever messages change
    useEffect(() => {
        localStorage.setItem('chat_messages', JSON.stringify(messages));
    }, [messages]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Webhook n8n url
            const webhookUrl = 'https://elber.app.n8n.cloud/webhook/70cf8e5a-028b-4399-9c9e-4346d48c3123';

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.text }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Adjust this based on your actual n8n output structure
            // Common patterns: { output: "text" }, { text: "text" }, { message: "text" }
            // For now, checks for 'output', then 'text', then 'message', then stringifies whole data
            const botResponseText = data.output || data.text || data.message || (typeof data === 'string' ? data : JSON.stringify(data));

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Lo siento, tuve un problema al conectar con el servidor. Por favor intenta de nuevo.',
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[500px] mb-4 flex flex-col border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-anthropic-black p-5 flex justify-between items-center text-cream shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-cream/10 p-2 rounded-full">
                                    <Bot size={20} className="text-cream" />
                                </div>
                                <div>
                                    <h3 className="font-headings font-bold text-sm">Asistente Virtual</h3>
                                    <span className="flex items-center gap-1 text-[10px] text-cream/60 font-headings">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                        Soporte Activo
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-cream/60 hover:text-cream transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-cream">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-anthropic-black text-cream rounded-tr-none font-headings font-medium'
                                            : 'bg-white border border-anthropic-black/5 text-anthropic-black rounded-tl-none shadow-sm font-body'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-anthropic-black/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-anthropic-black/20 rounded-full animate-bounce"></div>
                                            <div className="w-1.5 h-1.5 bg-anthropic-black/20 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                            <div className="w-1.5 h-1.5 bg-anthropic-black/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-5 bg-white border-t border-anthropic-black/5">
                            <form
                                onSubmit={handleSendMessage}
                                className="flex items-center gap-3"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="¿En qué podemos ayudarle?"
                                    className="flex-1 px-4 py-3 bg-cream/50 border border-anthropic-black/5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-anthropic-black/5 text-anthropic-black placeholder-anthropic-black/30 font-headings"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    className="bg-anthropic-black text-cream p-3 rounded-xl hover:bg-anthropic-black/90 transition-all disabled:opacity-20 flex-shrink-0"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <p className="text-[10px] text-anthropic-black/30 font-headings uppercase tracking-wider">
                                    Potenciado por n8n & ESN Nexus
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-anthropic-black text-cream p-4 rounded-full shadow-2xl shadow-anthropic-black/20 hover:shadow-anthropic-black/30 transition-all flex items-center justify-center group relative overflow-hidden ring-1 ring-white/10"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

                {!isOpen && (
                    <span className="absolute top-0 right-0 p-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
