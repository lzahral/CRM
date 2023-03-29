import axios from "axios";
import Form from "../module/Form";
import Alerts from "../module/Alerts";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Button, Typography, Stack } from "@mui/material";

function AddCustomerPage() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
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
            setSuccess(true);
            router.push("/");
        },
        onError: () => {
            setError(true);
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
        <div>
            <Typography
                sx={{ pl: 3, py: 4, mt: 4 }}
                variant='h5'
                color='primary'
            >
                Add New Customer{" "}
            </Typography>
            <Form form={form} setForm={setForm} />
            <Stack
                sx={{ py: 2 }}
                justifyContent='space-between'
                spacing={1}
                direction='row'
            >
                <Button variant='contained' onClick={cancelHandler}>
                    Cancel
                </Button>
                <Button variant='contained' onClick={mutate}>
                    Save
                </Button>
            </Stack>
            <Alerts
                open={success}
                setOpen={setSuccess}
                type={"success"}
                text={"Successfully registered!"}
            />
            <Alerts
                open={error}
                setOpen={setError}
                type={"error"}
                text={"encountered an error!"}
            />
        </div>
    );
}

export default AddCustomerPage;
