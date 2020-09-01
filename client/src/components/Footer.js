import React from 'react';
import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import { BarStyles } from "../utils/styles";

const FooterComponent = () => {
    const styles = BarStyles();

    return(
        <Grid container className={styles.root}>
            <Grid item xs={12}>
                <Container>
                    <Typography className={styles.h1} component="h3" variant="h6" align="center">
                        &copy; 2020 Kęstutis Jakseboga
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
};

export default FooterComponent;