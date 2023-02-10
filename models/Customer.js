import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    //lastName
    phone: String,
    address: String,
    postalCode: Number,
    discountCode: String,
    purchasePrice: Number,
    purchaseTimes: Number,
    date: Date,
    products: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: { type: Date, default: () => Date.now() },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
