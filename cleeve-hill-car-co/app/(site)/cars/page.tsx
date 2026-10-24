import {cars} from '@/lib/sanity'
import Stock from '@/components/Stock'
export const revalidate=60
export const metadata={title:'Cars for sale',description:'Used cars currently in stock. Filter by make, fuel, gearbox and price.'}
export default async function Cars(){return <div className="wrap page"><h1>Cars for sale</h1><Stock cars={await cars()}/></div>}
