import apartments from "../data/apartments.json"
import {Container, Grid, Pagination} from '@mui/material';
import ApartmentCard from '../components/apartments/Card';
import MainLayout from '../components/layouts/Main';

function App() {
  return (
    <MainLayout>
      <Grid container spacing={4}>
        {apartments.map((apartment, index) => {
          return (
            <Grid item xs="12" md="3">
              <ApartmentCard key={index} apartment={apartment}/>
            </Grid>
          )
        })}
      </Grid>
      <Container>
        <Pagination
          sx={{mt: 2}}
          count={10}
          variant="outlined"
          color="primary"
        />
      </Container>

    </MainLayout>

  )
}

export default App;
