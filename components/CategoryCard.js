import rightArrow from "../public/assets/shared/desktop/icon-right-arrow.svg";
import Image from "next/image";
import bg from "../public/assets/home/mobile/image-app-design.jpg";

export default function CategoryCard({ background, title }) {
  return (
    <div className={`${background} category-card`}>
      <h2>{title}</h2>
      <p>
        View Projects{" "}
        <Image src={rightArrow} alt="Right Arrow" height={8} width={4} />{" "}
      </p>
    </div>
  );
}
