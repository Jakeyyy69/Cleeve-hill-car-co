import Link from 'next/link'
import {cars} from '@/lib/sanity'
import Card from '@/components/Card'
export const revalidate=60
export default async function Home(){
 const all=await cars(),live=all.filter(c=>c.status!='Sold'),fe=live.filter(c=>c.featured),feat=(fe.length?fe:live).slice(0,6),sold=all.filter(c=>c.status=='Sold').slice(0,3)
 const none=<p className="meta">Cars will appear here once you add them in the studio.</p>
 return <>
 <section className="hero"><div className="wrap"><h1>Cars worth<br/>driving.</h1><p>Hand-picked used cars at fair prices. See what's in, or tell us what you're selling.</p><Link className="btn" href="/cars">View cars</Link><Link className="btn ghost" href="/sell">Sell us your car</Link></div></section>
 <section><div className="wrap"><h2>Featured cars</h2>{feat.length?<div className="grid">{feat.map(c=><Card key={c._id} c={c}/>)}</div>:none}<p className="more"><Link className="btn ghost" href="/cars">View all cars</Link></p></div></section>
 <section className="alt"><div className="wrap"><h2>Why buy from us</h2><div className="cols">
 <div><h3>Carefully selected</h3><p>We buy cars we'd be happy to own, and pass on the rest.</p></div><div><h3>Honest descriptions</h3><p>What's good, what's been fixed, what to know. It's all in the listing.</p></div>
 <div><h3>Fair prices</h3><p>Priced against the market. No games.</p></div><div><h3>No pressure</h3><p>View it, drive it, take your time.</p></div></div></div></section>
 <section><div className="wrap"><h2>Recent sales</h2>{sold.length?<div className="grid">{sold.map(c=><Card key={c._id} c={c}/>)}</div>:<p className="meta">Sold cars will appear here.</p>}</div></section>
 <section className="alt"><div className="wrap"><h2>How it works</h2><ol className="steps"><li><h3>Browse</h3><p>Look through the cars we have in.</p></li><li><h3>Choose</h3><p>Ask us anything about the one you like.</p></li><li><h3>View</h3><p>Come and see it, and take it for a drive.</p></li><li><h3>Buy</h3><p>Sort the paperwork and payment, then it's yours.</p></li></ol></div></section>
 <section><div className="wrap cta"><h2>Got a car to sell?</h2><p>Tell us about it and we'll come back to you with an offer.</p><Link className="btn" href="/sell">Get a valuation</Link></div></section>
 <section className="alt"><div className="wrap cta"><h2>Looking for your next car?</h2><Link className="btn" href="/cars">Browse stock</Link><Link className="btn ghost" href="/contact">Contact us</Link></div></section></>}
