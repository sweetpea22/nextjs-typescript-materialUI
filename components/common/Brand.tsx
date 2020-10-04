import styles from "./navbar.module.css";

export interface BrandLogoProps {
  image?: string;
  text?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  text,
  image,
}: BrandLogoProps) => {
  let showImage;
  if (image !== null) {
    showImage = <img className={styles.brandImg}>{image}</img>;
  } else {
    showImage = null;
  }
  return (
    <div>
      <h1 className={styles.brandWordMark}>{text}</h1>
    </div>
  );
};

export default BrandLogo;
