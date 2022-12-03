import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";

const Footer = () => {
    const handleClick = () => {
        alert('Aguante la birra loco');
    }
    const handlePress = (e) => {
        if(e === 'ENTER') alert('apretaste enter wachin')
    }

    return (
      <>
        <Typography variant="h4" textAlign="center">
          Nuestras redes sociales
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <IconButton size="large" href='https://www.instagram.com' target='_blank' >
            <InstagramIcon />
          </IconButton>
          <IconButton size="large" onClick={handleClick}>
            <FacebookIcon />
          </IconButton>
        <TextField id="standard-basic" label="Que onda wachho" variant="standard" onKeyPress={(e)=>handlePress(e)} />
        </Stack>
      </>
    );
}
export default Footer;