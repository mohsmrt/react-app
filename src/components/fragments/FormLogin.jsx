import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormLogin = () => {
    return (
        <form action="">
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
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    );
}

export default FormLogin;