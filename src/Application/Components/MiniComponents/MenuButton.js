import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { React, useState } from "react";

export default function MenuButton({ props, onClick }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {open ? (
        <AiOutlineClose
          className={`${props.className}`}
          onClick={()=>{onClick(); setOpen(!open);}}
        />
      ) : (
        <AiOutlineMenu
          className={`${props.className}`}
            onClick={() => { onClick(); setOpen(!open); }}
        />
      )}
    </div>
  );
}
