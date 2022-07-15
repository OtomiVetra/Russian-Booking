import { createContext, useContext, useState } from "react";
import { API_URL } from "../../config";
import { useUserContext } from "./User";

const UIContext = createContext();
export const UIProvider = ({ children }) => {
  const { setAfterLoginURL } = useUserContext();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(value);
  };
  const handleClickOpen = (openType = "signIn", nextURL = "/") => {
    setOpen(true);
    setType(openType);
    setAfterLoginURL(nextURL);
  };
  const handleClose = () => {
    setOpen(false);
    setType(null);
  };
  const value = {
    type,
    open,
    handleClickOpen,
    handleClose,
    openDrawer,
    toggleDrawer,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => useContext(UIContext);
