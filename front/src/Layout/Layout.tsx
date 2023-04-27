import {AppBar, Container, Grid, Typography} from "@mui/material";
import FormPrompt from "../Component/FormPrompt";
import Answer from "../Component/Answer";
import {useEffect} from "react";
import axios from "axios";


export const Layout: React.FC<{}> = props => {

    const test = () => {axios.post("http://localhost:8000/api/chat", {userInteraction: "Fait moi un plan nutrition pour un sportif"}).then(res => console.log(res.data))}
    useEffect(() => {
        test()
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
