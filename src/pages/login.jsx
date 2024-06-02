import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    );
}

export default LoginPage;