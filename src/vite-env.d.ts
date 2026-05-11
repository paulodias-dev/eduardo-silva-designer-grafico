/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_INSTAGRAM: string
  readonly VITE_LINKEDIN: string
  readonly VITE_BEHANCE: string
  readonly VITE_EMAIL: string
  readonly VITE_PHONE: string
  readonly VITE_ADDRESS: string
  readonly VITE_ADDRESS_SHORT: string
  readonly VITE_MAPS_EMBED: string
  readonly VITE_MAPS_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
