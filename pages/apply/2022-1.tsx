import type { NextPage } from "next";
import {Typography, Button} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <h1>2022년 1학기 신입생 준회원 모집</h1>
            <Typography variant="body1">
                대상 : 2022년 1학기 기준 컴퓨터공학과 1학년 신입생<br />
                기간 : 2022년 3월 4일(금) ~ 2022년 3월 11일(금)<br />
                형태 : 준회원<br />
                면접 : 2022년 3월 14일(월) ~ 2022년 3월 18일(금) 중
            </Typography>
            <br />
            <Button variant="contained" disableElevation href="https://notionforms.io/forms/2022-4" size="large">
                모집 지원서 작성하기
            </Button>
        </>
    );
};

export default Home;