import { useCarousel } from "../hooks/useCarousel";
import useMediaQuery from "../hooks/useMediaQuery";
import Appartment from "../assets/apt.jpg";
import Bar from "../assets/bar.jpg";

const Picture = () => {
  const currentImage = useCarousel({ totalImages: 5 });
  const isBig = useMediaQuery("(min-width: 768px)");
  const bgColors = [
    "bg-transparent",
    "bg-cyan-300",
    "bg-green-300",
    "bg-amber-200",
    "bg-fuchsia-200",
  ];

  const photo: string = isBig ? Appartment : Bar;

  const classNames = ` ${isBig ? "h-screen" : "h-[400px]"} ${bgColors[currentImage]} bg-cover bg-blend-luminosity`;

  const style = { backgroundImage: `url(${photo})` }; // Tailwindscss's bg-[url('`${photo}`')] does not work

  return (
    <div className="bg-amber-600">
      <div className={classNames} style={style}>
        &nbsp;
      </div>
    </div>
  );
};

export default Picture;
