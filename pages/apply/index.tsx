import type { NextPage } from "next";
import {List, ListItemButton, ListItemText, Paper, ListItemIcon} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";
import styles from "../../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <h1>지원하기</h1>
            <Paper variant="outlined" >
                <List>
                    <ListItemButton href="#" disabled={true}>
                        <ListItemText
                            primary="2022년 2학기 재학생 정회원"
                            secondary=" 2022년 9월 중"
                        />
                    </ListItemButton>
                    <ListItemButton component="a" href="#" disabled={true}>
                        <ListItemText
                            primary="2022년 1학기 신입생 준회원"
                            secondary=" 2022년 3월 4일(금) ~ 2022년 3월 11일(금)"
                        />
                    </ListItemButton>
                    <ListItemButton href="#" disabled={true}>
                        <ListItemText
                            primary="2022년 1학기 재학생 정회원"
                            secondary=" 2022년 2월 18일(금) ~ 2022년 2월 24일(목)"
                        />
                    </ListItemButton>
                </List>
            </Paper>
            <Paper variant="outlined" className={styles.rows}>
                <h2>메가브레인에 들어오시면 얻을 수 있습니다.</h2>
                <h3>👥 개발 커뮤니티 </h3>
                <h3>🖥 동아리방 (E105) 개인 자리 셋업</h3>
                <h3>📚 실무 대비 웹 풀스택 커리큘럼 (2022년 기준)</h3>
                <h3>📝 개인 개발용 서브 도메인</h3>
            </Paper>
        </>
    );
};

export default Home;