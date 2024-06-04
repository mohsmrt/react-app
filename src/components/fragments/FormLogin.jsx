import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { useRef, useEffect } from "react";

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = '/product';
    }

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="example@email.com"
                ref={emailRef}
            />
            <InputForm
                label="Password"
                type="password"
                name="password"
                placeholder="*****"
            />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    );
}

export default FormLogin;