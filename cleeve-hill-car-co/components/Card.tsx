import Link from 'next/link'
import {Car,img,gbp,mi,name} from '@/lib/car'
export default function Card({c}:{c:Car}){const s=c.images?.[0]
 return <Link className={`card ${c.status=='Sold'?'sold':''}`} href={`/cars/${c.slug}`}><div className="im">{s&&<img src={img(s,640)} alt={name(c)} loading="lazy"/>}</div><span className={`tag ${c.status}`}>{c.status}</span>
 <div className="bd"><h3>{c.make} {c.model} {c.variant}</h3><ul className="sp"><li>{c.year}</li><li>{mi(c.mileage)}</li><li>{c.fuel}</li><li>{c.transmission}</li></ul>
 <div className="row"><span className="price">{gbp(c.price)}</span>{c.reg&&<span className="plate">{c.reg}</span>}</div></div></Link>}
