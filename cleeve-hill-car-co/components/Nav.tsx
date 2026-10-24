'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {SITE,LINKS} from '@/lib/site'
export default function Nav(){const p=usePathname(),[o,setO]=useState(false)
 return <header><div className="wrap bar"><Link className="logo" href="/"><img src="/logo.svg" alt={SITE.name} style={{display:'block',height:46,width:'auto'}}/></Link><button id="burger" aria-label="Menu" onClick={()=>setO(!o)}>☰</button>
 <nav className={o?'open':''} onClick={()=>setO(false)}>{LINKS.map(([h,t])=><Link key={h} href={h} className={p==h||(h!='/'&&p.startsWith(h))?'on':''}>{t}</Link>)}<Link className="btn" href="/cars">View cars</Link></nav></div></header>}