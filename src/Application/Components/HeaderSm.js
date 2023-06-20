import Emblem from "./MiniComponents/Emblem";
import { useLocalContext } from "Application/Context/LocalContext";

export function HeaderSm() {
    const { ['sidebar']: [open, setOpen], } = useLocalContext();
    return (
        <section className={`fixed w-full py-2 sm:hidden shadow-lg transition-all border-b border-slate-700 duration-1000 sm:pl-52 lg:pl-60 ${open ? "pl-6" : ""} bg-slate-800 flex flex-row`}>
            <Emblem open={!open} />
        </section>
    );
}
