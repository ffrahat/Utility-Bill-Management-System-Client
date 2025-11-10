import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import FullScreenLoader from '../../Loader/FullScreenLoader';
import MyContainar from '../../Layouts/MyContainar';

const BillDetails = () => {
    const {id} = useParams();
    const { loading, setLoading } = useAuth();
    const [billDetailsData, setBillDetailsData] = useState([]);
    console.log(id)
    const axiosInstance = useAxios();


    useEffect(() => {
        //setLoading(true)
        axiosInstance(`/bill-details/${id}`)
            .then(data => {
                setBillDetailsData(data.data);
                //setLoading(false)
            })
        
        console.log(axiosInstance)
    }, [setLoading, axiosInstance, id]);

    if(loading) return <FullScreenLoader />
    

    return (
        <MyContainar>
            <h1>{billDetailsData.title}</h1>
        </MyContainar>
    );
};

export default BillDetails;