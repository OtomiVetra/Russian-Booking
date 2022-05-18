import MainLayout from '../../../components/layouts/Main';
import SuitDetail from '../../../components/suites/Detail';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDataContext } from '../../../components/context/Data';





const SuitPage = () => {
  const { suit, loadSuit } = useDataContext()
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    if (!id) {
      return
    }
    loadSuit(id)
  }, [id])
  return (
    <MainLayout>
      {!!suit && <SuitDetail />}
    </MainLayout>
  )
}

export default SuitPage