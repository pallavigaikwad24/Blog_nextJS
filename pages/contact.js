import ContactPage from "@/components/contact/contact";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content='Send me your messages!' />
            </Head>
            <ContactPage />
        </>
    )
}