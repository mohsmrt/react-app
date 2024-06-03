import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = '/product';
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="example@email.com"
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