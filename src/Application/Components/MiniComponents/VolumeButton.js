import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
export default function VolumeButton({volume, setVolume}){
    return (
      <div>
        { volume >= 0.7 ?
        <BsFillVolumeUpFill
          className="text-gray-variation"
          onClick={() => setVolume(0.5)}
        /> : volume > 0 && volume < 0.7 ?
        <BsVolumeDownFill
          className="text-gray-variation"
          onClick={() => setVolume(0)}
        /> :
        <BsFillVolumeMuteFill
          className="text-gray-variation"
          onClick={() => setVolume(1)}
        />
        }
      </div>
    );
}