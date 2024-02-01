import { useSelector } from "react-redux";
import { RiOpenaiFill } from "react-icons/ri";

export default function Messages(){

    const {data: messages} = useSelector(state => state.messages);

    return (
        <div className="flex-1 overflow-y-scroll p-3">
            {
                messages?.map((message, idx) => {
                    return (
                        // <p key={idx}>{message.text}</p>
                        <div className="flex gap-4 mt-4">
                            
                            {
                                (message.from=="You") ? (<img className="w-8 h-8 object-cover rounded-full border-2 flex-shrink-0" src="/user-avatar.jpeg" />) : (<RiOpenaiFill size={"32px"} color="white" className="rounded-full p-1 border bg-light-primary flex-shrink-0" />)
                            }
                            <div className="flex-1 flex flex-col w-[70%]">
                                {/* right */}
                                <span className="text-base font-semibold">{message.from}</span>
                                <span className="overflow-x-scroll">{message.text}</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}