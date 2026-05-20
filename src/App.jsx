import  Navbar  from "./components/layout/Navbar.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import ServicesSection from "./components/sections/ServicesSection.jsx";
import AdminServices from "./components/admin/AdminServices";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AdminServices />

      <ServicesSection />
      
    </>
)
}