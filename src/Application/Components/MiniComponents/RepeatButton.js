import { TbRepeat, TbRepeatOnce, TbRepeatOff } from "react-icons/tb";
import { React } from "react";

export default function RepeatButton({state, preference, setPreference, className}) {
  return (
    <div>
      <TbRepeat
        onClick={() => setPreference(state.once)}
        className={`${className} ${
          preference === state.repeat ? "" : "hidden"
        }`}
      />
      <TbRepeatOnce
        onClick={() => setPreference(state.norepeat)}
        className={`${className}  ${preference === state.once ? "" : "hidden"}`}
      />
      <TbRepeatOff
        onClick={() => setPreference(state.repeat)}
        className={`${className}  ${
          preference === state.norepeat ? "" : "hidden"
        }`}
      />
    </div>
  );
}
