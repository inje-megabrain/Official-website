import type { NextPage } from "next";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <h1>회원 소개</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>문상원 | 2018</Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                팀장
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
                                기획담당
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
                                교육담당
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>최진서 | 2018</Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                사무담당
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;