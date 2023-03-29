import connectDB from "../../utils/connectDB";
import Customer from "../../models/Customer";
import CustomerEditPage from "../../components/template/CustomerEditPage";

function Index({ customer }) {
    return <CustomerEditPage data={customer} id={customer._id} />;
}
export default Index;

export async function getServerSideProps(ctx) {
    const id = ctx.params.customerId;
    try {
        await connectDB();
        const customer = await Customer.findOne({ _id: id });
        return {
            props: {
                customer: JSON.parse(JSON.stringify(customer)),
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
