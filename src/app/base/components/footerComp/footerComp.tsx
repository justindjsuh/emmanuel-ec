import Image from "next/image";
import styles from "./footerComp.module.css";
import Link from "next/link";

interface IFooterProps {
    landingRef?: React.RefObject<HTMLElement> | null;
    detailsRef?: React.RefObject<HTMLElement> | null;
    visionAndMissionRef?: React.RefObject<HTMLElement> | null;
}

const FooterComp: React.FunctionComponent<IFooterProps> = ({
    landingRef,
    detailsRef,
    visionAndMissionRef,
}) => {
    const scrollToSection = (
        ref: React.RefObject<HTMLElement> | null | undefined
    ) => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles.footerContainer}>
            <div className={styles.imgContainer}>
                <Image
                    src="/header-logo.png"
                    alt="Emmanuel Header Logo"
                    className={styles.headerLogo}
                    width={448}
                    height={107}
                    priority
                    onClick={() => scrollToSection(landingRef)}
                />
            </div>
            <div className={styles.navFooterContainer}>
                <div className={styles.navFooterOne}>
                    <p>NAVIGATION</p>
                    <div className={styles.navButtonContainer}>
                        <button>
                            <Link href="/get-connected">New Here?</Link>
                        </button>
                        <a
                            href="https://www.youtube.com/channel/UC1R_XJUwfqyLY2NghfrnCRA"
                            target="_blank"
                        >
                            Tune In Live
                        </a>
                        <button onClick={() => scrollToSection(detailsRef)}>
                            Our Ministries
                        </button>
                        <button
                            onClick={() => scrollToSection(visionAndMissionRef)}
                        >
                            About Us
                        </button>
                    </div>
                </div>
                <div className={styles.navFooterTwo}>
                    <p>SOCIAL MEDIA</p>
                    <div className={styles.navButtonContainer}>
                        <a
                            href="https://www.youtube.com/channel/UC1R_XJUwfqyLY2NghfrnCRA"
                            target="_blank"
                        >
                            YouTube
                        </a>
                        <a
                            href="https://www.instagram.com/emmanuelchurchec/"
                            target="_blank"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/emmanuelenglishpca/"
                            target="_blank"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerVerse}>
                <p>
                    &quot;Therefore go and make disciples of all nations,
                    baptizing them in the name of the Father and of the Son and
                    of the Holy Spirit,&quot;
                </p>
                <p>Matthew 28:19 (NIV)</p>
            </div>
        </div>
    );
};

export default FooterComp;
