import MainLayout from '../../../components/layouts/Main';
import ApartmentDetail from '../../../components/apartments/Detail';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const API_URL = "/api"



const ApartmentPage = () => {
  const [apartment, setApartment] = useState(null)
  const router = useRouter()
  const {id} = router.query
  useEffect(() => {
    if (!id) {
      return
    }
    fetch(`${API_URL}/apartments/${id}`)
      .then(res => res.json())
      .then(data => {
        setApartment(data.item)
      })
  }, [id])
  return (
    <MainLayout>
      {!!apartment &&<ApartmentDetail apartment={apartment}/>}
    </MainLayout>
  )
}

export default ApartmentPage