import type { NextPage } from "next";
import {Typography, Button} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <h1>2022년 1학기 메가브레인 재학생 정회원 모집</h1>
            <Typography variant="body1">
                대상 : 2022년 기준 컴퓨터공학과(부) 1학년 2학기 ~ 3학년 2학기 재학생 (복수전공 포함)<br />
                기간 : 2022년 2월 8일(화) ~ 2022년 2월 18일(금)<br />
                형태 : 정회원<br />
            </Typography>
            <br />
            <Button variant="contained" disableElevation href="/apply/2022-1" size="large">
                지원하기
            </Button>
        </>
    );
};

export default Home;