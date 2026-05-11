import { motion } from 'framer-motion'
import { Palette, Instagram, LayoutGrid, FileImage, Smartphone, PenTool } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { getWhatsAppLink } from '../lib/utils'

const services = [
  {
    icon: Instagram,
    title: 'Artes para Instagram',
    description: 'Posts, stories, reels covers e destaques que engajam e fortalecem sua presença na plataforma.',
    features: ['Posts Feed', 'Stories', 'Reels Covers', 'Destaques'],
  },
  {
    icon: LayoutGrid,
    title: 'Identidade Visual para Redes',
    description: 'Criação de identidade visual consistente para suas redes sociais, mantendo a coerência da marca.',
    features: ['Paleta de Cores', 'Tipografia', 'Templates', 'Guidelines'],
  },
  {
    icon: FileImage,
    title: 'Banners e Capas',
    description: 'Banners profissionais para todas as redes sociais: Facebook, LinkedIn, YouTube e Twitter.',
    features: ['Facebook', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    icon: Smartphone,
    title: 'Conteúdo para Stories',
    description: 'Artes interativas e animadas para stories que capturam a atenção e geram engajamento.',
    features: ['Enquetes', 'Quizzes', 'Contagem Regressiva', 'Links'],
  },
  {
    icon: Palette,
    title: 'Carrosséis Estratégicos',
    description: 'Carrosséis informativos e educativos que agregam valor e aumentam o tempo de visualização.',
    features: ['Educativos', 'Promocionais', 'Institucionais', 'Tutoriais'],
  },
  {
    icon: PenTool,
    title: 'Materiais Promocionais',
    description: 'Artes para campanhas, promoções e lançamentos que convertem e geram resultados.',
    features: ['Campanhas', 'Promoções', 'Lançamentos', 'Anúncios'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Serviços"
          title="Soluções completas para sua presença digital"
          description="Ofereço uma gama completa de serviços de design para mídias sociais, desde a criação de posts até a identidade visual completa da sua marca nas redes."
        />

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/15 rounded-md flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-semibold text-xl text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              
              {/* Features Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Precisa de algo específico? Entre em contato e conversamos sobre seu projeto.
          </p>
          <a
            href={getWhatsAppLink('Olá Eduardo! Gostaria de saber mais sobre seus serviços de design para mídias sociais.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Falar sobre meu projeto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
