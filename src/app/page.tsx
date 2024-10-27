"use client";
import styles from "./page.module.css";
import { useRef } from "react";
import LandingPage from "./base/views/landingPage/LandingPage";
import DetailsSection from "./base/views/detailsSection/DetailsSection";
import VisionMissionSection from "./base/views/visionMissionSection/VisionMissionSection";
import FinalSection from "./base/views/finalSection/FinalSection";
import WhoWeAreSection from "./base/views/whoWeAreSection/WhoWeAreSection";

const Home = () => {
    const landingRef = useRef<HTMLElement | null>(null);
    const detailsRef = useRef<HTMLElement | null>(null);
    const visionAndMissionRef = useRef<HTMLElement | null>(null);

    return (
        <main className={styles.main}>
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
            <section>
                <WhoWeAreSection />
            </section>
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
