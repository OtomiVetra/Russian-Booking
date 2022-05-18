import MainLayout from '../../../components/layouts/Main';
import SuitOrder from '../../../components/forms/SuitOrder';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {Container, Grid} from '@mui/material';
import SuitCard from '../../../components/suites/Card';
import {useDataContext} from '../../../components/context/Data';




const SuitPage = () => {
  const {suit, loadSuit} = useDataContext()
  const router = useRouter()
  const {id} = router.query
  useEffect(() => {
    if (!id) {
      return
    }
    loadSuit(id)
  }, [id])
  return (
    <MainLayout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {!!suit &&<SuitOrder suit={suit}/>}
          </Grid>
          <Grid item xs={12} sm={6}>
            {!!suit &&<SuitCard suit={suit}/>}
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default SuitPage