import Head from "next/head";
// import Image from "next/image";
// import { Formik, Field, Form, FormikHelpers } from 'formik';
import { LoginTop } from "../../components/LoginTop"

export default function About() {
    return (
        <>
            <Head>
                <title>Building 9 - Login</title>
                <meta name="description" content="btuhdasd" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <LoginTop />
            </main>
        </>
    );
};
