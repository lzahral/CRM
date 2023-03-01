import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../module/Form";
import axios from "axios";
import { useMutation } from "react-query";

function CustomerEditPage({ data, id }) {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
    const [form, setForm] = useState({
        name: data.name,
        phone: data.phone || "",
        address: data.address || "",
        postalCode: data.postalCode || "",
        discountCode: data.discountCode || "",
        products: data.products || "",
        purchasePrice: data.purchasePrice,
        purchaseTimes: data.purchaseTimes,
        date: date,
    });

    const router = useRouter();

    const editCustomer = async () => {
        const res = await axios.patch(`/api/edit/${id}`, form);
        return res.data;
    };
    const { mutate } = useMutation(editCustomer, {
        onSuccess: () => {
            alert("successfully edited");
            router.push("/");
        },
        onError: () => {
            alert("encountered an error");
        },
    });

    const cancelHandler = () => {
        router.push("/");
    };
    return (
        <div className='customer-page'>
            <h4>Edit Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>
                    Cancel
                </button>
                <button className='second' onClick={mutate}>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default CustomerEditPage;
