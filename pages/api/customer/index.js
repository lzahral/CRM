import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "failed",
            message: "Error in connecting to DB",
        });
        return;
    }

    if (req.method === "POST") {
        const data = req.body.data;
        data.purchasePrice = data.products.reduce((total, product) => {
            return total + +product.price * +product.qty;
        }, 0);
        if (data.products.length > 0) data.purchaseTimes = 1;

        if (!data.name)
            return res
                .status(400)
                .json({ status: "failed", message: "Invalid data" });
        try {
            const customer = await Customer.create(data);
            res.status(201).json({
                status: "success",
                message: "Data created",
                data: customer,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "failed",
                message: "Error in storing data in DB",
            });
        }
    }
}
