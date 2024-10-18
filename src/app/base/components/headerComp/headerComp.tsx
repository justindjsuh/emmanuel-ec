import Image from "next/image";
import styles from "./headerComp.module.css";
import { useState } from "react";
import Link from "next/link";

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
                    <button>
                        <Link href="/get-connected">New Here?</Link>
                    </button>
                    <button>
                        <a
                            href="https://www.youtube.com/channel/UC1R_XJUwfqyLY2NghfrnCRA"
                            target="_blank"
                        >
                            Tune In Live
                        </a>
                    </button>
                    <button>About Us</button>
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
                    <button>
                        <Link href="/get-connected">New Here?</Link>
                    </button>
                    <hr />
                    <button>
                        <a
                            href="https://www.youtube.com/channel/UC1R_XJUwfqyLY2NghfrnCRA"
                            target="_blank"
                        >
                            Tune In Live
                        </a>
                    </button>
                    <hr />
                    <button>About Us</button>
                </div>
            </div>
        </>
    );
};

export default HeaderComp;
