import { useState, useEffect, useContext } from "react";
import { AppContext } from "./Navbar";

export const useShop = () => {
    const [risultato, setRisultato] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { categoria } = useContext(AppContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${categoria}`, {mode: "cors"})
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error ('Server error');
                }
                return response.json();
            })                
            .then((response) => setRisultato(response))
            .catch ((error) => setError(error))
            .finally(() => setLoading(false));
        },[]);
        return {risultato, error, loading};
};