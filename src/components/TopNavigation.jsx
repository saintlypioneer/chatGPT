import { TbEdit } from "react-icons/tb";
import MenuIcon from "../assets/icons/svg/menu";
import { FaChevronDown } from "react-icons/fa";

export default function TopNavigation() {
    return (
        <div className="flex justify-between border-b p-3">
            {/* drawer button (hidden on bigger screens) */}
            <span className={`flex flex-col justify-center items-center md:hidden`}>
                <MenuIcon size={20} />
            </span>
            {/* new chat button on medium screens and above */}
            <span className="hidden md:flex w-9 h-9 flex-col justify-center items-center border border-light-text-secondary rounded-md">
                <TbEdit size={"20px"} />
            </span>

            {/* model selection */}
            <div className="flex items-center gap-1">
                <span className="text-lg font-medium">ChatGPT</span>
                <span className="text-light-text-token">3.5</span>
                <FaChevronDown className="text-light-text-token ml-1" size={"10px"} />
            </div>

            {/* new chat */}
            <span className="flex flex-col justify-center items-center">
                <TbEdit size={"20px"} className="md:hidden" />
            </span>
        </div>
    );
}