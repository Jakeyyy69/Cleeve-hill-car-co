import {notFound} from 'next/navigation'
import type {Metadata} from 'next'
import {car,cars} from '@/lib/sanity'
import {img,gbp,mi,name} from '@/lib/car'
import {SITE} from '@/lib/site'
import Card from '@/components/Card'
import Gallery from '@/components/Gallery'
import EnquiryForm from '@/components/EnquiryForm'
export const revalidate=60 // pages for new cars are created on first visit, so no rebuild is needed
type P={params:Promise<{slug:string}>}
export async function generateMetadata({params}:P):Promise<Metadata>{const c=await car((await params).slug);if(!c)return {}
 const d=`${name(c)}, ${mi(c.mileage)}, ${c.fuel}, ${c.transmission}. ${gbp(c.price)} at ${SITE.name}, ${SITE.area}.`
 return {title:`${name(c)} for sale`,description:d,alternates:{canonical:`/cars/${c.slug}`},openGraph:{title:name(c),description:d,images:c.images?.[0]?[img(c.images[0],1200)]:[]}}}
export default async function Vehicle({params}:P){
 const c=await car((await params).slug);if(!c)notFound()
 const sim=(await cars()).filter(x=>x._id!=c._id&&x.status!='Sold').sort((a,b)=>Math.abs(a.price-c.price)-Math.abs(b.price-c.price)).slice(0,3)
 const S:[string,any][]=[['Year',c.year],['Mileage',mi(c.mileage)],['Registration',c.reg],['Fuel',c.fuel],['Transmission',c.transmission],['Engine',c.engine],['Body type',c.body],['Colour',c.colour],['Doors',c.doors],['Previous owners',c.owners],['MOT until',c.mot],['Service history',c.service],['Write-off category',c.cat]]
 const wa=`https://wa.me/${SITE.wa}?text=${encodeURIComponent(`Hi, I'm interested in the ${name(c)} listed for ${gbp(c.price)}. Is it still available?`)}`,tel='tel:'+SITE.phone.replace(/\s/g,'')
 const ld={'@context':'https://schema.org','@type':'Car',name:name(c),brand:{'@type':'Brand',name:c.make},model:c.model,vehicleModelDate:c.year,image:c.images?.[0]?img(c.images[0],1200):undefined,
  mileageFromOdometer:{'@type':'QuantitativeValue',value:c.mileage,unitCode:'SMI'},fuelType:c.fuel,vehicleTransmission:c.transmission,color:c.colour,
  offers:{'@type':'Offer',price:c.price,priceCurrency:'GBP',availability:c.status=='Sold'?'https://schema.org/SoldOut':'https://schema.org/InStock'}}
 return <div id="vehicle"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
 <div className="wrap vgrid"><div><Gallery images={c.images} alt={name(c)}/><h1 style={{fontSize:'clamp(2.4rem,6vw,3.6rem)'}}>{name(c)}</h1>
 <dl className="specs">{S.filter(s=>s[1]).map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
 {!!c.features?.length&&<><h2 style={{fontSize:'2rem'}}>Features</h2><ul className="feat">{c.features!.map(f=><li key={f}>{f}</li>)}</ul></>}
 {c.description&&<><h2 style={{fontSize:'2rem'}}>About this car</h2><p className="meta" style={{fontSize:'1rem',whiteSpace:'pre-line'}}>{c.description}</p></>}</div>
 <aside className="panel" id="enq"><span className={`tag ${c.status}`} style={{position:'static',display:'inline-block',marginBottom:10}}>{c.status}</span><div className="price">{gbp(c.price)}</div><p className="meta">{c.year}, {mi(c.mileage)}</p><hr/>
 <a className="btn" href={wa}>WhatsApp</a><a className="btn ghost" href={tel}>Call {SITE.phone}</a><hr/>
 <EnquiryForm type="Vehicle enquiry" fields="name,email,phone,msg" vehicle={`${name(c)} ${gbp(c.price)} ${mi(c.mileage)}`} btn="Enquire now" viewing/></aside></div>
 {!!sim.length&&<div className="wrap"><h2>Similar cars</h2><div className="grid">{sim.map(x=><Card key={x._id} c={x}/>)}</div></div>}
 <div className="mbar"><a className="btn" href="#enq">Enquire now</a><a className="btn ghost" href={tel}>Call</a><a className="btn ghost" href={wa}>WhatsApp</a></div></div>}
