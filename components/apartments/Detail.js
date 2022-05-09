import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardHeader, Grid, Button} from '@mui/material';
import DatePickers from '../inputs/DatePicker';






const ApartmentDetail = (props) => {
  const router = useRouter()
  const {apartment} = props
  const {img, name, price} = apartment
  return (

    <Card>
      <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        image={img}
        alt=" "
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
              sx={{mb: 2}}
            >
              $ {price}
            </Typography>
            <DatePickers/>
            <Button
              variant="outlined"
              sx={{mt: 2, ml: 20}} //todo кривое позиционирование

            >Забронировать</Button>
          </Grid>

        </Grid>
      </CardContent>


    </Card>

  )
}

export default ApartmentDetail