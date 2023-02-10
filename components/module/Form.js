import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    return (
        <div>
            <FormInput
                name='name'
                label='Name'
                type='text'
                value={form.name}
                onChange={changeHandler}
            />
            <FormInput
                name='phone'
                label='Phone'
                type='tel'
                value={form.phone}
                onChange={changeHandler}
            />
            <FormInput
                name='postalCode'
                label='Postal Code'
                type='text'
                value={form.postalCode}
                onChange={changeHandler}
            />
            <FormInput
                name='address'
                label='Address'
                type='text'
                value={form.address}
                onChange={changeHandler}
            />
            <FormInput
                name='discountCode'
                label='Discount Code'
                type='text'
                value={form.discountCode}
                onChange={changeHandler}
            />
            <FormInput
                name='date'
                label='Date'
                type='date'
                value={form.date}
                onChange={changeHandler}
            />
            <ItemList form={form} setForm={setForm} />
        </div>
    );
}

export default Form;
