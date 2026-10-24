import Link from 'next/link'
export const metadata={title:'Reviews',description:'What customers say about buying from us.'}
const R=[['Sample A.','BMW 3 Series',5],['Sample B.','VW Golf',5],['Sample C.','Mini Cooper',4]] as const // SAMPLES: replace with real reviews
export default function Reviews(){return <div className="wrap page"><h1>Reviews</h1><p>Sample reviews shown for layout only. Replace them in app/(site)/reviews/page.tsx.</p>
 <div className="grid">{R.map(([n,c,s])=><div className="card" key={n}><div className="bd"><p className="stars" aria-label={`${s} out of 5`}>{'★'.repeat(s)}</p><p>Sample review text. Replace with a real customer review.</p><p className="meta">{n}, {c} <span className="ph">Sample</span></p></div></div>)}</div>
 <p className="more"><Link className="btn ghost" href="/contact">Bought a car from us? Leave a review</Link></p></div>}
