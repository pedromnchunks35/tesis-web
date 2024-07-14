import { ReactNode, useEffect, useRef, useState } from "react";
interface Props {
    children: ReactNode;
}

interface datai {
    networkName: String
}

let data: datai[] = [
    {
        networkName: "CHP69-HOSPITAL"
    },
    {
        networkName: "CHP70-HOSPITAL"
    }
]

export const DropDownDefault: React.FC<Props> = ({ children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative flex">
            <button
                className="text-[#98A6AD] hover:text-body"
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {children}
            </button>
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
                    }`}
            >
                {
                    data.map((obj) => {
                        return (
                            <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                                {obj.networkName.length > 13 ? obj.networkName.substring(0, 13) + "..." : obj.networkName}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};
