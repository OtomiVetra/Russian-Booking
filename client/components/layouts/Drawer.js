import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useUIContext } from "../context/UI";

export default function DrowerBlock() {
  const { toggleDrawer, openDrawer } = useUIContext();
  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>view3d</Button> */}
      <Drawer anchor="bottom" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="drawer-content">
            <div className="drawer-controls">x</div>
            <iframe src="https://applicata-vr.ru/VR/A3/3A-apartment.html"></iframe>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
