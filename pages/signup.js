const Signup = () => {
    const SignupHandler = async () => {
        const newUser = {
            email: "johndoe@gmail.com",
            password: "123456",
        };
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json",
            },
        });
        const result = await response.json();
        if (response.ok) {
            console.log("success");
        } else {
            console.log(result);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <button onClick={SignupHandler}>Signup User</button>
        </div>
    );
};

export default Signup;
