import { TCardTypes } from "@/Types/Types";
import Image from "next/image";
const Card: React.FC<TCardTypes> = ({ img, title, price, discount }) => {
  return (
    <div className="h-[500px]">
      <div className="flex p-10 bg-[#e8f5e9] border border-gray-200 rounded-xl">
        <Image
          src={img}
          alt="cardImg"
          width={200}
          height={200}
          className="h-[300px] hover:scale-105 transition-all duration-700 ease-in-out"
        ></Image>
      </div>
      <div className="py-5 px-3">
        <p className="text-gray-500">Design Low Book</p>
        <p className="text-primary font-semibold text-xl pr-10">{title}</p>
        <div className="flex gap-3 text-lg font-semibold">
          <p className="text-gray-500">${price}.00</p>
          <p className="text-primary line-through">${discount}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
