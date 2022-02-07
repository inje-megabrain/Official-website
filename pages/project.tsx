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
                            image="/images/project/thumbnail02.png"
                            alt="thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                커뮤니티
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                기술 스택 : HTML5, Vanilla JS, Django, Heroku<br /><br />
                                개발 : shonn
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="https://hoon-mysite.herokuapp.com">더보기</Button>
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
                                기술 스택 : Spring Boot, Spring JPA, Spring AOP, Spring Security, Thymeleaf, Lombok, H2<br /><br />
                                개발 : shonn
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="http://shonn.megabrain.kr:9998">더보기</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;