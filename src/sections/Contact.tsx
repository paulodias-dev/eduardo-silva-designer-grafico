import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { env, getWhatsAppLink } from '../lib/utils'

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: env.phone,
    href: getWhatsAppLink('Olá Eduardo! Gostaria de entrar em contato.'),
    external: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: env.email,
    href: `mailto:${env.email}`,
    external: false,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: env.addressShort,
    href: env.mapsLink,
    external: true,
    fullAddress: env.address,
  },
]

const socialLinks = [
  { icon: Instagram, href: env.instagram, label: 'Instagram' },
  { icon: Linkedin, href: env.linkedin, label: 'LinkedIn' },
]

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Contato"
          title="Vamos conversar sobre seu projeto"
          description="Estou sempre disponível para novos projetos e parcerias. Entre em contato através de qualquer um dos canais abaixo."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center shrink-0">
                    <contact.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                    {'fullAddress' in contact && contact.fullAddress && (
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{contact.fullAddress}</p>
                    )}
                  </div>
                  {contact.external && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Redes Sociais
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 border border-border transition-colors duration-200"
                    aria-label={`Siga no ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-lg overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.6663290926635!2d-48.947230399999995!3d-16.2888631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a2735aaaaaab%3A0x47c0d15788f26df2!2sA%C3%A7%C3%A3oTotal%20Marketing%20e%20Propaganda!5e0!3m2!1spt-BR!2sbr!4v1778499781473!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização - ${env.addressShort}`}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
