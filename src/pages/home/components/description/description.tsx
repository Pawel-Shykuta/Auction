import styles from "./description.module.scss";

const Description = () => {
  const backgroundVideo = () => {
    return (
      <div className={styles.video_wrapper}>
        <video autoPlay loop muted playsInline className={styles.video_bg}>
          <source
            type="video/mp4"
            src="https://media.istockphoto.com/id/956473160/video/ld-wooden-judges-gavel-striking-the-dusty-sound-block.mp4?s=mp4-640x640-is&k=20&c=zJRs-ZE2yu7HuMDCuaMRK4E27Pdx3SMu5AyR-w4TRD0="
          />
        </video>
      </div>
    );
  };

  return (
    <div className={styles.main_container}>
      {backgroundVideo()}

      <div className={styles.text_container}>
        <h1>Live Auctions</h1>
        <p>
          Discover unique items and bid on your favorites. New auctions daily
          with verified products and seller guarantee.
        </p>
      </div>
    </div>
  );
};

export default Description;
