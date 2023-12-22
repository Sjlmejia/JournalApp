import { Link as RouterLink } from "react-router-dom"
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
          <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Nombre Completo"
              type="text"
              fullWidth
              placeholder="Ingrese su nombre"/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Correo"
              type="email"
              fullWidth
              placeholder="correo@google.com"/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Pasword"
              type="password"
              fullWidth
              placeholder="Password"/>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt:1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mt: 2, mb: 2 }}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink }  to="/auth/login"> 
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
