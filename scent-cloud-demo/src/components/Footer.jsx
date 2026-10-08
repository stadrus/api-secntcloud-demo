import { Envelope, FacebookLogo, Globe, InstagramLogo, MapPin, Phone, TiktokLogo } from "phosphor-react"




const Footer = () =>{
    return (
       <div className="footer">
            <div className="footer-left">
                <h4>Scent Cloud</h4>
                <p>A perfume company</p>
                <p><Globe size={15}/>notarealsite.com</p>
            </div>
            
            <div className="footer-center">
                <h5>Contact Us!</h5>
                <p><Phone size={15}/>123-456-7890</p>
                <p><Envelope size={15}/>company@email.com</p>
                <p><MapPin size={15}/>123 Business St USA</p>
            </div>

            <div className="footer-right">
                <h5>Follow Us!</h5>
                <p><FacebookLogo size={15}/>FaceBook</p>
                <p><InstagramLogo size={15}/>Instagram</p>
                <p><TiktokLogo size={15}/>TikTok</p>
            </div>


       </div>

       
            
    )
}
export default Footer