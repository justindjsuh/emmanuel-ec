"use client";
import styles from "./page.module.css";
import { useRef } from "react";
import LandingPage from "./base/views/landingPage/LandingPage";
import DetailsSection from "./base/views/detailsSection/DetailsSection";
import VisionMissionSection from "./base/views/visionMissionSection/VisionMissionSection";
import FinalSection from "./base/views/finalSection/FinalSection";
import WhoWeAreSection from "./base/views/whoWeAreSection/WhoWeAreSection";
import Head from "next/head";

const Home = () => {
    const landingRef = useRef<HTMLElement | null>(null);
    const detailsRef = useRef<HTMLElement | null>(null);
    const visionAndMissionRef = useRef<HTMLElement | null>(null);

    return (
        <main className={styles.main}>
            <Head>
                <title>Emmanuel English Congregation</title>
            </Head>
            <section ref={landingRef}>
                <LandingPage
                    detailsRef={detailsRef}
                    visionAndMissionRef={visionAndMissionRef}
                />
            </section>
            <section ref={detailsRef}>
                <DetailsSection />
            </section>
            <section ref={visionAndMissionRef}>
                <VisionMissionSection />
            </section>
            {/* Commented out till we get the video and description from PDaniel */}
            {/* <section>
                <WhoWeAreSection />
            </section> */}
            <section>
                <FinalSection
                    landingRef={landingRef}
                    detailsRef={detailsRef}
                    visionAndMissionRef={visionAndMissionRef}
                />
            </section>
        </main>
    );
};

export default Home;
