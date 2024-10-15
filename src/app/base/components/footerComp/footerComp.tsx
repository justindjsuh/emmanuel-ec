import Image from "next/image";
import styles from "./footerComp.module.css";

const FooterComp: React.FunctionComponent = () => {
    return (
        <div className={styles.headerContainer}>
            <div>
                {/* Icon */}
                <Image
                    src="/header-logo.png"
                    alt="Emmanuel Header Logo"
                    className={styles.headerLogo}
                    width={448}
                    height={107}
                    priority
                />
                {/* Text */}
            </div>
            <div className={styles.navButtonContainer}>
                {/* New here */}
                <button>New Here?</button>
                {/* Connect */}
                <button>Announcements</button>
                {/* About Us */}
                <button>About Us</button>
                {/* Schedule */}
                <button>Schedule</button>
            </div>
        </div>
    );
};

export default FooterComp;
