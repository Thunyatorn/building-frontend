import Head from "next/head";
// import Image from "next/image";
// import { Formik, Field, Form, FormikHelpers } from 'formik';
import { RegisterTop } from "../../components/RegisterTop";

export default function About() {
  return (
    <>
      <Head>
        <title>Building 9 | Register</title>
        <meta name="description" content="btuhdasd" />
        <link rel="icon" href="/logo-new.png" />
      </Head>
      {/* <main> */}
      <div className="flex w-full flex-col items-center py-6">
        <RegisterTop />
      </div>
      {/* </main> */}
    </>
  );
}
