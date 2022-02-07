import type { NextPage } from "next";
import styles from '../styles/Home.module.scss'
import { Paper, Card, CardContent, Typography, Grid, CardMedia} from '@mui/material';
import { MeetingRoomOutlined, GroupsOutlined, LocalFireDepartmentOutlined, TipsAndUpdatesOutlined } from '@mui/icons-material';

const Home: NextPage = () => {
    return (
        <>
            <h2>개발자의 지속 가능한 성장을 위한 학습 동아리, <u>메가브레인</u>입니다.</h2>
            <Typography variant="body1">메가브레인은 단순히 뛰어난 프로그래밍 스킬을 가진 사람이 아닌, 사람들과 끊임없이 커뮤니케이션하고 서로에게 배우고 공유하며 문제를 해결해가는 사람, 그렇게 더 큰 미래를 그리는 사람이 좋은 개발자이고 지속 가능한 개발자라고 생각합니다.<br /><br />
            좋은 경험과 습관을 가진 지속 가능한 개발자 양성을 목표로, 여러 선배들이 모여 만들어낸 소프트웨어 학술 동아리입니다. 누구에게나 열려 있는 기회, 그러나 강도 높은 주도적인 문제 해결의 경험을 제공합니다. 세상이 빠르게 변하는 만큼 메가브레인은 매년 새로운 시도들로 새로운 가능성을 찾습니다.
            </Typography>
            <Paper variant="outlined" square className={styles.rows}>
            <h2>우리가 추구하는 가치입니다</h2>
                <Grid container spacing={1}>
                    <Grid item xs={6} md={7}>
                        <Card>
                            <CardContent>
                                <MeetingRoomOutlined fontSize="large"/>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Open</Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography variant="body2">
                                    누구에게나 열린 기회를 제공합니다.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Card>
                            <CardContent>
                                <LocalFireDepartmentOutlined fontSize="large"/>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Growth</Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography variant="body2">
                                    끊임없이 성장하고자 하는 사람을 위한 커뮤니티입니다.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Card>
                            <CardContent>
                                <TipsAndUpdatesOutlined fontSize="large"/>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Passionate</Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography variant="body2">
                                    공부와 삶에 대한 열정이 가득한 사람이 모여 시너지를 만듭니다.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={7}>
                        <Card>
                            <CardContent>
                                <GroupsOutlined fontSize="large"/>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Excellent</Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography variant="body2">
                                    최고의 동료, 선배와 함께 최고의 결과로 이야기합니다.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
            <Paper variant="outlined" square className={styles.rows}>
                <h2>메가브레인은 성장하는 학생들을 위한 커뮤니티입니다</h2>
                <h3>Learning and Growth,
                    빠르고 잦은 문제 해결을 통한 성장의 경험을 제공합니다.</h3>
                <Typography variant="body1">
                    단순히 코딩 기술을 가르쳐주는 곳이 아니라 문제 해결의 과정을 통해 끊임없이 변화하고 혁신하며 건강하게 성장하고자 하는 사람을 위한 커뮤니티입니다.
                    일방적인 경쟁, 점수를 매기기 위한 평가가 아니라 어제의 나와 경쟁합니다. 빠르고 잦은 문제 해결의 경험을 통해 숨겨진 가능성에 도전하며, 부쩍 성장한 자신을 발견할 수 있습니다.
                </Typography>
                <h3>Learning by Doing
                    문제 해결에 필요한 지식과 기술을 스스로 찾아가는 훈련을 제공합니다.</h3>
                <Typography variant="body1">
                    최소한의 도움말을 가지고 문제를 해결하기 위한 지식과 스킬을 주도적으로 찾아가는 습관은 개발자에게 매우 필요한 역량입니다. Learning by teaching이 아닌 Learning by doing에 근거하여 미션과 프로젝트가 배움의 전반을 이끌어 갑니다.
                    일방향적인 지식의 전달에서 벗어나, 스스로 고민하고 문제를 해결하는 것에 익숙해지는 훈련의 과정을 제공합니다.
                </Typography>
                <h3>Collaborative Learning,
                    최고의 동료와 함께 문제를 해결하고 학습할 수 있는 환경을 제공합니다.</h3>
                <Typography variant="body1">
                    혼자서만 빠르게 학습하는 것이 아닌, 최고의 동료와 함께 소통하고, 더불어 공유하고, 같이 성장하는 학습 환경과 프로그램을 제공합니다.
                    동료의 프로젝트를 빠른 시간에 이해하고, 나의 해결 방식과 비교하며 피드백을 경청하는 과정. 단순히 코딩 스킬 이상의 것을 배워갈 수 있습니다.
                </Typography>
            </Paper>
            <Paper variant="outlined" square className={styles.rows}>
                <h2>메가브레인에 들어오시면 얻을 수 있습니다.</h2>
                <h3>👥 개발 커뮤니티 </h3>
                <h3>🖥 동아리방 개인 자리 셋업</h3>
                <h3>📚 최신 개발 진로 커리큘럼</h3>
            </Paper>
        </>
    );
};

export default Home;