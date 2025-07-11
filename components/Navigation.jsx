import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
    const { data: session, status: loading } = useSession();

    const SignoutHandler = async () => {
        await signOut();
    };
    return (
        <nav className="flex gap-5 mt-10">
            <Link href="/">Home</Link>
            {session ? (
                <>
                    <Link href="/profile">Profile</Link>
                    <button onClick={SignoutHandler}>Signout</button>
                </>
            ) : (
                <>
                    <Link href="/signin">SignIn</Link>
                    <Link href="/signup">SignUp</Link>
                </>
            )}
        </nav>
    );
};

export default Navigation;
