import logo from "Application/Images/logo-white.png";
export default function Emblem({open}) {
    return (
        <div
            className={` inline-flex justify-center w-4/5 duration-1000 ${ open ? "max-sm:scale-0" : ""
                }`}
        >
            <img
                src={logo}
                className="text-4xl rounded cursor-pointer block float-left ml-7 duration-500 w-8"
                alt="Newbie emblem..."
            />
            <h1 className="text-white-variation origin-left font-medium text-2xl sm:scale-100 -ml-1 duration-1000">
                ewBie
            </h1>
        </div>
    );
}
