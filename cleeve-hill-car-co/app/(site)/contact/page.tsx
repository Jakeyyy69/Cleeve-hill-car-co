import {SITE} from '@/lib/site'
import EnquiryForm from '@/components/EnquiryForm'
export const metadata={title:'Contact',description:'Call, email or WhatsApp us, or send an enquiry.'}
export default function Contact(){return <div className="wrap page"><h1>Contact</h1><div className="cols" style={{marginTop:24}}><div>
 <p><a href={'tel:'+SITE.phone.replace(/\s/g,'')}>{SITE.phone}</a><br/><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br/><a href={`https://wa.me/${SITE.wa}`}>WhatsApp us</a></p><p>{SITE.address}<br/>{SITE.area}</p><p>{SITE.hours}</p><div className="box">Google Map embed goes here</div></div>
 <EnquiryForm type="General enquiry" fields="name,email,phone,msg" btn="Send enquiry" note="Opens your email app with your message filled in."/></div></div>}
