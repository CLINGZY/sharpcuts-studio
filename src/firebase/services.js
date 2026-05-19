import { collection, getDocs } from "firebase/firestore";
import db from "./config.js";

export const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));

    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
};