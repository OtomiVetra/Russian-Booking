import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';

const ApartmentCard = (props) => {
  const router = useRouter()
  const {apartment, id} = props
  const {img, name, price} = apartment
  return (

      <Card sx={{ maxWidth: 345 }} onClick={() => {
        router.push(`/apartments/${id}`)
      }}
        sx={{cursor: "pointer"}}
      >
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

      </Card>

  )
}

export default ApartmentCard