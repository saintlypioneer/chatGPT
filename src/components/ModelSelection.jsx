import { Checkbox, Popover } from "@mantine/core";

import { IoFlashOutline } from "react-icons/io5";
import { PiSparkle, PiPuzzlePiece } from "react-icons/pi";

export default function ModelSelection(props) {

    const models = [
        // hardcoded for noe
        {
            icon: <PiSparkle size={"18px"} />,
            title: "GPT-4",
            text: "With DALL·E, browsing and analysis Limit 40 messages / 3 hours",
            isSelected: false
        },
        {
            icon: <IoFlashOutline size={"18px"} />,
            title: "GPT-3.5",
            text: "Great for everyday tasks",
            isSelected: true
        },
        {
            icon: <PiPuzzlePiece size={"18px"} />,
            title: "Plugins",
            text: "",
            isSelected: false
        }
    ];

    return (
        <Popover width={300} position="bottom" trapFocus shadow="md">
            <Popover.Target>
                {props.children}
            </Popover.Target>
            <Popover.Dropdown className="p-1">
                <div className="flex flex-col gap-3">
                    {
                        models.map((model, idx) => {
                            return (
                                <button key={idx} className="flex gap-2 items-center text-sm py-3 px-4 hover:bg-black/5 rounded">
                                    {model.icon}
                                    <div className="flex-1 flex flex-col text-left">
                                        <span className="text-light-text-primary">{model.title}</span>
                                        <span className="text-light-text-token opacity-50">{model.text}</span>
                                    </div>
                                    <Checkbox
                                        defaultChecked={model.isSelected}
                                        color="rgba(0, 0, 0, 1)"
                                        radius="xl"
                                        disabled
                                    />
                                </button>
                            );
                        })
                    }
                </div>
            </Popover.Dropdown>
        </Popover>
    );
}