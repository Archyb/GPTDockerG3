import {AppBar, Container, Grid, Typography} from "@mui/material";
import FormPrompt from "../Component/FormPrompt";
import Answer from "../Component/Answer";
import {useEffect} from "react";


export const Layout: React.FC<{}> = props => {


    useEffect(() => {
    }, [])

    return (
        <Container maxWidth={false}>
            <AppBar position={"sticky"} sx={{minWidth: 100}}><Typography variant={"h5"}>My Diet
                Programme</Typography></AppBar>


            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{mt: 4}}>
                    <Typography variant={"h6"}><FormPrompt/></Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{mt: 4}}>
                    <Typography variant={"h6"}><Answer/></Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Layout;
