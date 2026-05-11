import { Instagram, Linkedin, Mail } from 'lucide-react'
import { env } from '../lib/utils'

const socialLinks = [
  { href: env.instagram, icon: Instagram, label: 'Instagram' },
  { href: env.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: env.behance, icon: Mail, label: 'Behance' },
]

const footerLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              className="inline-block"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-SEM-FUNDO-BRANCA-vrJxlzNWU6DEVgENsnIT7gnldscSFd.png"
                alt="Eduardo Designer - Logo"
                className="h-12 w-auto dark:block hidden"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-SEM-FUNDO-mTO1HwhunQhP4vSSm3z3IJ5dmUaZwF.png"
                alt="Eduardo Designer - Logo"
                className="h-12 w-auto dark:hidden block"
              />
            </a>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Designer gráfico especializado em criar artes impactantes para mídias sociais. 
              Transformando a essência da sua marca em visuais criativos que engajam e convertem.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-background rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors duration-200"
                  aria-label={`Siga no ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href={`mailto:${env.email}`}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {env.email}
                </a>
              </li>
              <li>{env.addressShort}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Eduardo Silva. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido por{' '}
            <a
              href="https://fluxosistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-accent transition-colors duration-200"
            >
              Fluxo Sistemas
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
