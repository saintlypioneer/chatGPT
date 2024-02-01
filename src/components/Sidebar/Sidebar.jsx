import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Drawer } from "@mantine/core";
import { toggleSidebar } from "./SidebarSlice";
import { useEffect, useState } from "react";

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
                    <Drawer.Root size="xs" opened={isOpen} withCloseButton={false} closeOnEscape closeOnClickOutside onClose={() => {
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

    return (
        <motion.div className={`overflow-x-hidden`}
            initial={false}
            animate={{
                width: isOpen ? "fit-content" : "0px"
            }}
        >
            <div className="h-screen w-64 bg-light-text-primary text-white">
                <h3>Chat History</h3>
            </div>
        </motion.div>
    );
}