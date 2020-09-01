import React from 'react';
import {
    Grid,
    Container,
    Typography
} from "@material-ui/core";
import { BarStyles } from "../utils/styles";

const HeaderComponent = () => {
    const styles = BarStyles();

    return (
        <Grid container className={styles.root}>
            <Grid item xs={12}>
                <Container>
                    <Typography className={styles.h1} component="h1" variant="h4" align="center">
                        URL Micro - Generate Shortened URLs in Seconds
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
};

export default HeaderComponent;