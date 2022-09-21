import rightArrow from "../public/assets/shared/desktop/icon-right-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ background, title, link }) {
  return (
    <div className={`${background && background} category-card`}>
      <Link href={link ? link : "#"}>
        <a>
          <div className="category-card-top-layer">
            <h2>{title ? title : "Default Title"}</h2>
            <p>
              View Projects{" "}
              <Image src={rightArrow} alt="Right Arrow" height={8} width={4} />{" "}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
