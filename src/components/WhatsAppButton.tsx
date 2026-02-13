import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("Hello, I am reaching out from the website. I would like to book or know more about your services.");

    const phoneNumber = "260979961647";

    const handleSend = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-card border border-border rounded-2xl shadow-2xl p-6 w-72 sm:w-80"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-display font-bold text-foreground">Message Dr. Kabani</h3>
                            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Contact directly via WhatsApp:
                        </p>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-32 p-3 text-sm bg-muted rounded-xl border-none focus:ring-1 focus:ring-primary mb-4 resize-none"
                            placeholder="Type your message here..."
                        />
                        <Button
                            onClick={handleSend}
                            className="w-full flex items-center justify-center gap-2"
                            variant="hero"
                        >
                            <Send size={16} />
                            Send to WhatsApp
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="hero"
                size="lg"
                className="shadow-xl hover:scale-105 transition-transform duration-200 rounded-full w-14 h-14 p-0"
                aria-label="Contact via WhatsApp"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>
        </div>
    );
};
