import axios from "axios";
import moment from "moment";
import Head from "next/head";
import Form from "../module/Form";
import Alerts from "../module/Alerts";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Stack, Button, Typography } from "@mui/material";

function CustomerEditPage({ data, id }) {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
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
            setSuccess(true);
            router.push("/");
        },
        onError: () => {
            setError(true);
        },
    });

    const cancelHandler = () => {
        router.push("/");
    };
    return (
        <div>
            <Head>
                <title>Edit customer</title>
            </Head>
            <Typography
                variant='h5'
                component='div'
                sx={{ flexGrow: 1, m: 3, ml: 0 }}
            >
                Edit Customer
            </Typography>

            <Form form={form} setForm={setForm} />
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ mt: 2 ,mb:4}}
            >
                <Button variant='contained' onClick={cancelHandler}>
                    Cancel
                </Button>
                <Button variant='outlined' onClick={mutate}>
                    Edit
                </Button>
            </Stack>
            <Alerts
                open={success}
                setOpen={setSuccess}
                type={"success"}
                text={"Successfully edited!"}
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

export default CustomerEditPage;
