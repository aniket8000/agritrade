import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAllCrops } from "../utils/buyerSlice";

const useAllCrops = () => {
    const dispatch = useDispatch();
    const AllCrops = useSelector(store => store.buyer.allCrops);

    const getAllCrops = async () => {
        const data = await fetch('http://localhost:8080/post/allPosts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await data.json();
        dispatch(addAllCrops(json));
    };

    useEffect(() => {
        if (!AllCrops || AllCrops.length === 0) {
            getAllCrops();
        }
    }, [AllCrops, getAllCrops]); // Correct dependencies here

    return AllCrops; // Ensure to return the data
}

export default useAllCrops;
