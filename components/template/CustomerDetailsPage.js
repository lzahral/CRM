import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { useMutation } from "react-query";


function CustomerDetailsPage({ data }) {
    const router = useRouter();

    const deleteCustomer = async () => {
        const res = await axios.delete(`/api/delete/${data._id}`);
        return res.data;
    };
    const { mutate } = useMutation(deleteCustomer, {
        onSuccess: () => {
            alert("successfully deleted");
            router.reload();
        },
        onError: () => {
            alert("encountered an error");
        },
    });
    return (
        <div className='customer-detail'>
            <h4>Customer&#39;s Details</h4>
            <div className='customer-detail__main'>
                <div className='customer-detail__item'>
                    <span>Name: </span>
                    <p>{data.name}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Phone: </span>
                    <p>{data.phone}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Postal Code: </span>
                    <p>{data.postalCode}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Discount Code: </span>
                    <p>{data.discountCode}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Date: </span>
                    <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Address: </span>
                    <p>{data.address}</p>
                </div>
            </div>
            <div className='customer-detail__products'>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                {data.products.map((product, index) => (
                    <React.Fragment key={index}>
                        <p>{product.name}</p>
                        <span>{product.price}</span>
                        <span>{product.qty}</span>
                    </React.Fragment>
                ))}
                <p>
                    Purchase Price: <span>{data.purchasePrice}</span>
                </p>
                <p>
                    Purchase Times: <span>{data.purchaseTimes}</span>
                </p>
            </div>
            <div className='customer-detail__buttons'>
                <p>Edit or Delete?</p>
                <button onClick={mutate}>Delete</button>
                <Link href={`/edit/${data._id}`}>Edit</Link>
            </div>
        </div>
    );
}

export default CustomerDetailsPage;
