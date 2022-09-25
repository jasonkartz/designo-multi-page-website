import Image from "next/image";

export default function Infographic({ image, alt, title, description }) {
  return (
    <div className="infographic">
      <Image
        className="img-infographic"
        src={image}
        alt={alt}
        width={202}
        height={202}
        priority={true}
      />
      <div className="text-infographic">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
