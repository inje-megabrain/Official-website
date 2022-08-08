import type { NextPage } from "next";
import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  ListItemIcon,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Container, Text, Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Spacer y={1} />
        <Text h2>지원하기</Text>
        <Paper>
          <List>
            <ListItemButton href="#" disabled={true}>
              <ListItemText
                primary="2022년 2학기 준회원 및 정회원"
                secondary=" 2022년 2학기 초 예정"
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
      </Container>
    </>
  );
};

export default Home;
