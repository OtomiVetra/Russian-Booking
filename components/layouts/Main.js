import {Container} from '@mui/material';
import Header from './Header';

function MainLayout({children}) {
  return (
    <>
      <Header/>
      <Container
        sx={{mt: '5rem'}}
      >
        {children}
      </Container>
    </>
  )
}

export default MainLayout;
