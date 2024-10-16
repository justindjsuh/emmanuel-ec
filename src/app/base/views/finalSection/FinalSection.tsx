import Image from "next/image";
import styles from "./FinalSection.module.css";

const FinalSection: React.FunctionComponent = () => {
    return (
        <div className={styles.finalSectionContainer}>
            <p>WE LOOK FORWARD TO WORSHIPING WITH YOU</p>
            <button>GET CONNECTED</button>
        </div>
    );
};

export default FinalSection;
