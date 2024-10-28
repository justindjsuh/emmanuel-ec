import Link from "next/link";
import FooterComp from "../../components/footerComp/footerComp";
import styles from "./FinalSection.module.css";

interface IFinalSectionProps {
    landingRef?: React.RefObject<HTMLElement> | null;
    detailsRef?: React.RefObject<HTMLElement> | null;
    visionAndMissionRef?: React.RefObject<HTMLElement> | null;
}

const FinalSection: React.FunctionComponent<IFinalSectionProps> = ({
    landingRef,
    detailsRef,
    visionAndMissionRef,
}) => {
    return (
        <>
            <div className={styles.finalSectionContainer}>
                <p>WE LOOK FORWARD TO WORSHIPING WITH YOU</p>
                <button>
                    <Link href="/get-connected">GET CONNECTED</Link>
                </button>
            </div>
            <FooterComp
                landingRef={landingRef}
                detailsRef={detailsRef}
                visionAndMissionRef={visionAndMissionRef}
            />
        </>
    );
};

export default FinalSection;
