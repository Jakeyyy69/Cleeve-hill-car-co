import '../globals.css'
import Link from 'next/link'
import {SITE,LINKS} from '@/lib/site'
import Nav from '@/components/Nav'
export default function Site({children}:{children:React.ReactNode}){
 const tel='tel:'+SITE.phone.replace(/\s/g,'')
 return <><Nav/><main>{children}</main><footer><div className="wrap fgrid">
 <div><Link className="logo" href="/">{SITE.name}</Link><p className="meta">{SITE.area}<br/>[COMPANY / TRADING DETAILS]</p></div>
 <div>{LINKS.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</div>
 <div><a href={tel}>{SITE.phone}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a><a href={`https://wa.me/${SITE.wa}`}>WhatsApp</a></div>
 <div><Link href="/legal#privacy">Privacy Policy</Link><Link href="/legal#terms">Terms &amp; Conditions</Link><Link href="/legal#cookies">Cookie Policy</Link><Link href="/legal#disclaimer">Website Disclaimer</Link></div></div>
 <p className="wrap meta">© {new Date().getFullYear()} {SITE.name}</p></footer></>}
