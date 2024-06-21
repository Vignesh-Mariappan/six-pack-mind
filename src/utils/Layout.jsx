import 'animate.css';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Layout = () => {

  return (
    <div className='w-full h-full max-w-[1440px] mx-auto px-4 max-[325px]:px-1 font-open-sans'>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout;