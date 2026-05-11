import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../lib/utils'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink('Olá Eduardo! Vim pelo seu site e gostaria de um orçamento.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </motion.a>
  )
}
