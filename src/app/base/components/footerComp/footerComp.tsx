import Image from "next/image";
import styles from "./footerComp.module.css";

const FooterComp: React.FunctionComponent = () => {
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
                />
            </div>
            <div className={styles.navFooterContainer}>
                <div className={styles.navFooterOne}>
                    <p>NAVIGATION</p>
                    <div className={styles.navButtonContainer}>
                        <button>New Here?</button>
                        <button>YouTube</button>
                        <button>About Us</button>
                    </div>
                </div>
                <div className={styles.navFooterTwo}>
                    <p>SOCIAL MEDIA</p>
                    <div className={styles.navButtonContainer}>
                        <button>YouTube</button>
                        <button>Instagram</button>
                        <button>Facebook</button>
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
