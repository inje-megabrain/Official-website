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
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 팀장</Typography>
                            <Typography variant="h5" component="div">
                                문상원
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 기획담당</Typography>
                            <Typography variant="h5" component="div">
                                박영건
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 기술담당</Typography>
                            <Typography variant="h5" component="div">
                                박성훈
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 인사담당</Typography>
                            <Typography variant="h5" component="div">
                                최진서
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2021, 정회원</Typography>
                            <Typography variant="h5" component="div">
                                신종웅
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 정회원</Typography>
                            <Typography variant="h5" component="div">
                                성병석
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>2018, 정회원</Typography>
                            <Typography variant="h5" component="div">
                                최원석
                            </Typography>
                            <Typography variant="body2">

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;