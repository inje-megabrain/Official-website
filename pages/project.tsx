import type { NextPage } from "next";
import { Grid, Card, CardMedia, CardActions, CardContent, Typography, Button} from '@mui/material';
const Home: NextPage = () => {
    return (
        <>
            <h1>프로젝트</h1>
            <Grid container spacing={1}>
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/images/project/thumbnail03.png"
                            alt="thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                사이렌오더
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                frontend :
                                Yarn 1.22.17
                                React 17.0.2
                                Recoil 0.6.1
                                Axios 0.25.0
                                Grommet 2.20.1
                                JWT-decide 3.1.2
                                styled-components 5.3.3<br /><br/>

                                backend
                                Spring Boot 2.6.2
                                Spring Validation
                                Spring Data JPA
                                JJWT 0.11.2
                                Log4j2
                                Swagger2
                                Lombok
                                PostgreSQL
                                WebHook<br /><br />
                                frontend : jadru, backend : shonn
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="https://github.com/inje-megabrain/SirenOrderToSbs">Repository</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/images/project/thumbnail02.png"
                            alt="thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                커뮤니티
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                frontend : HTML5, Vanilla JS<br />
                                backend : Django<br />
                                deployment : Heroku<br /><br />
                                shonn
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="https://hoon-mysite.herokuapp.com">Website</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/images/project/thumbnail01.png"
                            alt="thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                쇼핑몰
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                backend : Spring Boot, Spring JPA, Spring AOP, Spring Security, Thymeleaf, Lombok, H2<br /><br />
                                shonn
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="http://shonn.megabrain.kr:9998">Website</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;