import {Container, Grid, Pagination} from '@mui/material';
import ApartmentCard from '../../components/apartments/Card';
import MainLayout from '../../components/layouts/Main';
import {useEffect, useState} from 'react';




const API_URL = "/api"

function App() {
  const [apartments, setApartments] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/apartments`)
      .then(res => res.json())
      .then(data => {
        setApartments(data.items)
      })
  }, [])
  return (


    <MainLayout>
      <Grid container spacing={4}>
        {apartments.map((apartment, index) => {
          return (
            <Grid item xs="12" md="3">
              <ApartmentCard id={index+1} key={index} apartment={apartment}/>
            </Grid>
          )
        })}
      </Grid>
      <Container>
        <Pagination
          sx={{mt: 2, mb: 2}}
          count={10}
          variant="outlined"
          color="primary"
        />

      </Container>
    </MainLayout>



  )
}

export default App;
