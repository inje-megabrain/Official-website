import type { NextPage } from "next";
import {List, ListItemButton, ListItemText, Paper} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <h1>지원하기</h1>
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