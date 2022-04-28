import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

const ApartmentCard = (props) => {
  const {apartment} = props
  const {img, name, price} = apartment
  return (
    <Grid item xs="12" md="3">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image= {img}
          alt=" "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ApartmentCard