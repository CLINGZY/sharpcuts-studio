import { useEffect, useState } from "react";
import { createService, fetchServices, deleteService } from "../../firebase/services";

export default function AdminServices() {
    const [services, setServices] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        const loadServices = async () => {
            const data = await fetchServices();
            setServices(data);
        };

        loadServices();
    }, []);

    const handleSubmit = async () => {
        setEditingId(service.id);
        setName(service.name);
        setDescription(service.description);
        setPrice(service.price);
        setImageUrl(service.imageUrl);


        const data = {
            name,
            description,
            price,
            imageUrl
        }

        

        if (editingId) {
            await updateService(editingId, data);
            setEditingId(null);
        } else {
            await createService(data);
        }

        const updated = await fetchServices();
        setServices(updated);

        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
    }


    const handleDeleteService = async (id) => {
        await deleteService(id);

        const data = await fetchServices();
        setServices(data);
    }


    return (
    <div>
        <h2>Admin Services</h2>

        <input
            type="text" placeholder="Service name" value={name}
            onChange={(e) => setName(e.target.value)}/>

        <input
            type="text" placeholder="Description" value={description}
            onChange={(e) => setDescription(e.target.value)}/>

        <input
            type="text" placeholder="Price" value={price}
            onChange={(e) => setPrice(e.target.value)}/>

        <input
            type="text" placeholder="Image URL" value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/>

        <button onClick={handleSubmit}>
                {editingId ? "Update Service" : "Add Service"}
        </button>


        <div className="admin-services-list">
            {services.map((service) => (
                <div key={service.id} className="admin-service-card">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p>{service.price}</p>

                    <button onClick={() => handleDeleteService(service.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </div>
);

}