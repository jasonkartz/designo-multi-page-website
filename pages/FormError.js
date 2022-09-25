import iconError from "../public/images/icon-error.svg";
import Image from "next/image";

export default function FormError({ className, message }) {
  return (
    <div className={className}>
      <p>
        <em>{message ? message : "Error"}</em>
      </p>
      <Image
        src={iconError}
        alt="Error"
        height={20}
        width={20}
        priority={true}
      />
    </div>
  );
}
