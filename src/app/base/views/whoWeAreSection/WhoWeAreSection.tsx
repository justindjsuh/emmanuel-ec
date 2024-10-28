import Image from "next/image";
import styles from "./WhoWeAreSection.module.css";

const WhoWeAreSection: React.FunctionComponent = () => {
    return (
        <div className={styles.whoWeAreSectionContainer}>
            <div className={styles.imgContainer}>
                <Image
                    src="/whoweare.png"
                    alt="Pastor Introduction Video Image"
                    width={513}
                    height={307}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.whoWeAreText}>
                <p className={styles.textHeader}>WHO WE ARE</p>
                <p className={styles.mainText}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce
                    efficitur neque orci nam tempus potenti dignissim.
                    Pellentesque porta ornare placerat netus faucibus maximus.
                    Morbi odio venenatis ultricies nisl placerat hac. Elit
                    imperdiet magnis iaculis venenatis iaculis efficitur sodales
                    montes.
                </p>
                <p className={styles.quotedBy}>- Pastor Daniel Cho</p>
            </div>
        </div>
    );
};

export default WhoWeAreSection;
