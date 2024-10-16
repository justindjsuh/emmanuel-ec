"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { MouseEvent, useState } from "react";
import LandingPage from "./base/views/landingPage/LandingPage";
import HeaderComp from "./base/components/headerComp/headerComp";
import DetailsSection from "./base/views/detailsSection/DetailsSection";
import VisionMissionSection from "./base/views/visionMissionSection/VisionMissionSection";

const Home = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/send-email/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "emmanuelchurchpca@gmail.com",
                    fullName,
                    subject: `Newcomer Form | ${fullName}`,
                    text: `Someone has expressed interest in Emmanuel EC!\nName: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`,
                }),
            });

            if (res.ok) {
                setFullName("");
                setEmail("");
                setPhoneNumber("");
                alert("Email sent successfully");
            } else {
                alert("Failed to send email");
            }
        } catch (error) {
            console.error("An error occurred while sending the email", error);
        }
    };

    const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        let numericValue = inputValue.replace(/[^0-9]/g, "");
        setPhoneNumber(numericValue);
    };

    const enableButton = () =>
        fullName && email && phoneNumber.length === 10 ? false : true;

    return (
        <main className={styles.main}>
            <LandingPage />
            <DetailsSection />
            <VisionMissionSection />
        </main>
    );
};

export default Home;
