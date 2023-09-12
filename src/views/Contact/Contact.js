import Navbar from './../../components/Navbar/Navbar';
import "./Contact.css";
import imgphone from "./phone.png";
import imgemail from "./email.png";
import imgchrome from "./chrome.png";
import imglocation from "./location.png";
export default function Contact() {
    return (
        <div >
            <Navbar />
            <h1 className='heading'>JOIN The Green Revolution And Spread The Word About Eco-friendly Ganesha..!</h1>
            <h3 className='heading02'>For Enquries And Bookings:</h3>
           <span className='contact-content'>  <img src={imgphone}  className='icons'/> 8879672071 </span> <br/>
         <span className='contact-content'><img src={imgemail}  className='icons'/> info@treeganesha.com</span> <br/>
<span className='contact-content'> <img src={imgchrome}  className='icons'/> www.treeganesha.com</span> <br/>
<span className='contact-content'> <img src={imglocation}  className='icons'/> Municipal Industrial Estate, Gala no.45, Worli, Mumbai, Maharashtra 400018.</span>
        </div>
    )
}