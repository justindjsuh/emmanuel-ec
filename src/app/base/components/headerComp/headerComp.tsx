import Image from "next/image";
import styles from "./headerComp.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

interface IHeaderProps {
    useBlackText?: boolean;
}

const HeaderComp: React.FunctionComponent<IHeaderProps> = ({
    useBlackText = false,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);

        if (!mobileMenuOpen) {
            document.body.classList.add("noScroll");
        } else {
            document.body.classList.remove("noScroll");
        }
    };

    return (
        <>
            <div className={styles.headerContainer}>
                <div>
                    {/* Icon */}
                    {useBlackText ? (
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
                    ) : (
                        <Image
                            src="/Header_Logo.png"
                            alt="Emmanuel Header Logo"
                            className={styles.headerLogo}
                            width={648}
                            height={121}
                            priority
                        />
                    )}
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
                    {/* <button>
                        <Link href="/about">About Us</Link>
                    </button> */}
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
                    {/* <hr />
                    <button>
                        <Link href="/about">About Us</Link>
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default HeaderComp;
