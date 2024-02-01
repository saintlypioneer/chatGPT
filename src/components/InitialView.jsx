import { RiOpenaiFill } from "react-icons/ri";


export default function InitialView(){

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

    return (
        <div className="flex-1 flex flex-col justify-between p-3">

            {/* empty div for center aligning */}
            <div></div>


            {/* OpenAI Welcome */}
            <div className="m-auto">
                <RiOpenaiFill size={"60px"} className="m-auto p-2 rounded-full border" />
                <h1 className="text-2xl font-medium mt-2">How can I help you today?</h1>
            </div>


            {/* Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                
                {
                    suggestions.map((suggestion, idx) => {

                        // on smaller screens, only show 2 items
                        const isHidden = (idx>=2) ? 'hidden md:flex' : '';

                        return (
                            <button key={idx} className={`w-full flex flex-col border border-light-text-secondary rounded-xl p-3 ${isHidden} text-left`}>
                                {/* single suggestion */}
                                <span className="w-full truncate text-base font-medium textove">{suggestion.title}</span>
                                <span className="w-full truncate opacity-50 text-base">{suggestion.text}</span>
                            </button>
                        );
                    })
                }

            </div>


        </div>
    );
}