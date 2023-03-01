import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../module/Form";
import axios from "axios";
import { useMutation } from "react-query";

function AddCustomerPage() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        postalCode: "",
        discountCode: "",
        purchasePrice: 0,
        purchaseTimes: 0,
        date: "",
        products: [],
    });

    const router = useRouter();

    const sendCustomer = async () => {
        const res = await axios.post("/api/customer", form);
        return res.data;
    };
    const { mutate } = useMutation(sendCustomer, {
        onSuccess: () => {
            alert("successfully registered");
            router.push("/");
        },
        onError: () => {
            alert("registration encountered an error");
        },
    });

    const cancelHandler = () => {
        setForm({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            postalCode: "",
            discountCode: "",
            purchasePrice: "",
            purchaseTimes: "",
            date: "",
            products: [],
        });
        router.push("/");
    };

    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>
                    Cancel
                </button>
                <button className='second' onClick={mutate}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddCustomerPage;
