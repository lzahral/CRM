import axios from "axios";
import BoxStyle from "./BoxStyle";
import Alerts from "../module/Alerts";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Grid, Button, Stack } from "@mui/material";

function Card({ customer }) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const deleteCustomer = async () => {
        const res = await axios.delete(`/api/delete/${customer._id}`);
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
        <BoxStyle>
            <Grid alignItems='center' container>
                <Grid xs item>
                    <p>{customer.name}</p>
                </Grid>
                <Grid>
                    {/* <Checkbox
                        inputProps={{ "aria-label": "Checkbox demo" }}
                        icon={<StarBorderIcon />}
                        checkedIcon={<StarIcon />}
                    /> */}
                    <Stack spacing={1} direction='row'>
                        <Button variant='contained' onClick={mutate}>
                            Delete
                        </Button>
                        <Button
                            variant='outlined'
                            href={`/edit/${customer._id}`}
                        >
                            Edit
                        </Button>
                        <Button
                            variant='outlined'
                            href={`/customer/${customer._id}`}
                        >
                            Details
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
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
        </BoxStyle>
    );
}

export default Card;
