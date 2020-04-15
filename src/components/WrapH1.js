import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const WrapH1 = ({children}) => (
    <Container maxWidth='sm'>
        <Grid
            container
            justify="center"
        >
            {children}
        </Grid>
    </Container>
);

export default WrapH1;
