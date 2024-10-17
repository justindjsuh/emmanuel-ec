import FooterComp from "../../components/footerComp/footerComp";
import styles from "./FinalSection.module.css";

const FinalSection: React.FunctionComponent = () => {
    return (
        <>
            <div className={styles.finalSectionContainer}>
                <p>WE LOOK FORWARD TO WORSHIPING WITH YOU</p>
                <button>GET CONNECTED</button>
            </div>
            <FooterComp />
        </>
    );
};

export default FinalSection;
