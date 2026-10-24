'use client'
import {SITE} from '@/lib/site'
const FD:Record<string,[string,string?,string[]?]>={name:['Name'],email:['Email','email'],phone:['Phone','tel'],reg:['Registration'],make:['Make'],model:['Model'],year:['Year','number'],mileage:['Mileage','number'],
 fuel:['Fuel','select',['Petrol','Diesel','Hybrid','Electric']],trans:['Transmission','select',['Manual','Automatic']],cond:['Condition','select',['Excellent','Good','Fair','Needs work']],
 service:['Service history','select',['Full','Partial','None']],mot:['MOT expiry','date'],owners:['Previous owners','number'],price:['Desired price (£)','number'],msg:['Message','textarea']}
// No backend yet: submitting opens the visitor's email app with everything filled in.
export default function EnquiryForm({type,fields,vehicle,btn='Send',note,cols,viewing}:{type:string;fields:string;vehicle?:string;btn?:string;note?:string;cols?:boolean;viewing?:boolean}){
 return <form onSubmit={e=>{e.preventDefault();const fd=new FormData(e.currentTarget),v=fd.get('Book a viewing')
  const L=[...(vehicle?['Vehicle: '+vehicle]:[]),...[...fd].filter(([,x])=>x).map(([k,x])=>`${k}: ${x}`)]
  location.href=`mailto:${SITE.email}?subject=${encodeURIComponent((v?'Viewing request':type)+(vehicle?' - '+vehicle:''))}&body=${encodeURIComponent(L.join('\n'))}`}}>
 <div className={cols?'fg':''}>{fields.split(',').map(k=>{const [l,t,o]=FD[k];return <label key={k}>{l}{t=='select'?<select name={l}><option value="">Select</option>{o!.map(x=><option key={x}>{x}</option>)}</select>:t=='textarea'?<textarea name={l} rows={4}/>:<input name={l} type={t||'text'} required={['Name','Email','Phone'].includes(l)}/>}</label>})}</div>
 {viewing&&<label><input type="checkbox" name="Book a viewing" value="Yes" style={{width:'auto',marginRight:8}}/>I'd like to book a viewing</label>}
 <button className="btn">{btn}</button>{note&&<p className="meta" style={{marginTop:12}}>{note}</p>}</form>}
