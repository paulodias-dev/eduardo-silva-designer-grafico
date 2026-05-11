import { motion } from 'framer-motion'
import { Check, Sparkles, Target, Zap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const features = [
  {
    icon: Sparkles,
    title: 'Criatividade Única',
    description: 'Designs originais que refletem a essência e personalidade da sua marca.',
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Artes estratégicas pensadas para engajar e converter seu público-alvo.',
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description: 'Entrega rápida sem comprometer a qualidade e atenção aos detalhes.',
  },
]

const differentials = [
  'Compreensão profunda das tendências de mídias sociais',
  'Adaptação de designs para diferentes plataformas',
  'Comunicação clara e transparente durante todo o projeto',
  'Revisões ilimitadas até sua total satisfação',
  'Entrega de arquivos em alta qualidade e editáveis',
]

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-BPRmep55Rk9HMpobzkDYzikS5ktSOk.jpeg"
                  alt="Eduardo Silva - Criatividade em cada projeto"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl"
              >
                <p className="font-serif text-4xl font-semibold">3+</p>
                <p className="text-sm mt-1">Anos de Experiência</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="Sobre Mim"
              title="Paixão por criar visuais que conectam"
              align="left"
            />

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com três anos de experiência no design de artes para mídias sociais, 
                desenvolvi uma sólida compreensão das necessidades e dinâmicas do ambiente digital. 
                Trabalho na Ação Total, onde crio conteúdos visuais que não apenas capturam a atenção, 
                mas também promovem engajamento e conexão com o público.
              </p>
              <p>
                Minha abordagem combina criatividade com estratégia. Cada post que crio é pensado 
                de forma estratégica para refletir a essência da sua marca. Desde a escolha de cores 
                até a tipografia, cada detalhe é cuidadosamente elaborado para contar a sua história.
              </p>
            </div>

            {/* Differentials List */}
            <ul className="mt-8 space-y-3">
              {differentials.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
