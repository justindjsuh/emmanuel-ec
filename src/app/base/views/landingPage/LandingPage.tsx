import Image from "next/image";
import styles from "./LandingPage.module.css";
import HeaderComp from "../../components/headerComp/headerComp";
import Link from "next/link";

interface ILandingPageProps {
    detailsRef?: React.RefObject<HTMLElement> | null;
    visionAndMissionRef?: React.RefObject<HTMLElement> | null;
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = ({
    detailsRef,
    visionAndMissionRef,
}) => {
    return (
        <div className={styles.landingPage}>
            <HeaderComp
                detailsRef={detailsRef}
                visionAndMissionRef={visionAndMissionRef}
            />
            <div className={styles.landingPageContainer}>
                <div className={styles.landingDetails}>
                    <h1>WELCOME</h1>
                    <div className={styles.textDetails}>
                        <p>
                            Worship with us on Sundays, <span>together.</span>
                        </p>
                        <p>Service | 10AM</p>
                    </div>
                    <button>
                        <Link href="/get-connected">GET CONNECTED</Link>
                    </button>
                </div>
                <div className={styles.downIndicatorDiv}>
                    <div id={styles.sdContainer}>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                    </div>
                </div>
                <Image
                    className={styles.curvesSVG}
                    src="/intersecting-curves.svg"
                    alt="Curves SVG"
                    sizes="100vw"
                    width={0}
                    height={0}
                />
            </div>
        </div>
    );
};

export default LandingPage;
