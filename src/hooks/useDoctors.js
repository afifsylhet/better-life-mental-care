import { useEffect, useState } from "react";



export const useDoctors = () => {
    const [doctors, setDocters] = useState([]);


    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDocters(data))
    }, [])



    return [
        doctors
    ]

};

export default useDoctors;