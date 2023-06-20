import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
} from "react-icons/tb";

export default function PlayButton({ mode, setMode}) {
  return (
    <div>
      {mode ?
        <TbPlayerPlayFilled className="text-gray-variation hover:text-white-variation cursor-pointer" onClick={() => { setMode(false); }}/> :
        <TbPlayerPauseFilled className="text-gray-variation hover:text-white-variation cursor-pointer" onClick={() => {setMode(true); }} />}
    </div>
  );
}
