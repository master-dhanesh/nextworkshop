import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Feedback = ({ feedback }) => {
    const [result, setResult] = useState(feedback || []);
    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/api/feedback",
        fetcher
    );
    useEffect(() => {
        if (data) {
            console.log("Use SWR data:", data);
            setResult(data.feedback);
        }
    }, [data]);

    if (error) return <div>Error loading feedback</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="py-10 px-[10%] font-thin">
            <h1>Feedback</h1>
            <ul>
                {result.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/feedback");
    const data = await response.json();

    return {
        props: {
            feedback: data.feedback,
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

export default Feedback;
