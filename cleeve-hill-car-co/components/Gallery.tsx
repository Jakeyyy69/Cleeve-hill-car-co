'use client'
import {useState} from 'react'
import {img} from '@/lib/car'
export default function Gallery({images,alt}:{images:any[];alt:string}){const [i,setI]=useState(0)
 if(!images?.length)return <div className="gal"><div className="main"/></div>
 return <div className="gal"><div className="main"><img src={img(images[i],1200)} alt={alt}/></div><div className="thumbs">{images.map((s,n)=><button key={n} onClick={()=>setI(n)} aria-label={`Photo ${n+1}`}><img src={img(s,240)} alt="" loading="lazy"/></button>)}</div></div>}
