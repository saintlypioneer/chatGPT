import { useSelector } from "react-redux";
import {motion} from "framer-motion";

export default function Sidebar(){

    const {isOpen} = useSelector(state => state.sidebar);

    return (
        <motion.div className={`overflow-x-hidden`}
            initial={false}
            animate={{
                width: isOpen ? "fit-content": "0px"
            }}
        >
            <div className="h-screen w-64 bg-light-text-primary text-white">
                <h3>Chat History</h3>
            </div>
        </motion.div>
    );
}