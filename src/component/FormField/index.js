import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const FormField = ({ label, iconMui, id }) => {

    return(
          <Grid item>
            <TextField 
              id={id} 
              label={label}
              fullWidth={true}
            />
          </Grid>
    )
}

export default FormField