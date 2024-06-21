import { FaHeart } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";

const Footer = () => {
  return (
    <div className="flex items-center max-[475px]:flex-col max-[475px]:justify-center gap-4 my-8 flex-wrap">
        <div className="flex items-center max-[768px]:mr-auto max-[475px]:mx-auto gap-2 font-semibold font-open-sans text-lg text-red-300">
            <span>Made with</span>
            <FaHeart size={'1.5rem'} className="text-red-600 animate-pulse" />
            <span>in Hyderabad</span>
        </div>

        <div className="flex-1 hidden md:block bg-no-repeat bg-contain bg-center w-[125px] h-[125px]" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>

        <div className="flex items-center gap-4 max-[475px]:w-[250px] max-[475px]:justify-between">
            <a href="https://www.linkedin.com/in/karthik-madugula/" target="_blank">
                <FaLinkedin size={'1.5rem'} className="text-blue-500" />
            </a>
            
            <a href="https://www.youtube.com/@karmathelifecoach" target="_blank" >
                <FaYoutube size={'2rem'} className="text-red-500" />
            </a>

            <a href="https://www.instagram.com/karmathelifecoach/?hl=en" target="_blank" >
                <FaInstagram size={'1.5rem'} className="#feda75" />
            </a>

            <a href={`https://wa.me/919550656621?text=I%20would%20like%20to%20connect%20with%20you`} target="_blank" >
                <FaWhatsapp size={'1.5rem'} className="text-green-500" />
            </a>
        </div>
    </div>
  )
}

export default Footer