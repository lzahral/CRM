import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useMutation } from "react-query";

function Card({ customer }) {
    const router = useRouter();
    const deleteCustomer = async () => {
        const res = await axios.delete(`/api/delete/${customer._id}`);
        return res.data;
    };
    const { mutate } = useMutation(deleteCustomer, {
        onSuccess: () => {
            alert("successfully deleted");
            router.reload();
        },
        onError: () => {
            alert("encountered an error");
        },
    });
    return (
        <div className='card'>
            <div className='card__details'>
                <p>{customer.name}</p>
            </div>
            <div className='card__buttons'>
                <button onClick={mutate}>Delete</button>
                <Link href={`/edit/${customer._id}`}>Edit</Link>
                <Link href={`/customer/${customer._id}`}>Details</Link>
            </div>
        </div>
    );
}

export default Card;
