import React from "react";
import FormField from "../../component/FormField";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import useStyles from './styles'
import { Button, Grid, Typography } from "@material-ui/core";


const Login = () => {
    const classes = useStyles()

    return(
        <Grid container>
            <Grid
            className={classes.form}
            >
                <Grid
                >
                        <Grid
                        className={classes.textField}
                        >
                            <FormField 
                            iconMui={<AccountCircle />}
                            label={"Username"}
                            id={"username"}
                            />
                        </Grid>
                        <Grid
                        className={classes.textField}
                        >
                            <FormField 
                            iconMui={<LockIcon />}
                            label="Password"
                            id="password"
                            />
                        </Grid>
                </Grid>
                        <Grid
                        className={classes.button}
                        >
                        <Button 
                            variant="contained" 
                            color="primary"
                            fullWidth
                            >
                            Login
                        </Button>
                        </Grid>
           <Grid
           className={classes.marginTop}
           >
                <Typography
                align="center"
                >
                    Belum Mempunyai akun? Daftar disini
                </Typography>
            </Grid>
            </Grid>
        </Grid>
        
    )
}

export default Login