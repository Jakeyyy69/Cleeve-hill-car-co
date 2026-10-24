import EnquiryForm from '@/components/EnquiryForm'
export const metadata={title:'Sell your car',description:'Tell us about your car and get a valuation. Submitting the form does not guarantee a purchase.'}
export default function Sell(){return <div className="wrap page narrow"><h1>Sell your car</h1><p>Fill in what you know. We'll review it and get back to you.</p>
 <EnquiryForm type="Sell my car" cols btn="Get my valuation" fields="name,email,phone,reg,make,model,year,mileage,fuel,trans,cond,service,mot,owners,price,msg" note="Submitting this form does not guarantee a valuation or purchase. It opens your email app with your details filled in. Attach photos before sending, or send them on WhatsApp."/></div>}
