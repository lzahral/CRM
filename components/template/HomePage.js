import Card from "../module/Card";

function HomePage({ customers }) {
    return (
        <>
            {customers.map((customer) => (
                <Card key={customer._id} customer={customer} />
            ))}
        </>
    );
}

export default HomePage;
