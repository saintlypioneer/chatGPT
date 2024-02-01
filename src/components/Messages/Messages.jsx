import { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { RiOpenaiFill } from "react-icons/ri";

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ markdownText }) => {
    return (
      <ReactMarkdown 
        children={markdownText}
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      />
    );
  }

export default function Messages() {
    const { data: messages } = useSelector(state => state.messages);
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]); // Dependency array includes messages, so effect runs every time messages change

    return (
        <div className="flex-1 overflow-y-scroll p-3 w-full max-w-[900px] md:mx-auto">
            {messages?.map((message, idx) => (
                <div key={idx} className="flex gap-4 mt-4">
                    {(message.from == "You") ? (
                        <img className="w-8 h-8 object-cover rounded-full border-2 flex-shrink-0" src="/user-avatar.jpeg" />
                    ) : (
                        <RiOpenaiFill size={"32px"} color="white" className="rounded-full p-1 border bg-light-primary flex-shrink-0" />
                    )}
                    <div className="flex-1 flex flex-col w-[70%]">
                        <span className="text-base font-semibold">{message.from}</span>
                        {/* <span className="overflow-x-scroll">{message.text}</span> */}
                        <div className="overflow-x-scroll">
                            <MarkdownRenderer markdownText={message.text} />
                        </div>
                    </div>
                </div>
            ))}
            <div ref={endOfMessagesRef} /> {/* Empty div as a reference point */}
        </div>
    );
}
