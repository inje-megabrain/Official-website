import type { NextPage } from "next";
import {List, ListItem, ListItemText, Paper} from "@mui/material";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <h1>커리큘럼</h1>
            <Paper variant="outlined" className={styles.rows}>
                <h3>메가브레인은 전공 지식뿐만 아니라 소프트 스킬도 중요하게 생각하고 있습니다.<br />
                    그래서 풀스택 과정 뿐만 아니라, 말하기와 글쓰기를 같이 진행합니다.</h3>
                <h2>2022년 2학기 웹 풀스택 과정</h2>
                <h3>대상 : 준회원</h3>
                <List>
                    <h3>0. 온보딩 🛬</h3>
                    <ListItem><ListItemText primary="- 풀스택 과정에서 다루는 주제에 대해 이해도를 높이고 소프트스킬을 증진하기 위한 활동"/></ListItem>
                    <h3>1. 프로그래밍 기본 💻</h3>
                    <ListItem><ListItemText primary="- 프론트엔드, 백엔드의 기본이 되는 HTML, CSS, JavaScript, Java에 대한 기본 문법을 익혀 프로그래밍을 합니다"/></ListItem>
                    <ListItem><ListItemText primary="- 구현한 코드에 대해 E2E 테스트를 작성하고, 읽기 좋은 코드로 리팩터링합니다."/></ListItem>
                    <h3>2. 웹 프로그래밍 🛠</h3>
                    <ListItem><ListItemText primary="- 스프링 프레임워크 기반으로 웹 애플리케이션을 개발하는 경험을 합니다."/></ListItem>
                    <ListItem><ListItemText primary="- React 기반의 프론트엔드 웹 애플리케이션을 제작합니다."/></ListItem>
                    <ListItem><ListItemText primary="- 프론트엔드 웹 애플리케이션에서 고려해야할 테스트 범위와 종류에 대해 학습합니다"/></ListItem>
                    <ListItem><ListItemText primary="- 데이터베이스 설계하는 경험을 합니다 (MySQL, DBMS CRUD-)"/></ListItem>
                    <h3>3. 팀 프로젝트 🤝</h3>
                    <ListItem><ListItemText primary="- 개발 프로세스 기반으로 프로젝트를 진행, 협업하는 경험을 합니다"/></ListItem>
                    <ListItem><ListItemText primary="- 서비스를 기획, 구현, 배포해 실 사용자가 사용하도록 개발하는 경험을 합니다"/></ListItem>
                </List>
            </Paper>
        </>
    );
};

export default Home;