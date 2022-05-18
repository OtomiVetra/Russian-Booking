import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';

const SuitCard = (props) => {
  const router = useRouter()
  const {suit} = props
  const {details:{description, area, pictures},rentPrices , id} = suit
  return (

      <Card sx={{ maxWidth: 345 }} onClick={() => {
        router.push(`/suites/${id}`)
      }}
        sx={{cursor: "pointer"}}
      >
        <CardMedia
          component="img"
          height="140"
          image= {pictures[0].url}
          alt= {pictures[0].description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {rentPrices[0].price}
          </Typography>
        </CardContent>

      </Card>

  )
}

export default SuitCard