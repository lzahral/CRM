import BoxStyle from "./BoxStyle";
import FormInput from "./FormInput";
import { Button, Grid, Box } from "@mui/material";

function ItemList({ form, setForm }) {
    const { products } = form;

    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: "", price: "", qty: "" }],
        });
    };

    const changeHandler = (e, index) => {
        const { name, value } = e.target;
        const newProducts = [...products];
        newProducts[index][name] = value;
        setForm({ ...form, products: newProducts });
    };

    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setForm({ ...form, products: newProducts });
    };

    return (
        <Box
            sx={{
                border: " 1px solid ",
                borderColor: "grey.A400",
                borderRadius: 1,
                p: 2,
                ml: 4,
                mt: 4,
                width: "100%",
            }}
        >
            <p>Purchased products</p>
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    changeHandler={(e) => changeHandler(e, index)}
                    deleteHandler={() => deleteHandler(index)}
                />
            ))}
            <Button
                variant='contained'
                sx={{ width: "100%" }}
                onClick={addHandler}
            >
                Add Item
            </Button>
        </Box>
    );
}

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
    return (
        <BoxStyle>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormInput
                        name='name'
                        label='Product Name'
                        type='text'
                        value={product.name}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <FormInput
                        name='price'
                        label='Price'
                        type='text'
                        value={product.price}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <FormInput
                        name='qty'
                        label='Quantity'
                        type='text'
                        value={product.qty}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        sx={{ width: "100%" }}
                        onClick={deleteHandler}
                    >
                        Remove
                    </Button>
                </Grid>
            </Grid>
        </BoxStyle>
    );
}
