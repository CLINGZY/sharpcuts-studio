import "./ServicesSection.css"

import haircutImg from "../../assets/images/haircut.jpeg";
import beardImg from "../../assets/images/beard.jpeg";
import premiumImg from "../../assets/images/premium.jpeg";


const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "A classic haircut with a modern twist, perfect for any occasion.",
    price: "₦5000",
    image: haircutImg
  },
  {
    id: 2,
    name: "Beard Styling",
    description: "Professional beard trimming and styling for a polished look.",
    price: "₦3000",
    image: beardImg
  },
  {
    id: 3,
    name: "Premium Package",
    description: "A comprehensive grooming package including haircut and beard styling.",
    price: "₦7000",
    image: premiumImg
  }
];


export default function ServicesSection() {
    return (
        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Premium grooming services tailored for modern styles</p>

            <div className="services-grid">
                {services.map((service) => {
                    return (
                        <div key={service.id} className="service-card">
                            <img className="service-image" src={service.image} alt={service.name} />
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                            <span className="service-price">{service.price}</span>
                        </div>
                    )
                })}              
            </div>
        </section>
    )
} 









