import {createClient} from 'next-sanity'
import type {Car} from './car'
const client=createClient({projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'missing',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',apiVersion:'2024-10-01',useCdn:false})
const F=`_id,"slug":slug.current,make,model,variant,year,price,mileage,fuel,transmission,engine,body,colour,reg,doors,owners,mot,service,cat,description,features,images,status,featured,"added":_createdAt`
const opt={next:{revalidate:60}} // new cars appear on the site within about a minute
export const cars=()=>client.fetch<Car[]>(`*[_type=="vehicle"]|order(_createdAt desc){${F}}`,{},opt).catch(()=>[] as Car[])
export const car=(slug:string)=>client.fetch<Car|null>(`*[_type=="vehicle"&&slug.current==$slug][0]{${F}}`,{slug},opt).catch(()=>null)
