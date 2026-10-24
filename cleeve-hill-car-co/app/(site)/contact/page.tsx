import {SITE} from '@/lib/site'
import EnquiryForm from '@/components/EnquiryForm'
export const metadata={title:'Contact',description:'Call, email or WhatsApp us, or send an enquiry.'}
export default function Contact(){return <div className="wrap page"><h1>Contact</h1><div className="cols" style={{marginTop:24}}><div>
 <p><a href={'tel:'+SITE.phone.replace(/\s/g,'')}>{SITE.phone}</a><br/><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br/><a href={`https://wa.me/${SITE.wa}`}>WhatsApp us</a></p><p>{SITE.address}<br/>{SITE.area}</p><p>{SITE.hours}</p>
 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d520.4199515652772!2d-2.0494238986588558!3d51.929869197852064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2suk!4v1792875519136!5m2!1sen!2suk" width="100%" height="300" style={{border:0,borderRadius:6}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map showing our location" /></div>
 <EnquiryForm type="General enquiry" fields="name,email,phone,msg" btn="Send enquiry" note="Opens your email app with your message filled in."/></div></div>}