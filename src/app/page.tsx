'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { MouseEvent, useState } from 'react';

const Home = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'emmanuelchurchpca@gmail.com',
          fullName,
          subject: `Newcomer Form | ${fullName}`,
          text: `Someone has expressed interest in Emmanuel EC!\nName: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`
        })
      });

      if (res.ok) {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred while sending the email', error);
    }
  };

  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let numericValue = inputValue.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const enableButton = () => (fullName && email && phoneNumber.length === 10) ? false : true;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image
          src="/emmanuel-banner.png"
          alt="Emmanuel Banner"
          className={styles.emmanuelBanner}
          width={535}
          height={140}
          priority
        />
        <div className={styles.content}>
          <div className={styles.welcomeText}>
            <h1>Welcome to Emmanuel EC!</h1>
            <div className={styles.welcomeRowContainer}>
              <div className={styles.welcomeRow}>
                <Image
                  src="/checked.png"
                  alt="Checkmark"
                  className={styles.checkMark}
                  width={40}
                  height={40}
                />
                <div className={styles.welcomeContent}>
                  <h2>A place you can call home</h2>
                  <p>We are a multi-cultural, multi-generational church and if you&apos;re 
                    looking for a home church in your area, we&apos;re here for you.
                  </p>
                </div>
              </div>
              <div className={styles.welcomeRow}>
                <Image
                  src="/checked.png"
                  alt="Checkmark"
                  className={styles.checkMark}
                  width={40}
                  height={40}
                />
                <div className={styles.welcomeContent}>
                  <h2>Community for you</h2>
                  <p>There is a place for you here. You&apos;ll find Life Groups are an 
                    easy place to belong and find lifelong friends!
                  </p>
                </div>
              </div>
              <div className={styles.welcomeRow}>
                <Image
                  src="/checked.png"
                  alt="Checkmark"
                  className={styles.checkMark}
                  width={40}
                  height={40}
                />
                <div className={styles.welcomeContent}>
                  <h2>We love our kids</h2>
                  <p>Your kids will love our church! We want to create a place where the entire
                  family can belong and love following Jesus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.welcomeForm}>
            <h2>Want to get connected?</h2>
            <p>Please take a moment to fill out this form and one of the 
              ministry leaders will reach out and assist you!</p>
            <form className={styles.welcomeFormContent} autoComplete="off">
              <label htmlFor="fullName">Full Name</label>
              <input 
                name="fullName"
                autoComplete="off"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
              <label htmlFor="email">E-Mail</label>
              <input 
                name="email"
                value={email}
                autoComplete="off"
                type="text"
                onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="phoneNum">Mobile Phone</label>
              <input
                name="phoneNum" 
                maxLength={10}
                autoComplete="off"
                type="tel"
                value={phoneNumber}
                onChange={formatPhoneNumber} />
              <button onClick={(e) => onSubmit(e)} disabled={enableButton()}>Get Connected!</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
