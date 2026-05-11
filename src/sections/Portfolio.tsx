import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { cn } from '../lib/utils'

const categories = ['Todos', 'Portfólio', 'Mídias Sociais', 'Campanhas']

const portfolioItems = [
  {
    id: 1,
    title: 'Portfólio - Apresentação',
    category: 'Portfólio',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-EVowUJg9AGILIqfbSQpB3OJtOJS9Dd.jpeg',
  },
  {
    id: 2,
    title: 'Introdução - Designer Gráfico',
    category: 'Portfólio',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-L1EjgmJDzEiIXoOs4dYkLTxsngFzsw.jpeg',
  },
  {
    id: 3,
    title: 'Trabalhos Recentes - Showcase',
    category: 'Mídias Sociais',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-WPFZcWcjqqtHEjYH0GolPRWJjF1oJ7.jpeg',
  },
  {
    id: 4,
    title: 'Experiência de Trabalho',
    category: 'Portfólio',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-73qyUpoWv3qB6lUnt4Mk26ZaUmOCKq.jpeg',
  },
  {
    id: 5,
    title: 'Criatividade em Cada Projeto',
    category: 'Campanhas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-BPRmep55Rk9HMpobzkDYzikS5ktSOk.jpeg',
  },
  {
    id: 6,
    title: 'Agradecimento - Finalização',
    category: 'Portfólio',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-iu4uHv1YwE9KIFh348xVXtIFzeN67S.jpeg',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredItems = activeCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfólio"
          title="Meus trabalhos recentes"
          description="Uma seleção dos meus projetos mais recentes, refletindo minha abordagem única e capacidade de criar designs que engajam e convertem."
        />

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-md mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
