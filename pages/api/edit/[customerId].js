import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            status: "failed",
            message: "Error in connecting to database",
        });
        return;
    }

    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body;

        try {
            const customer = await Customer.findOne({ _id: id });
            if (customer.products.length !== data.products.length)
                customer.purchaseTimes = data.purchaseTimes + 1;
            customer.purchasePrice = data.products.reduce((total, product) => {
                return total + +product.price * +product.qty;
            }, 0);
            customer.name = data.name;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.discountCode = data.discountCode;
            customer.date = data.date;
            customer.products = data.products;
            customer.updatedAt = Date.now();
            customer.save();
            res.status(200).json({ status: "success", data: customer });
        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                status: "failed",
                message: "Error in retrieving data from database",
            });
        }
    }
}
