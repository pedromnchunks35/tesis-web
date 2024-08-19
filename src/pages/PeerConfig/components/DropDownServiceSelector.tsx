import { ReactNode, useEffect, useRef, useState } from "react";
interface Props {
    children: ReactNode;
    list?: any;
    set_list_member?: any;
}
export const DropDownServiceSelector: React.FC<Props> = ({ children, list, set_list_member }) => {
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
                    list && list.length > 0 ? list.map((obj: any) => {
                        return (
                            <button onClick={() => {
                                set_list_member(obj);
                                setDropdownOpen(false);
                            }} className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                                {obj}
                            </button>
                        );
                    }) :
                        (
                            <div />
                        )
                }
            </div>
        </div>
    );
};
