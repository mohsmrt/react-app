import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
                label="Fullname"
                type="text"
                name="fullname"
                placeholder="Insert your fullname"
            />
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
            <InputForm
                label="Confirm password"
                type="password"
                name="confirmPassword"
                placeholder="*****"
            />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
}

export default FormRegister;