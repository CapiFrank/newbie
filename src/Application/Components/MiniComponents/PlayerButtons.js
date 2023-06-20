import {
  TbArrowsShuffle,
  TbPlayerTrackPrevFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import RepeatButton from "./RepeatButton";
import PlayButton from "./PlayButton";
import { useLocalContext } from "Application/Context/LocalContext";
export default function PlayerButtons({ className }) {
  const { ['random']: [randomize, setRandom] } = useLocalContext();
  const { ['play']: [mode, setMode] } = useLocalContext();
  const { ['state']: [state] } = useLocalContext();
  const { ['repeat']: [preference, setPreference] } = useLocalContext();
  return (
    <div className={`${className}`}>
      <TbArrowsShuffle
        onClick={() => setRandom(!randomize)}
        className={`max-md:hidden ${randomize ? "text-white-variation" : "text-gray-variation"
          } hover:text-white-variation cursor-pointer`}
      />
      <TbPlayerTrackPrevFilled className="max-md:hidden text-gray-variation hover:text-white-variation cursor-pointer" />
      <TbPlayerSkipBackFilled className="text-gray-variation hover:text-white-variation cursor-pointer" />
      <PlayButton mode={mode} setMode={setMode} />
      <TbPlayerSkipForwardFilled className="text-gray-variation hover:text-white-variation cursor-pointer" />
      <TbPlayerTrackNextFilled className="max-md:hidden text-gray-variation hover:text-white-variation cursor-pointer" />
      <RepeatButton
        setPreference={setPreference}
        preference={preference}
        state={state}
        className={
          "max-sm:hidden text-gray-variation hover:text-white-variation cursor-pointer"
        }
      />
    </div>
  );
}
