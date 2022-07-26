import React, { useState } from "react";
import { DropdownMenu, DropdownMenuli, NavLink } from "./DropdownElement";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <DropdownMenu onClick={handleClick}>
        <DropdownMenuli>
          <NavLink
            to="/showScreen"
            onClick={() => setClick(false)}
            activeStyle
          >
            แสดงข้อมูลการบันทึก
          </NavLink>
        </DropdownMenuli>
        <DropdownMenuli>
          <NavLink
            to="/showScreen/calculate"
            onClick={() => setClick(false)}
            activeStyle
          >
            แสดงผลการวิเคราะห์
          </NavLink>
        </DropdownMenuli>
      </DropdownMenu>
    </>
  );
}
