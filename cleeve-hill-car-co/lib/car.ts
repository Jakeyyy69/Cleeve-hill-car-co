import imageUrlBuilder from '@sanity/image-url'
export type Car={_id:string;slug:string;make:string;model:string;variant:string;year:number;price:number;mileage:number;fuel:string;transmission:string;engine?:string;body?:string;colour?:string;reg?:string;doors?:number;owners?:number;mot?:string;service?:string;cat?:string;description?:string;features?:string[];images:any[];status:'Available'|'Reserved'|'Sold';featured?:boolean;added:string}
const b=imageUrlBuilder({projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'missing',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production'})
export const img=(s:any,w=800)=>b.image(s).width(w).auto('format').quality(80).url()
export const gbp=(n:number)=>'£'+Number(n).toLocaleString('en-GB')
export const mi=(n:number)=>Number(n).toLocaleString('en-GB')+' miles'
export const name=(c:Car)=>`${c.year} ${c.make} ${c.model} ${c.variant}`
