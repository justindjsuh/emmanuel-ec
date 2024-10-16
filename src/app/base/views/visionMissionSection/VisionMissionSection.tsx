import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

const VisionMissionSection: React.FunctionComponent = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.visionAndMissionContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/vision_and_mission.png"
                        alt="Cross Image"
                        width={520}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.visionAndMissionTextContainer}>
                    <div className={styles.textContainer}>
                        <p>OUR VISION</p>
                        <p>
                            We, Emmanuel Church, aim to be a missional church
                            that strives to obey and fulfill the Lord&apos;s
                            Great Commission from Philadelphia to the ends of
                            the Earth.
                        </p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>OUR MISSION</p>
                        <p>
                            To make, mature, and multiply disciples of Jesus
                            Christ by sharing the gospel, shepherding God&apos;s
                            people, and serving with our gifts.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.valuesContainer}>
                <p className={styles.valuesHeader}>OUR VALUES</p>
                <div className={styles.valueCardsContainer}>
                    <div className={styles.valuesCard}>
                        <Image
                            src="/worship_icon.png"
                            alt="Worship Image"
                            width={85}
                            height={85}
                            objectFit="cover"
                        />
                        <p>WORSHIP</p>
                        <p>Glorifying and enjoying God forever</p>
                    </div>
                    <div className={styles.valuesCard}>
                        <Image
                            src="/discipleship_icon.png"
                            alt="Discipleship Image"
                            width={85}
                            height={85}
                            objectFit="cover"
                        />
                        <p>DISCIPLESHIP</p>
                        <p>Making followers of Jesus Christ</p>
                    </div>
                    <div className={styles.valuesCard}>
                        <Image
                            src="/fellowship_icon.png"
                            alt="Fellowship Image"
                            width={85}
                            height={85}
                            objectFit="cover"
                        />
                        <p>FELLOWSHIP</p>
                        <p>Building one another up in Christ</p>
                    </div>
                    <div className={styles.valuesCard}>
                        <Image
                            src="/serving_icon.png"
                            alt="Serving Image"
                            width={85}
                            height={85}
                            objectFit="cover"
                        />
                        <p>SERVING</p>
                        <p>Edifying the church through our gifts</p>
                    </div>
                    <div className={styles.valuesCard}>
                        <Image
                            src="/witnessing_icon.png"
                            alt="Witnessing Image"
                            width={85}
                            height={85}
                            objectFit="cover"
                        />
                        <p>WITNESSING</p>
                        <p>Spreading the gospel to Philadelphia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMissionSection;
