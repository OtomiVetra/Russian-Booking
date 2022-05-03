import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardHeader, Grid} from '@mui/material';






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
            <Typography variant="body2" color="text.secondary">
              $ {price}
            </Typography>
          </Grid>

        </Grid>
      </CardContent>

    </Card>

  )
}

export default ApartmentDetail