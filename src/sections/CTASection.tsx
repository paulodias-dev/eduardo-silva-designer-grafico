import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../lib/utils'

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-73qyUpoWv3qB6lUnt4Mk26ZaUmOCKq.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/85" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3"
          >
            Vamos Trabalhar Juntos?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance"
          >
            Pronto para transformar sua presença nas redes sociais?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Entre em contato hoje mesmo e vamos conversar sobre como posso ajudar 
            sua marca a se destacar no ambiente digital com designs impactantes e estratégicos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={getWhatsAppLink('Olá Eduardo! Quero transformar a presença digital da minha marca. Podemos conversar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-neutral-900 font-semibold rounded-md hover:bg-amber-400 transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            {/* <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-medium rounded-md hover:bg-white/25 transition-colors duration-200 w-full sm:w-auto justify-center border border-white/20"
            >
              Ver Contatos
              <ArrowRight className="w-4 h-4" />
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
