import "./ServicesSection.css"

import haircutImg from "../../assets/images/haircut.jpeg";
import beardImg from "../../assets/images/beard.jpeg";
import premiumImg from "../../assets/images/premium.jpeg";


export default function ServicesSection() {
    return (
        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Premium grooming services tailored for modern styles</p>

            <div className="services-grid">
                <div className="service-card">
                    <img className="service-image" src={haircutImg} alt="Classic Haircut" />

                    <h3 className="service-name">Classic Haircut</h3>
                    <p className="service-description">A classic haircut with a modern twist, perfect for any occasion.</p>
                    <span className="service-price">₦5000</span>
                </div>


                <div className="service-card">
                    <img className="service-image" src={beardImg} alt="Beard Styling" />

                    <h3 className="service-name">Beard Styling</h3>
                    <p className="service-description">Professional beard trimming and styling for a polished look.</p>
                    <span className="service-price">₦3000</span>
                </div>


                <div className="service-card">
                    <img className="service-image" src={premiumImg} alt="Premium Package" />

                    <h3 className="service-name">Premium Package</h3>
                    <p className="service-description">A comprehensive grooming package including haircut, beard styling, and styling.</p>
                    <span className="service-price">₦7000</span>
                </div>
                
            </div>
        </section>
    )
} 