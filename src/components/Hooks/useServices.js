import { useEffect, useState } from "react"

// this is useServices hook
const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return { services, setServices };
}

export default useServices;