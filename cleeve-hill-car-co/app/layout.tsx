import type {Metadata} from 'next'
import {SITE} from '@/lib/site'
export const metadata:Metadata={metadataBase:new URL(SITE.url),title:{default:`Used cars for sale in Cheltenham | ${SITE.name}`,template:`%s | ${SITE.name}`},description:'Hand-picked used cars at fair prices. Browse our stock or tell us what you are selling.',openGraph:{type:'website',siteName:SITE.name}}
export default function Root({children}:{children:React.ReactNode}){return <html lang="en-GB"><body>{children}</body></html>}
