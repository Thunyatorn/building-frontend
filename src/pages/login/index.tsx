import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from 'formik';
// import { LoginTop } from "../../components/LoginTop"

interface Values {
    username: string;
    password: string;
}

export default function About() {
    return (
        // <LoginTop />
        <div className="w-full h-screen hidden sm:flex sm:flex-col justify-center bg-gradient-to-b from-[#fbe2ec] to-[#fdeff4]">
            {/* <div className="z-40 text-xl">
                Login
            </div> */}
            <div className="z-30">
                <Image
                    priority
                    src="login-component/ticket.svg"
                    fill
                    alt="bruh"
                />
            </div>
            <div className="z-10">
                <Image
                    priority
                    src="login-component/cloud.svg"
                    fill
                    alt="bruh"
                />
            </div>
            <div className="z-20">
                <Image
                    priority
                    src="login-component/rrrr.svg"
                    fill
                    alt="bruh"
                />
            </div>
            {/* <div className="z-40">
                <div className="absolute right-20 top-0 h-32 w-32">
                    <Image
                        priority
                        src="login-component/carousel.svg"
                        height={160}
                        width={160}
                        alt="bruh"
                        className="absolute right-80 top-40"
                        // how to fix wa???
                    />
                </div>
            </div> */}
            {/* <div className="z-40">
                <Image
                    priority
                    src="login-component/grass.svg"
                    fill
                    alt="bruh"
                />
            </div> */}
            <div className="absolute top-40 z-40 left-[37%]">
                <h1 className="text-4xl font-bold mb-10">Login</h1>
                {/* change font soon??? */}
            </div>
            <div className="z-40 absolute left-[30%]">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <div className="mb-5">
                            <Field className="form-control rounded-full w-80 h-10" id="username" name="username" placeholder=" Username??" aria-describedby="usernameHelp" />
                        </div>
                        <div className="mb-5">
                            <Field className="form-control rounded-full w-80 h-10" id="password" name="password" placeholder=" Password????" type="password" />
                        </div>
                    </Form>
                </Formik>
            </div>
            <button type="submit" className="btn btn-primary z-40 absolute left-[38%] top-[60%] bg-black w-20 h-10 rounded-xl">Login</button>
        </div>
    );
};
