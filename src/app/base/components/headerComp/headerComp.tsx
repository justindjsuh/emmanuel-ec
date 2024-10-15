import Image from "next/image";
import styles from "./headerComp.module.css";
import { useState } from "react";

const HeaderComp: React.FunctionComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className={styles.headerContainer}>
                <div>
                    {/* Icon */}
                    <Image
                        src="/Header_Logo.png"
                        alt="Emmanuel Header Logo"
                        className={styles.headerLogo}
                        width={648}
                        height={121}
                        priority
                    />
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
            <div className={styles.headerContainerMobile}>
                <div>
                    {/* Icon */}
                    <Image
                        src="/Header_Logo.png"
                        alt="Emmanuel Header Logo"
                        className={styles.headerLogo}
                        width={648}
                        height={121}
                        priority
                    />
                </div>
                <div className={styles.checkboxContainer}>
                    <div
                        id={styles.navIcon}
                        className={mobileMenuOpen ? styles.open : styles.close}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div
                    className={`${styles.navButtonContainerMobile} ${
                        mobileMenuOpen ? styles.open : styles.closed
                    }`}
                >
                    <button>New Here?</button>
                    <hr />
                    <button>Announcements</button>
                    <hr />
                    <button>About Us</button>
                    <hr />
                    <button>Schedule</button>
                </div>
            </div>
        </>
    );
};

export default HeaderComp;
