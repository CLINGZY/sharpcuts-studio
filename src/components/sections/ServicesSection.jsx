import "./ServicesSection.css"
import { fetchServices } from "../../firebase/services.js";
import { useEffect, useState } from "react";



export default function ServicesSection() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const load = async () => {
            setLoading(true);

            const data = await fetchServices();

            setServices(data);
            setLoading(false);
        };

        load();
    }, []);



    if (loading) {
        return (
            <section className="services-section">
                <h2 className="services-title">Our Services</h2>
                <p className="services-subtitle">Loading services...</p>
            </section>
        );
    }


    if (!loading && services.length === 0) {
        return (
            <section className="services-section">
                <h2 className="services-title">Our Services</h2>
                <p className="services-subtitle">No services available yet.</p>
            </section>
        );
    }


    return (
        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Premium grooming services tailored for modern styles</p>

            <div className="services-grid">
                {services.map((service) => {
                    return (
                        <div key={service.id} className="service-card">
                            <img className="service-image" src={service.imageUrl} alt={service.name} />
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









