"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const successMessage =
    "We received your message! We look forward to seeing you soon!";
const failedMessage =
    "Something went wrong. Try again or email us directly at emmanuelchurchpca@gmail.com";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Page: React.FunctionComponent = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [submissionSucceeded, setSubmissionSucceeded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [emailValid, setEmailValid] = useState(true);
    const [fullNameValid, setFullNameValid] = useState(true);
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);

    const validateEmail = (email: string) => {
        const validEmail = emailRegex.test(email);
        if (validEmail) setEmailValid(true);
        else setEmailValid(false);
    };

    const validateFullName = (fullName: string) => {
        setFullNameValid(!!fullName);
    };

    const validatePhoneNumber = (phoneNumber: string) => {
        if (phoneNumber.length !== 10) setPhoneNumberValid(false);
        else setPhoneNumberValid(true);
    };

    const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (
            fullName &&
            fullNameValid &&
            email &&
            emailValid &&
            phoneNumber &&
            fullNameValid
        ) {
            try {
                setLoading(true);
                setSubmissionSucceeded(false);
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
                    setSubmissionSucceeded(true);
                    setSubmitted(true);
                    setLoading(false);
                } else {
                    setSubmissionSucceeded(false);
                    setSubmitted(true);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setSubmitted(true);
                setSubmissionSucceeded(false);
                console.error(
                    "An error occurred while sending the email",
                    error
                );
            }
        } else {
            setSubmitted(false);
            setFullNameValid(false);
            setEmailValid(false);
            setPhoneNumberValid(false);
        }
    };

    const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        let numericValue = inputValue.replace(/[^0-9]/g, "");
        setPhoneNumber(numericValue);
    };

    return (
        <div className={styles.container}>
            <Head>
                <link
                    rel="preload"
                    href="/church-bg.jpg"
                    as="image"
                    type="image/jpeg"
                />
            </Head>
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
                                style={{ objectFit: "cover" }}
                            />
                            <input
                                name="fullName"
                                autoComplete="off"
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                    validateFullName(e.target.value);
                                }}
                            />
                            {!fullNameValid && (
                                <p className={styles.errText}>
                                    This field is required
                                </p>
                            )}
                        </div>
                        <div className={styles.inputCard}>
                            <Image
                                src="/mail.svg"
                                alt="Email Image"
                                width={24}
                                height={24}
                                style={{ objectFit: "cover" }}
                            />
                            <input
                                name="email"
                                value={email}
                                className={!emailValid ? styles.inputErr : ""}
                                placeholder="Email"
                                autoComplete="off"
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(e.target.value);
                                }}
                            />
                            {!emailValid && (
                                <p className={styles.errText}>
                                    Please enter a valid email
                                </p>
                            )}
                        </div>
                        <div className={styles.inputCard}>
                            <Image
                                src="/phone.svg"
                                alt="Phone Image"
                                width={24}
                                height={24}
                                style={{ objectFit: "cover" }}
                            />
                            <input
                                name="phoneNum"
                                maxLength={10}
                                placeholder="Phone Number"
                                autoComplete="off"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => {
                                    formatPhoneNumber(e);
                                    validatePhoneNumber(e.target.value);
                                }}
                            />
                            {!phoneNumberValid && (
                                <p className={styles.errText}>
                                    Please enter a valid phone number
                                </p>
                            )}
                        </div>
                        <button onClick={(e) => onSubmit(e)}>
                            {loading ? "Sending..." : "Get Connected!"}
                        </button>
                    </form>
                    {submitted && (
                        <p
                            className={
                                submissionSucceeded
                                    ? styles.notificationTextSuccess
                                    : styles.notificationTextFailure
                            }
                        >
                            {submissionSucceeded
                                ? successMessage
                                : failedMessage}
                        </p>
                    )}
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
                    style={{ objectFit: "cover" }}
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL="/church-bg-lowres.jpg"
                    priority
                />
            </div>
        </div>
    );
};

export default Page;
