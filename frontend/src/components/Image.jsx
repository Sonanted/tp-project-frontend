import Image from "../img/image.jpg";
import "../css/Image.css"

export default function ImageComponent() {
  return (
    <>
      <img
        src={Image}
        alt="Cat with a laptop"
      />
    </>
  );
}
