import apartments from "../../../data/apartments.json"
import MainLayout from '../../../components/layouts/Main';
import ApartmentDetail from '../../../components/apartments/Detail';

const ApartmentPage = () => {
  return (
    <MainLayout>
      <ApartmentDetail apartment={apartments[1]}/>
    </MainLayout>
  )
}

export default ApartmentPage