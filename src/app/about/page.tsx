"use client";

import HeaderComp from "../base/components/headerComp/headerComp";
import styles from "./page.module.css";

const About: React.FunctionComponent = () => {
    return (
        <div className={styles.aboutContainer}>
            <HeaderComp useBlackText={true} />
            <h1>TEST</h1>
        </div>
    );
};

export default About;
