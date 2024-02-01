import { RiOpenaiFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { sendMessage } from "./Messages/MessagesSlice";


export default function InitialView() {

    const suggestions = [ // hardcoded for now
        {
            title: "Brainstorm names",
            text: "for my fantasy football team with a frog theme"
        },
        {
            title: "Design a database schema",
            text: "for an online merch store"
        },
        {
            title: "Show me a code snippet",
            text: "of a website's sticky header"
        },
        {
            title: "Explain nostalgia",
            text: "to a kindergartener"
        }
    ];

    const dispatch = useDispatch();

    return (
        <div className="flex-1 mx-auto w-full max-w-[900px] p-3 md:p-0">
            <div className="h-full flex flex-col justify-between w-full">

                {/* empty div for center aligning */}
                <div></div>


                {/* OpenAI Welcome */}
                <div className="m-auto">
                    <RiOpenaiFill size={"60px"} className="m-auto p-2 rounded-full border" />
                    <h1 className="text-2xl font-medium mt-2">How can I help you today?</h1>
                </div>


                {/* Suggestions */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">

                    {
                        suggestions.map((suggestion, idx) => {

                            // on smaller screens, only show 2 items
                            const isHidden = (idx >= 2) ? 'hidden md:flex' : '';

                            return (
                                <button onClick={()=>{
                                    dispatch(sendMessage(`${suggestion.title} ${suggestion.text}`));
                                }} key={idx} className={`w-full flex flex-col border border-light-text-secondary rounded-xl p-3 ${isHidden} text-left`}>
                                    {/* single suggestion */}
                                    <span className="w-full truncate text-base font-medium textove">{suggestion.title}</span>
                                    <span className="w-full truncate opacity-50 text-base">{suggestion.text}</span>
                                </button>
                            );
                        })
                    }

                </div>


            </div>
        </div>
    );
}