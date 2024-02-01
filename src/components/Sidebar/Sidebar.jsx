import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Drawer } from "@mantine/core";
import { toggleSidebar } from "./SidebarSlice";
import { useEffect, useState } from "react";

import { RiOpenaiFill } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi2";
import BrandButton from "../GenericComponents/Buttons/BrandButton";

export default function Sidebar() {

    const { isOpen } = useSelector(state => state.sidebar);
    const dispatch = useDispatch();

    // State to store the current window width
    const [width, setWidth] = useState(window.innerWidth);
    const [isSmallScreen, setIsSmallScreen] = useState(!(window.innerWidth >= 768));

    useEffect(() => {
        // Function to update the state with the current window width
        const handleResize = () => {
            setWidth(window.innerWidth);
            setIsSmallScreen(!(window.innerWidth >= 768));
        };

        // Set up the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean-up function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="bg-yellow-300">
            {/* for Desktop screens */}
            {
                !isSmallScreen && (<GenericSidebar />)
            }

            {/* for mobile screen */}
            {
                isSmallScreen && (
                    <Drawer.Root size="xs" opened={isOpen} closeOnEscape closeOnClickOutside onClose={() => {
                        dispatch(toggleSidebar());
                    }}>
                        <Drawer.Overlay />
                        <Drawer.Content className="p-0 w-fit">
                            <Drawer.Body className="p-0 w-fit">
                                <GenericSidebar />
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Root>
                )
            }

        </div>
    );
}

const GenericSidebar = () => {
    const { isOpen } = useSelector(state => state.sidebar);

    const history = [
        "Discovering the Secrets of the Universe with AI",
        "ChatGPT's Guide to Healthy Eating",
        "Exploring Ancient Civilizations through AI Conversations",
        "Understanding Quantum Physics with ChatGPT",
        "Mastering a New Language with AI Assistance",
        "AI's Perspective on Global Economic Trends",
        "Deep Dive into Machine Learning Concepts",
        "Solving Complex Math Problems with AI",
        "Discussing the Future of Technology with ChatGPT",
        "AI and Environmental Conservation Strategies",
        "Navigating Mental Health Topics with AI",
        "ChatGPT's Take on Classic Literature Analysis",
        "Understanding AI Ethics and Responsibilities",
        "Exploring Space Travel Possibilities with AI",
        "AI Assisted Fitness and Workout Plans",
        "Learning Programming Concepts with ChatGPT",
        "Debating Philosophical Ideas with AI",
        "Unraveling Historical Mysteries through AI Conversations",
        "Creative Writing and Storytelling with AI",
        "ChatGPT on Managing Personal Finances"
    ];
    

    return (
        <motion.div className={`overflow-x-hidden`}
            initial={false}
            animate={{
                width: isOpen ? "fit-content" : "0px"
            }}
        >
            <div className="h-screen w-64 bg-light-text-primary text-white p-2 flex flex-col">

                <div className="bg-light-text-primary">
                    <BrandButton image={<RiOpenaiFill size={"28px"} className="bg-white text-light-text-primary p-1 rounded-full" />} text={"ChatGPT"} icon={<TbEdit size={"20px"} />} />
                </div>

                <div className="flex-1 flex flex-col gap-2 overflow-y-scroll">
                    <div>
                        {/* top buttons */}
                        <BrandButton image={<HiOutlineCube size={"28px"} className="bg-white text-light-text-primary p-1 rounded-full" />} text={"Video Generator"} />
                    </div>

                    <div>
                        {/* history */}
                        
                        {
                            history.map((obj, idx) => {
                                return (
                                    <button key={idx} className="p-2 w-full truncate text-sm text-start">{obj}</button>
                                );
                            })
                        }

                    </div>
                </div>

                <div className="bg-light-text-primary pt-2">
                    <BrandButton image={<img className="w-8 h-8 object-cover rounded-full border-2 flex-shrink-0" src="/user-avatar.jpeg" />} text={"Ankit Agrawal"} />
                </div>

            </div>
        </motion.div>
    );
}