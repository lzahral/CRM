import moment from "moment";
import ItemList from "./ItemList";
import FormInput from "./FormInput";
import { Grid, Box } from "@mui/material";

function Form({ form, setForm }) {
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const dateHandler = (newValue) => {
        setForm({ ...form, date: moment(newValue._d).format("YYYY-MM-DD") });
    };
    return (
        <Box
            component='form'
            sx={{ flexGrow: 1, "& .MuiTextField-root": { width: "100%" } }}
            noValidate
            autoComplete='off'
        >
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <FormInput
                        name='name'
                        label='Name'
                        type='text'
                        value={form.name}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormInput
                        name='phone'
                        label='Phone'
                        type='tel'
                        value={form.phone}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormInput
                        name='postalCode'
                        label='Postal Code'
                        type='text'
                        value={form.postalCode}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormInput
                        name='discountCode'
                        label='Discount Code'
                        type='text'
                        value={form.discountCode}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormInput
                        setForm={setForm}
                        form={form}
                        name='date'
                        label='Date'
                        type='date'
                        value={form.date}
                        onChange={dateHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormInput
                        name='address'
                        label='Address'
                        type='text'
                        value={form.address}
                        onChange={changeHandler}
                    />
                </Grid>
                <ItemList form={form} setForm={setForm} />
            </Grid>
        </Box>
    );
}

export default Form;
