import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);

// export async function getServerSideProps() {
//     const { data } = await axios.get("https://fakestoreapi.in/api/users");
//     console.log("called!!");
//     return {
//         props: { data: data.users },
//     };
// }

const Users = (props) => {
    const { data, error, isLoading } = useSWR(
        "https://fakestoreapi.in/api/users",
        fetcher
    );
    console.log(data);

    if (error) {
        return (
            <h1 className="text-center pt-10 text-red-400">{error.message}</h1>
        );
    }

    if (isLoading) {
        return <h1 className="text-center pt-10 text-blue-400">Loading...</h1>;
    }

    const CreateUserHandler = async () => {
        const res = await axios.post("https://fakestoreapi.in/api/users", {
            email: "Thala@seven.com",
            username: "MSDhoni",
            password: "@2011WC",
            name: {
                firstname: "Mahendra Singh",
                lastname: "Dhoni",
            },
            address: {
                city: "Rachi",
                street: "Local Boy",
                number: "7777777",
                zipcode: "7777",
                geolocation: {
                    lat: 77.77777,
                    long: 77.77777,
                },
            },
            phone: "777777777",
        });
        console.log(res);
    };
    return (
        <div className="py-10 px-[10%]">
            <button onClick={CreateUserHandler}>Create User</button>
            <hr />
            {data.users.map((user) => (
                <p
                    className="text-xl p-2 rounded bg-zinc-200 mb-3"
                    key={user.id}
                >
                    {user.username}
                </p>
            ))}
        </div>
    );
};

export default Users;
