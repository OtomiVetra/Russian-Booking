import {Container} from '@mui/material';
import Header from './Header';
import LabelBottomNavigation from '../Footer';

function MainLayout({children}) {
  return (
    <div className="layout-wrapper">
      <Header/>
      <Container
        sx={{mt: '5rem', flex: 1}}
      >
        {children}
      </Container>
      <LabelBottomNavigation/>
    </div>
  )
}

export default MainLayout;
