import type { NextPage } from "next";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <h1>회원 소개</h1>
            <h2>Operator</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>문상원 | 2018</Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                Leader
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>박영건 | 2018</Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                Assistant Leader
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>박성훈 | 2018</Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                Senior Research Engineer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <h2>Member</h2>
            <p>to be continued...</p>
        </>
    );
};

export default Home;