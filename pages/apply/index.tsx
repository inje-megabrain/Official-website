import type { NextPage } from "next";
import {List, ListItemButton, ListItemText, Paper} from "@mui/material";
import styles from "../../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <h1>지원하기</h1>
            <Paper variant="outlined" square className={styles.rows}>
                <h2>메가브레인에 들어오시면 얻을 수 있습니다.</h2>
                <h3>👥 개발 커뮤니티 </h3>
                <h3>🖥 동아리방 (E105) 개인 자리 셋업</h3>
                <h3>📚 최신 개발 진로 커리큘럼</h3>
                <h3>📝 개인 개발용 서브 도메인</h3>
            </Paper>
            <Paper variant="outlined" >
            <List>
                <ListItemButton component="a" href="/apply/2022-1">
                    <ListItemText
                        primary="2022년 1학기 재학생 정회원"
                        secondary=" 2022년 2월 16일(수) ~ 2022년 2월 25일(금)"
                    />
                </ListItemButton>
                <ListItemButton href="#">
                    <ListItemText
                        primary="2022년 1학기 신입생 준회원"
                        secondary=" 2022년 3월 중"
                    />
                </ListItemButton>
            </List>
            </Paper>
        </>
    );
};

export default Home;