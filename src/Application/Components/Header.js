import { useState, React } from "react";
import {
    TbMusic,
} from "react-icons/tb";
import { MdArrowBackIosNew } from "react-icons/md";
import PlayerButtons from "./MiniComponents/PlayerButtons";
import VolumeButton from "./MiniComponents/VolumeButton";
import { useLocation, useNavigate } from "react-router";
import { useLocalContext } from "Application/Context/LocalContext";

export function Header() {
    const {['volume']:[volume, setVolume]} = useLocalContext();
    const {['progress']:[progress, setProgress]} = useLocalContext();
    const currentLocation = useLocation();
    const navigate = useNavigate();

    return (
        <section className={`fixed pl-2 w-full max-sm:bottom-0 shadow-lg transition-all max-sm:border-t sm:border-b border-slate-700 duration-1000 md:pl-52 lg:pl-60 bg-slate-800 flex flex-row justify-evenly`}>
            <MdArrowBackIosNew className={
                `-ml-32 self-center text-gray-variation text-2xl max-md:hidden cursor-pointer ${currentLocation.pathname === '/' ? 'hidden' : ''}`
            } onClick={() => {
                navigate(-1);
            }} />
            <PlayerButtons
                className={
                    "flex flex-row items-center text-2xl px-3 py-2 max-sm:hidden"
                }
            />
            <div className="max-sm:w-full w-96 inline-flex bg-slate-600">
                <div className="w-14 h-full max-sm:-ml-1 bg-gray-album flex items-center">
                    <img src="https://cdns-images.dzcdn.net/images/artist/7cb5a10ddfee3b1c1584302ef677f24f/500x500.jpg" className="h-full w-full object-scale-down" alt="Calibre 50" />
                    <TbMusic className="h-4/6 w-full text-gray-variation" />
                </div>
                <div className="h-full w-full flex flex-col">
                    <div className="pl-1 h-5/6 w-full flex max-sm:flex-row-reverse max-sm:justify-between items-center mt-2 pr-2 bg-transparent">
                        <PlayerButtons
                            className={"flex flex-row items-center text-lg sm:hidden"}
                        />
                        <span className="text-white-variation text-xs font-medium sm:-mt-1.5 sm:-mb-1.5">
                            Calibre 50
                        </span>
                    </div>
                    <span className="pl-1 text-gray-400 text-xs sm:-mb-2.5 sm:pb-1">
                        Si Te Pudiera Mentir
                    </span>
                    <div className="max-sm:-mb-2 -mb-1.5">
                        <input
                            className="w-full h-1 pb-1 bg-gray-variation range range-sm accent-white-variation"
                            type="range"
                            min={0}
                            max={1}
                            step={0.02}
                            value={progress}
                            onChange={(event) => {
                                setProgress(event.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center max-sm:hidden">
                <VolumeButton volume={volume} setVolume={setVolume} />
                <input
                    className="w-24 h-1 bg-gray-variation range range-sm accent-white-variation"
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume}
                    onChange={(event) => {
                        setVolume(event.target.value);
                    }}
                />
            </div>
        </section>
    );
}
