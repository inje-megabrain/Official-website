import type { NextPage } from "next";
import { Card, Grid, Row, Text, Link } from "@nextui-org/react";
import { memberList } from "../src/memberList";

const Member = () => {
  return (
    <>
      <Text h3 css={{ m: 15, fontSize: 25 }}>
        회원 소개
      </Text>
      <Grid.Container gap={2} justify="flex-start" css={{ mb: 20 }}>
        {memberList.map((item, index) => (
          <Grid xs={6} md={3} key={index}>
            <Card isPressable isHoverable variant="bordered">
              <Card.Body>
                <Text>
                  {item.name} {item.year}
                </Text>
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
