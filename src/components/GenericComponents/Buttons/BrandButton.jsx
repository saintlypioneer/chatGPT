export default function BrandButton({ image, text, icon }) {
    return (
        <button className="w-full flex justify-between items-center gap-2 p-2 hover:bg-white/15 rounded-md">
            {/* <RiOpenaiFill size={"28px"} className="bg-white text-light-text-primary p-1 rounded-full" /> */}
            {image}
            <span className="flex-1 text-start text-sm font-medium">{text}</span>
            <span>
                {/* <TbEdit size={"20px"} /> */}
                {icon}
            </span>
        </button>
    );
}