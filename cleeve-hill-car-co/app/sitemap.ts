import type {MetadataRoute} from 'next'
import {cars} from '@/lib/sanity'
import {SITE} from '@/lib/site'
export const revalidate=3600
export default async function sitemap():Promise<MetadataRoute.Sitemap>{return [...['','/cars','/sell','/about','/reviews','/contact'].map(p=>({url:SITE.url+p})),...(await cars()).map(c=>({url:`${SITE.url}/cars/${c.slug}`}))]}
