import {Container, Grid, Pagination} from '@mui/material';
import SuitCard from '../components/suites/Card';
import MainLayout from '../components/layouts/Main';
import {useEffect, useState} from 'react';
import {API_URL} from '../config';




function App() {
  const [suites, setSuites] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/suites`)
      .then(res => res.json())
      .then(data => {
        setSuites(data.items)
      })
  }, [])
  return (


    <MainLayout>
      <Grid container spacing={4}>
        {suites.map((suit, index) => {
          return (
            <Grid item xs="12" md="3">
              <SuitCard id={index+1} key={index} suit={suit}/>
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
