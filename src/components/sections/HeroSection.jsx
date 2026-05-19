import "./HeroSection.css"


export default function HeroSection () {
    return (
        <section>
            <div className="hero-container">
                <h1 className="hero-title">SharpCuts Studio</h1>

                <p className="hero-subtitle">Premium barber experience, clean modern cuts</p>

                <div className="hero-buttons">
                    <button className="btn-primary">Book Appointment</button>
                    <button className="btn-secondary">View Services</button>
                </div>
            </div>
        </section>
    )
}