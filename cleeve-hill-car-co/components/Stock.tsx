'use client'
import {useState,useMemo} from 'react'
import Card from './Card'
import {Car,gbp,name} from '@/lib/car'
export default function Stock({cars}:{cars:Car[]}){
 const [f,setF]=useState({q:'',make:'',fuel:'',trans:'',max:'',sort:'new'})
 const set=(k:string)=>(e:any)=>setF({...f,[k]:e.target.value})
 const opt=(k:'make'|'fuel'|'transmission')=>[...new Set(cars.map(c=>c[k]))].sort().map(x=><option key={x}>{x}</option>)
 const r=useMemo(()=>cars.filter(c=>(!f.q||name(c).toLowerCase().includes(f.q.toLowerCase()))&&(!f.make||c.make==f.make)&&(!f.fuel||c.fuel==f.fuel)&&(!f.trans||c.transmission==f.trans)&&(!f.max||c.price<=+f.max))
  .sort((a,b)=>(+(a.status=='Sold')-+(b.status=='Sold'))||({new:b.added.localeCompare(a.added),pl:a.price-b.price,ph:b.price-a.price,mi:a.mileage-b.mileage} as any)[f.sort]),[cars,f])
 return <><p className="meta">{r.length} cars</p><div className="filters">
 <input placeholder="Search make or model" aria-label="Search" value={f.q} onChange={set('q')}/>
 <select value={f.make} onChange={set('make')}><option value="">All makes</option>{opt('make')}</select>
 <select value={f.fuel} onChange={set('fuel')}><option value="">Any fuel</option>{opt('fuel')}</select>
 <select value={f.trans} onChange={set('trans')}><option value="">Any gearbox</option>{opt('transmission')}</select>
 <select value={f.max} onChange={set('max')}><option value="">Any price</option>{[10000,15000,20000,30000].map(p=><option key={p} value={p}>Up to {gbp(p)}</option>)}</select>
 <select value={f.sort} onChange={set('sort')}><option value="new">Newest</option><option value="pl">Price: low to high</option><option value="ph">Price: high to low</option><option value="mi">Lowest mileage</option></select></div>
 <div className="grid">{r.map(c=><Card key={c._id} c={c}/>)}</div>{!r.length&&<p>No cars match. Try widening the filters.</p>}</>}
