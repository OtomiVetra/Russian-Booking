import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme} from '@mui/material';
import SignUp from '../forms/SignUp';
import SignIn from '../forms/SignIn';
const ButtonAppBar = () => {

  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(null)
  const handleClickOpen = (openType= 'signIn') => {
    setOpen(true)
    setType(openType)
  }
  const handleClose = () => {
    setOpen(false)
    setType(null)
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Russia booking
          </Typography>
          <Button color="inherit" onClick={e =>handleClickOpen('signIn')}>Login</Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby="registration">
            {type === 'signUp' && (
              <>
                <DialogTitle id="registration">Registration</DialogTitle>
                <DialogContent>
                  <SignUp
                    openSignIn = {e => {
                      e.preventDefault()
                      setType('signIn')
                    }}
                  />

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color={'primary'}>Cancel</Button>
                  <Button onClick={handleClose} color={'primary'}>Register</Button>
                </DialogActions>
              </>
            )}

            {type === 'signIn' && (
              <>
                <DialogTitle id="registration">Log in</DialogTitle>
                <DialogContent>
                  <SignIn
                    openSignUp = {e => {
                      e.preventDefault()
                      setType('signUp')
                    }}
                  />

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color={'primary'}>Cancel</Button>
                  <Button onClick={handleClose} color={'primary'}>Log in</Button>
                </DialogActions>
              </>
            )}

          </Dialog>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar