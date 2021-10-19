import { useEffect, useState } from "react";



export const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        return fetch('/clientReview.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);



    return [
        reviews
    ]

};

export default useReviews;