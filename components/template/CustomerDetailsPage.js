import axios from "axios";
import moment from "moment";
import Head from "next/head";
import Alerts from "../module/Alerts";
import BoxStyle from "../module/BoxStyle";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Typography, Grid, Button } from "@mui/material";

function CustomerDetailsPage({ data }) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();

    const deleteCustomer = async () => {
        const res = await axios.delete(`/api/delete/${data._id}`);
        return res.data;
    };
    const { mutate } = useMutation(deleteCustomer, {
        onSuccess: () => {
            setSuccess(true);
            router.reload();
        },
        onError: () => {
            setError(true);
        },
    });
    return (
        <div className='customer-detail'>
            <Head>
                <title>Customer&#39;s Details</title>
            </Head>
            <Typography
                sx={{ pl: 4, py: 4, mt: 4 }}
                variant='h5'
                color='primary'
            >
                Customer&#39;s Details
            </Typography>
            <BoxStyle>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <span>Name: </span>
                        <p>{data.name}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <span>Phone: </span>
                        <p>{data.phone}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <span>Postal Code: </span>
                        <p>{data.postalCode}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <span>Discount Code: </span>
                        <p>{data.discountCode}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <span>Date: </span>
                        <p>{moment(data.date).utc().format("YYYY/MM/DD")}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <span>Address: </span>
                        <p>{data.address}</p>
                    </Grid>
                </Grid>
            </BoxStyle>
            <BoxStyle>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <p>Name</p>
                    </Grid>
                    <Grid item xs>
                        <p>Price</p>
                    </Grid>
                    <Grid item xs>
                        <p>Quantity</p>
                    </Grid>
                </Grid>
                {data.products.map((product, index) => (
                    <Grid container spacing={3} key={index}>
                        <Grid item xs>
                            <p>{product.name}</p>
                        </Grid>
                        <Grid item xs>
                            <span>{product.price}</span>
                        </Grid>
                        <Grid item xs>
                            <span>{product.qty}</span>
                        </Grid>
                    </Grid>
                ))}
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <p>
                            Purchase Price: <span>{data.purchasePrice}</span>
                        </p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>
                            Purchase Times: <span>{data.purchaseTimes}</span>
                        </p>
                    </Grid>
                </Grid>
            </BoxStyle>

            <BoxStyle>
                <Grid alignItems='center' container spacing={3}>
                    <Grid item xs>
                        <p>Edit or Delete?</p>
                    </Grid>
                    <Grid item xs>
                        <Button variant='contained' onClick={mutate}>
                            Delete
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant='outlined' href={`/edit/${data._id}`}>
                            Edit
                        </Button>
                    </Grid>
                </Grid>
            </BoxStyle>
            <Alerts
                open={success}
                setOpen={setSuccess}
                type={"success"}
                text={"Successfully deleted!"}
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

export default CustomerDetailsPage;
