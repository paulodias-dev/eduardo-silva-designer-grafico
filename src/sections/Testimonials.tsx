import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina Mendes',
    role: 'CEO, Boutique Rosa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
    content: 'O Eduardo transformou completamente a presença da nossa marca nas redes sociais. Nosso engajamento aumentou em 300% e as vendas pelo Instagram dispararam. Profissional excepcional!',
  },
  {
    id: 2,
    name: 'Roberto Lima',
    role: 'Diretor de Marketing, TechFlow',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
    content: 'Trabalhar com o Eduardo foi uma experiência incrível. Ele entendeu perfeitamente nossa visão e entregou designs que superaram todas as expectativas. Recomendo fortemente!',
  },
  {
    id: 3,
    name: 'Fernanda Santos',
    role: 'Proprietária, Café Aroma',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
    content: 'Os designs do Eduardo são únicos e cheios de personalidade. Ele capturou perfeitamente a essência do meu café e traduziu em visuais que meus clientes adoram.',
  },
  {
    id: 4,
    name: 'Lucas Oliveira',
    role: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    content: 'Desde que o Eduardo começou a fazer minhas artes para o Instagram, meu número de seguidores triplicou. O conteúdo visual que ele cria realmente conecta com meu público.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Depoimentos"
          title="O que meus clientes dizem"
          description="A satisfação dos meus clientes é minha maior conquista. Veja o que eles têm a dizer sobre nosso trabalho juntos."
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 lg:p-8 bg-card rounded-lg border border-border"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>

              {/* Content */}
              <blockquote className="mt-4 text-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
