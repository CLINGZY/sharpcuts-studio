import { collection, getDocs } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { addDoc } from "firebase/firestore"
import db from "./config";

export const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));

    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
}


export const createService = async (serviceData) => {
    const docRef = await addDoc(collection(db, "services"), serviceData);

    return {
        id: docRef.id,
        ...serviceData
    };
};


export const deleteService = async (id) => {
    await deleteDoc(doc(db, "services", id));
};


export const updateService = async (id, updatedData) => {
    const serviceRef = doc(db, "services", id);
    await updateDoc(serviceRef, updatedData);
};