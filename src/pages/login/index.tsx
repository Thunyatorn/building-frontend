import Head from "next/head";
// import Image from "next/image";
// import { Formik, Field, Form, FormikHelpers } from 'formik';
import { LoginTop } from "../../components/LoginTop";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

export default function About() {
  return (
    <>
      <Head>
        <title>Building 9 | Login</title>
        <meta name="description" content="btuhdasd" />
        <link rel="icon" href="/logo-new.png" />
      </Head>
      <main>
        {/* <Router> */}
        <LoginTop />
        {/* </Router> */}
      </main>
    </>
  );
}
