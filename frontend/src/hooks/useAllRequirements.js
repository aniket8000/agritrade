import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllRequirements } from '../utils/farmerSlice';

const useAllRequirements = () => {
    const dispatch = useDispatch();

    const AllRequirements = useSelector(store => store.buyer.allRequirements);

    const getAllRequirements = async () => {
        const data = await fetch('http://localhost:8080/post/allRequirements', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await data.json();
        dispatch(addAllRequirements(json));
    };

    useEffect(() => {
        if (!AllRequirements || AllRequirements.length === 0) {
            getAllRequirements();
        }
    }, [AllRequirements, getAllRequirements]); // Update dependencies here

    return AllRequirements; // Ensure to return the data
}

export default useAllRequirements;
