import { Container } from "@mui/material";
import Header from "./Header";
import SomeFooter from "./Footer";
import DrawerBlock from "./Drawer";

function MainLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <Container sx={{ mt: "5rem", flex: 1 }}>{children}</Container>
      <SomeFooter />
      <DrawerBlock />
    </div>
  );
}

export default MainLayout;
