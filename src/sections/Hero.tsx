import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { getWhatsAppLink } from '../lib/utils'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,150,100,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-md text-sm font-semibold mb-6"
            >
              Designer Gráfico Especialista
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground tracking-tight leading-tight text-balance"
            >
              Transformo ideias em{' '}
              <span className="text-accent font-bold">designs</span> que engajam
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Sou Eduardo Silva, designer gráfico da Ação Total, especializado em criar 
              artes impactantes para mídias sociais que destacam sua marca no ambiente digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={getWhatsAppLink('Olá Eduardo! Gostaria de um orçamento para minha marca.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity duration-200 w-full sm:w-auto justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <Play className="w-4 h-4" />
                Ver Trabalhos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6"
            >
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">3+</p>
                <p className="mt-1 text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Projetos Entregues</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Portfolio Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl rotate-3" />
              
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden bg-secondary shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-WPFZcWcjqqtHEjYH0GolPRWJjF1oJ7.jpeg"
                  alt="Portfólio de trabalhos do Eduardo Silva - Designer Gráfico"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-card px-4 py-3 rounded-lg shadow-xl border border-border"
              >
                <p className="text-sm font-medium text-foreground">Designer Gráfico</p>
                <p className="text-xs text-muted-foreground">Ação Total</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
