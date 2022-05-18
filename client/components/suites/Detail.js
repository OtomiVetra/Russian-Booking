import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, Button } from '@mui/material';
import DatePickers from '../inputs/DatePicker';
import { useDataContext } from '../context/Data';






const SuitDetail = () => {
  const router = useRouter()
  const { suit } = useDataContext()
  const { details: { description, area, pictures }, rentPrices, _id } = suit
  return (

    <Card>
      <CardHeader
        title={description}
      />
      <CardMedia
        component="img"
        image={pictures[0].url}
        alt={pictures[0].url}
      />
      <CardContent>
        <Grid container spacing={4}>
          <Grid
            item
            md={6}
          >
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae culpa ducimus numquam qui quibusdam quisquam quod reiciendis veritatis vitae.</Typography>
          </Grid>
          <Grid
            item
            md={6}
          >
            <Typography variant="body2" color="text.secondary"
              sx={{ mb: 2 }}
            >
              $ {rentPrices[0].price}
            </Typography>
            <DatePickers />
            <Button
              className="detailOrderButton"
              onClick={(event) => {
                event.preventDefault()
                router.push(`/suites/${suit._id}/order`)
              }}
              variant="outlined"

            >Забронировать</Button>
          </Grid>

        </Grid>
      </CardContent>


    </Card>

  )
}

export default SuitDetail