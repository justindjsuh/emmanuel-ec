import Image from "next/image";
import styles from "./DetailsSection.module.css";

const DetailsSection: React.FunctionComponent = () => {
    return (
        <div className={styles.detailsSectionContainer}>
            <div className={styles.worshipDetails}>
                <h2>JOIN US FOR WORSHIP</h2>
                <p className={styles.nonMobileText}>
                    SUNDAYS AT 10:00 AM | 4723 SPRUCE STREET, PHILADELPHIA, PA
                    19139
                </p>
                <div className={styles.mobileText}>
                    <p>SUNDAYS AT 10:00 AM</p>
                    <p>4723 SPRUCE STREET, PHILADELPHIA, PA 19139</p>
                </div>
            </div>
            <div className={styles.detailsCardContainer}>
                <div className={styles.detailCard}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/home.png"
                            alt="Place You Can Call Home Image"
                            width={349}
                            height={350}
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>A PLACE YOU CAN CALL HOME</p>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Rutrum sed vehicula fermentum curabitur cursus
                            gravida tincidunt.
                        </p>
                    </div>
                </div>
                <div className={styles.detailCard}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/reflections.png"
                            alt="Friday Night Reflections Image"
                            width={550}
                            height={350}
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>FRIDAY NIGHT REFLECTIONS</p>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Rutrum sed vehicula fermentum curabitur cursus
                            gravida tincidunt.
                        </p>
                    </div>
                </div>
                <div className={styles.detailCard}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/fellowships.png"
                            alt="Monthly Fellowships Image"
                            width={420}
                            height={350}
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>MONTHLY FELLOWSHIPS</p>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Rutrum sed vehicula fermentum curabitur cursus
                            gravida tincidunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;
