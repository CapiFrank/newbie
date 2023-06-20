import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router";
export default function Cards({ props }) {
    const navigate = useNavigate();
    return (
        <div className="cursor-pointer flex flex-col pb-2 pr-2" onClick={() => { navigate(`/${props.path}/${props.id}`) }}>
            <div className="w-40 h-40 rounded overflow-hidden shadow-lg hover:brightness-75 group flex flex-col">
                <img
                    className="w-full h-full object-cover group "
                    src={`${props.url}`}
                    alt="Sunset in the mountains"
                />
                <div className="invisible group-hover:visible -mt-7 mr-2 self-end">
                    <AiFillPlayCircle className="text-2xl text-gray-variation hover:text-blue-500" />
                </div>
            </div>
            <div className="mt-1">
                <div className="font-bold text-xs text-white-variation mb-2 hover:underline w-40">
                    {props.title}
                </div>
            </div>
        </div>
    );
}