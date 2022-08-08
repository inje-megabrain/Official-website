import type { NextPage } from "next";
import { Card, Grid, Row, Text, Link } from "@nextui-org/react";

const List = [
  {
    name: "문상원",
    position: "Backend Engineer",
    github: "https://github.com/MoonSangWon",
    detail: "",
  },
  {
    name: "박영건",
    position: "Frontend Engineer",
    github: "https://github.com/jadru",
    detail: "",
  },
  {
    name: "박성훈",
    position: "Backend Engineer",
    github: "https://github.com/Hoon9901",
    detail: "",
  },
  {
    name: "최진서",
    position: "Frontend Engineer",
    github: "https://github.com/Dark-jin",
    detail: "",
  },
  {
    name: "신종웅",
    position: "Frontend Engineer",
    github: "https://github.com/ShinJongUng",
    detail: "",
  },
  {
    name: "성병석",
    position: "Backend Engineer",
    github: "https://github.com/sbs1621",
    detail: "",
  },
  {
    name: "문준호",
    position: "Backend Engineer",
    github: "https://github.com/mjh000526",
    detail: "",
  },
  {
    name: "김예린",
    position: "Frontend Engineer",
    github: "https://github.com/yealinliz0516",
    detail: "",
  },
  {
    name: "임채성",
    position: "Backend Engineer",
    github: "https://github.com/puleugo",
    detail: "",
  },
];
const Member = () => {
  return (
    <>
      <Text h3 css={{ m: 15, fontSize: 25 }}>
        회원 소개
      </Text>
      <Grid.Container gap={2} justify="flex-start" css={{ mb: 20}}>
        {List.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable isHoverable variant="bordered">
              <Card.Body>
                <Text>{item.name}</Text>
              </Card.Body>
              <Card.Footer>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.position}</Text>
                  <Link
                    href={item.github}
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    Github
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Member;
