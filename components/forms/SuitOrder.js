
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, FormLabel, RadioGroup, Radio, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import PaidIcon from '@mui/icons-material/Paid';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


export default function SignUp({ openSignIn }) {
  const theme = useTheme()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (

    <Container component="main"
    // maxWidth="xs" sx={{width: "500px"}}
    >

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <Typography
          color={theme.palette.secondary.main} //todo непонятки с цветом
          component="h1"
          variant="h4"
          sx={{ marginBottom: "24px" }}
        >
          Запрос на бронирование
        </Typography>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"
            sx={{ fontSize: "24px" }}
          >Варианты оплаты</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ display: "flex", width: "500px" }}
          >

            <Box
              sx={{ border: "2px solid grey", borderRadius: "14px 14px 0 0", borderBottom: 'none' }}
            >
              <FormControlLabel sx={{ height: "60px", display: "flex", ml: 1 }}
                value="female" control={<Radio />} label="Оплатите полностью" />
              <Typography
                sx={{ ml: 2, opacity: "0.7" }}
              >Заплатите сумму полностью и сфокусируйтесь на поездке.</Typography>
            </Box>
            <Box
              sx={{ border: "2px solid grey", borderRadius: "0 0 14px 14px" }}
            >
              <FormControlLabel sx={{ height: "60px", display: "flex", ml: 1 }}
                value="male" control={<Radio />} label="Оплатите часть сейчас, а остаток внесите позже" />
              <Typography
                sx={{ ml: 2, opacity: "0.7" }}

              >Внесите $1 720,00 сейчас, а остаток ($1 770,00) автоматически спишется с того же способа оплаты 1 июн. 2022 г.. Без дополнительных сборов..</Typography>
            </Box>

          </RadioGroup>
        </FormControl>


        <Box className="payHeader"
          sx={{ marginTop: "24px", width: "500px" }}
        >
          <Typography
            className="payItem"
            component="h1"
            variant="h6"
            textAlign="left"
          >
            Оплатить с помощью
          </Typography>

          <PaidIcon
            sx={{ marginTop: "4px" }}
          />

        </Box>





        <Box component="form" noValidate

          // onSubmit={handleSubmit}

          onSubmit={handleSubmit(onSubmit)}

          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="number"
                autoComplete="given-name"
                name="cardNumber"
                required
                fullWidth
                id="cardNumber"
                label="Номер Карты"
                //autoFocus
                {...register("cardNumber", {
                  required: "Поле должно быть заполнено!",
                  minLength: {
                    value: 16,
                    message: "проверьте номер карты"
                  }
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="month"
                required
                fullWidth
                id="date"
                name="date"
                autoComplete="date"
                {...register("date", {
                  required: "Надо заполнить!",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                required
                fullWidth
                id="cvv"
                label="CVV"
                name="cvv"
                autoComplete="cvv"
                {...register("cvv", {
                  required: "Поле должно быть заполнено!",
                  maxLength: {
                    value: 4,
                    message: "Максимум 4 символа"
                  }
                })}
              />
            </Grid>
            <div className="error" style={{ height: 20 }}>
              {errors?.cardNumber && <p>{errors?.cardNumber?.message || "Error!"}</p>}
              {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
              {errors?.cvv && <p>{errors?.cvv?.message || "Error!"}</p>}
            </div>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: "Надо заполнить!",
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Ведите электронную почту"
                  }
                })}
              />
              <div className="error" style={{ height: 20 }}>
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password", {
                  required: "Надо заполнить!",
                  pattern: {
                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
                    message: "Минимум 6 символов, Латиница и цифры"
                  }
                })}
              />
              <div sx={{ color: 'red' }} className="error" style={{ height: 20 }}>
                {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
              </div>
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*  <FormControlLabel*/}
            {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
            {/*    label="Я хочу получать новостные рассылки на электронную почту."*/}
            {/*  />*/}
            {/*</Grid>*/}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isValid}
          >
            Sign Up
          </Button>

        </Box>
      </Box>
      {/*<Copyright sx={{ mt: 5 }} />*/}
    </Container>
  );
}
