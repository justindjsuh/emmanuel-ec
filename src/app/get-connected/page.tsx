"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MouseEvent, useState } from "react";
import Link from "next/link";

const Page: React.FunctionComponent = () => {
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
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <Link href="/">
                    <Image
                        src="/header_logo_black.png"
                        alt="Emmanuel Header Logo"
                        className={styles.headerLogo}
                        width={375}
                        height={70}
                        priority
                    />
                </Link>
                <div className={styles.formContainer}>
                    <p>Let&apos;s Get You Connected</p>
                    <p>
                        We&apos;ll have someone from the ministry team reach out
                        to help you get connected.
                    </p>
                    <hr />
                    <form
                        className={styles.welcomeFormContent}
                        autoComplete="off"
                    >
                        <div className={styles.inputCard}>
                            <Image
                                src="/user.svg"
                                alt="User Account Image"
                                width={24}
                                height={24}
                                objectFit="cover"
                            />
                            <input
                                name="fullName"
                                autoComplete="off"
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputCard}>
                            <Image
                                src="/mail.svg"
                                alt="Email Image"
                                width={24}
                                height={24}
                                objectFit="cover"
                            />
                            <input
                                name="email"
                                value={email}
                                placeholder="Email"
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputCard}>
                            <Image
                                src="/phone.svg"
                                alt="Phone Image"
                                width={24}
                                height={24}
                                objectFit="cover"
                            />
                            <input
                                name="phoneNum"
                                maxLength={10}
                                placeholder="Phone Number"
                                autoComplete="off"
                                type="tel"
                                value={phoneNumber}
                                onChange={formatPhoneNumber}
                            />
                        </div>
                        <button
                            onClick={(e) => onSubmit(e)}
                            disabled={enableButton()}
                            className={`${
                                enableButton() ? styles.disabled : null
                            }`}
                        >
                            Get Connected!
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.textHeader}>
                        Discovering Your Next Community
                    </p>
                    <div className={styles.footerVerse}>
                        <p>
                            &quot;Therefore go and make disciples of all
                            nations, baptizing them in the name of the Father
                            and of the Son and of the Holy Spirit,&quot; Matthew
                            28:19 (NIV)
                        </p>
                    </div>
                    <div className={styles.detailChips}>
                        <span>Service At 10:00AM</span>
                        <span>4723 Spruce Street, Philadelphia, PA 19139</span>
                    </div>
                </div>
                <Image
                    src="/church-bg.jpg"
                    alt="Church Image"
                    fill
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default Page;
