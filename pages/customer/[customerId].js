import CustomerDetailsPage from "../../components/template/CustomerDetailsPage";
import connectDB from "../../utils/connectDB";
import Customer from "../../models/Customer";

function Index({ customer }) {
    return <CustomerDetailsPage data={customer} />;
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