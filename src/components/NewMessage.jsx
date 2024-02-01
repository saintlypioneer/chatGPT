import React, { useState, useRef } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { sendMessage } from './Messages/MessagesSlice';
import { useDispatch } from 'react-redux';

export default function NewMessage() {

    const textAreaRef = useRef(null);
    const [text, setText] = useState('');

    const handleTextChange = (value) => {
        setText(value);

        // Reset height to 'auto' to get the correct scroll height
        textAreaRef.current.style.height = 'auto';

        // set max height of 200px
        textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 130)}px`;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent the default action (new line)
            submitNewMessage();
        }
    };

    // handle sending new messages
    const dispatch = useDispatch();
    function submitNewMessage(){
        console.log("Button clicked: ", text);
        dispatch(sendMessage(text));
        handleTextChange("");
    }

    return (
        <div className='p-3'>
            {/* input component */}
            <div className={`border border-light-text-secondary rounded-xl px-3 py-1 flex items-end ${text=="" && "items-center"}`}>
                <textarea
                    ref={textAreaRef}
                    className="w-full border rounded-md resize-none overflow-hidden focus:outline-none border-none"
                    rows="1"
                    style={{ maxHeight: '130px', minHeight: '35px' }}
                    value={text}
                    onChange={e => handleTextChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='Message ChatGPT…'
                />
                <button onClick={submitNewMessage} disabled={text==""} className={`w-8 h-8 bg-light-text-primary ${text=="" && "bg-light-text-secondary"} flex justify-center items-center border-none rounded-md my-1`}>
                    <FaArrowUp color='white' />
                </button>
            </div>


            {/* disclaimer */}
            <div className='text-center leading-4 mt-3'>
                <span className='text-xs text-light-text-token font-light'>ChatGPT can make mistakes. Consider checking important information.</span>
            </div>
        </div>
    );
}