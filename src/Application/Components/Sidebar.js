import { React, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Emblem from './MiniComponents/Emblem';
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { GoBroadcast } from "react-icons/go";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import MenuButton from './MiniComponents/MenuButton';
import { useLocalContext } from 'Application/Context/LocalContext';
import UserIcon from './MiniComponents/UserIcon';

export function Sidebar() {
    const Sites = [
        { title: "Home", icon: <AiFillHome />, path: '/' },
        { title: "Listen Now", icon: <FaAssistiveListeningSystems />, path: "/artist" },
        { title: "Radio & Podcast", icon: <GoBroadcast />, path: "/album" },
        { title: "My Playlist", icon: <MdPlaylistPlay />, path: "/searched" },
    ];
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState();
    const { ['sidebar']: [open, setOpen], } = useLocalContext();
    return (
        <div className={`flex flex-col sidebar bg-slate-800 h-screen shadow-lg border-r border-slate-700 p-5 pt-8 transition-all ${open ? 'max-md:-translate-x-52' : ''} duration-1000 w-52 lg:w-60 fixed`}>
            <MenuButton
                props={{ className: "absolute top-[0.6rem] left-[12.95rem] md:hidden text-3xl border-y border-r border-slate-700 rounded-sm text-gray-variation bg-slate-800 cursor-pointer active:bg-white-variation" }}
                onClick={() => { setOpen(!open) }}
            />
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="w-60 -ml-6 lg:-ml-2">
                        <Emblem open={open} />
                    </div>
                    <div className="flex items-center rounded-md bg-light-white mt-6 px-4 py-2">
                        <AiOutlineSearch className="text-white-variation text-lg block float-left cursor-pointer mr-2" onClick={() => { navigate(`/searched/${searchKey}`); setSearchKey(''); }} />
                        <input type={"search"} className="text-base bg-transparent w-full text-white-variation focus:outline-none" placeholder="Search" onChange={e => setSearchKey(e.target.value)} value={searchKey} />
                    </div>

                    <ul className="pt-2">
                        {Sites.map((menu, index) => (
                            <li>
                                <NavLink key={index} to={menu.path} className={({ isActive }) => `text-white-variation text-md lg:text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${isActive ? 'bg-light-white font-bold' : ''}`}>
                                    <span>{menu.icon}</span>
                                    <span>{menu.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <UserIcon/>
                </div>
            </div>
        </div>
    )
}
