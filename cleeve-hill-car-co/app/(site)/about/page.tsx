import Link from 'next/link'
export const metadata={title:'About',description:'Who we are and how we buy and sell cars.'}
export default function About(){return <div className="wrap page narrow"><h1>About us</h1>
 <h2>Our story</h2><p>[Write 2 or 3 honest sentences about how you started.]</p><h2>What we do</h2><p>We buy used cars, sort what needs sorting, and sell them on. [Edit to match what you actually do.]</p>
 <h2>How we buy</h2><p>[Describe what you look for and what you walk away from.]</p><h2>What to expect</h2><p>[Viewing, test drive, paperwork, after-sale contact.]</p>
 <div className="box">Photo of you or the workshop goes here</div><p className="more"><Link className="btn" href="/contact">Get in touch</Link></p></div>}
