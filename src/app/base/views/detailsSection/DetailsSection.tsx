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
                    <div className={`${styles.imgContainer} ${styles.homeImg}`}>
                        <Image
                            src="/home2.png"
                            alt="Place You Can Call Home Image"
                            width={500}
                            height={350}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>A PLACE YOU CAN CALL HOME</p>
                        <p>
                            Join us as one united family under Christ&apos;s
                            headship. We desire to see our brothers and sisters
                            grow and support each other in this walk of faith!
                        </p>
                    </div>
                </div>
                <div className={styles.detailCard}>
                    <div
                        className={`${styles.imgContainer} ${styles.reflectionsImg}`}
                    >
                        <Image
                            src="/reflection.png"
                            alt="Friday Night Reflections Image"
                            width={600}
                            height={350}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>FRIDAY NIGHT REFLECTIONS</p>
                        <p>
                            Join us during our Friday Night Reflections! We have
                            small groups that are focused on sharing with fellow
                            brothers and sisters and growing as one community.
                        </p>
                    </div>
                </div>
                <div className={styles.detailCard}>
                    <div
                        className={`${styles.imgContainer} ${styles.fellowshipsImg}`}
                    >
                        <Image
                            src="/fellowships.png"
                            alt="Monthly Fellowships Image"
                            width={500}
                            height={350}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles.detailText}>
                        <p>MONTHLY FELLOWSHIPS</p>
                        <p>
                            We maintain monthly congregational fellowships where
                            we can engage with one another with games,
                            conversation, and food!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;
