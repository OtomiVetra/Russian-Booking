import MainLayout from '../../../components/layouts/Main';
import SuitOrder from '../../../components/forms/SuitOrder';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import SuitCard from '../../../components/suites/Card';
import { useDataContext } from '../../../components/context/Data';
import DatePickers from '../../../components/inputs/DatePicker';
import { formatDate, getDiffDates } from '../../../components/helpers/date'
import OrderInfo from '../../../components/orders/Info';




const SuitPage = () => {
  const { suit, loadSuit } = useDataContext()
  const [info, setInfo] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const onDatesChange = ({ startDate, endDate }) => {
    console.log(formatDate(startDate), formatDate(endDate))
    console.log(getDiffDates(startDate, endDate))
    console.log(suit.rentPrices[0].price)
    const days = getDiffDates(startDate, endDate)
    setInfo({
      start: formatDate(startDate),
      endDate: formatDate(endDate),
      days: days,
      totalPrice: (days * suit.rentPrices[0].price)
    })
  }
  const handleBook = () => {
    alert(`Suit has been ordered! price: ${info.totalPrice}`)
  }
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
            {!!suit && <SuitOrder suit={suit} />}
          </Grid>
          <Grid item xs={12} sm={6}
            display="flex"
            flexDirection="column"

            alignItems="center"
          >
            {!!suit && <SuitCard suit={suit}
            />}
            {!!suit && <DatePickers
              onDatesChange={onDatesChange} />}
            {!!info?.totalPrice && <OrderInfo info={info} />}
            <Button
              onClick={handleBook}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='primary'
              disabled={!info?.totalPrice}
            >
              Book
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default SuitPage