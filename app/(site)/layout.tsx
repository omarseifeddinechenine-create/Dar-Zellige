import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-[4.25rem]">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
