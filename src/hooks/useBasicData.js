import { useEffect, useState } from "react";



const useBasicData = () => {
    const [service, setServices] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [
        service
    ]

};

export default useBasicData;