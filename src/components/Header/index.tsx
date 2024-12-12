import Image from "next/image";
import Icon from "../../../public/rocket.png";

export const Header: React.FC = () => {
  return (
    <header className="w-screen bg-black h-[200px] flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <Image
          src={Icon}
          alt="Icon"
          width={22}
          height={36}
          className="object-contain"
        />

        <h1 className="text-[20px] leading-[32px] text-[#4EA8DE] lg:text-[40px] lg:leading-[48px] font-bold">
          Todo <span className="text-[#5E60CE]">App</span>
        </h1>
      </div>
    </header>
  );
};
