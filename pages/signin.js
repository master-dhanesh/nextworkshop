import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Signin = () => {
    const router = useRouter();
    const SigninHandler = async () => {
        const userData = {
            email: "example@gmail.com",
            password: "123456",
        };
        const result = await signIn("credentials", {
            redirect: false,
            ...userData,
        });

        if (result.error) {
            console.error("Signin failed:", result.error);
        } else {
            console.log("Signin successful:", result);
            router.replace("/profile");
        }
    };

    return (
        <div>
            <h1>Signin</h1>
            <button onClick={SigninHandler}>Signin</button>
        </div>
    );
};

export default Signin;
