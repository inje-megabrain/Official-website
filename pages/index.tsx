import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Card,
  Image,
  Row,
  Col,
  Grid,
  Link,
} from "@nextui-org/react";
import Member from "./member";
import tossImg from "../public/images/project/toss.png";
import { useRouter } from "next/router";

const Main: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <Text
          h1
          size={50}
          color="primary"
          css={{
            mx: 40,
            mt: 40,
            mb: 10,
          }}
          weight="bold"
        >
          개발자의 지속 가능한 성장을 위한 동아리, 메가브레인.
        </Text>
        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            mx: 40,
            mb: 40,
          }}
          weight="bold"
        >
          SLASH 2022 토스 후원 스터디 그룹
        </Text>
        {/* <Link
          href="https://recruit.megabrain.kr"
          css={{ width: "100%", textAlign: "center" }}
        >
          <Button
            color="default"
            bordered
            auto
            css={{
              width: "100%",
              textAlign: "center",
              p: 30
            }}
          >
            <Text
              css={{ color: "inherit" }}
              size={22}
              weight="bold"
              transform="uppercase"
            >
              회원 모집 공고
            </Text>
          </Button>
          </Link> */}
      </div>
      <div
        style={{
          background: "black",
          paddingTop: 80,
          paddingBottom: 80,
          textAlign: "center",
          marginBottom: 20,
          width: "100%",
          marginLeft: 0,
          marginTop: 0,
        }}
      >
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $blue600 -20%, $red600 70%",
            mb: 40,
          }}
          weight="bold"
        >
          MEGACON 2022
        </Text>
        <Text
          h1
          size={50}
          css={{
            textGradient: "45deg, $purple600 -20%, $blue600 80%",
            mb: 40,
          }}
          weight="bold"
        >
          No efforts,
          <br />
          No Success.
        </Text>
        <Link href="/con-2022" css={{ textAlign: "center", display: "inline" }}>
          <Button
            shadow
            color="gradient"
            css={{
              display: "inline",
              px: 30,
              height: 70,
              "&:hover": {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            <Text
              css={{ color: "white" }}
              size={22}
              weight="bold"
              transform="uppercase"
            >
              더 알아보기
            </Text>
          </Button>
        </Link>
      </div>
      <Container gap={1}>
        <Row>
          <Grid.Container gap={2} justify="center">
            <Grid sm={12} md={6}>
              <Card variant="bordered">
                <Card.Header>
                  <Text b>메가브레인</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Text h6 size={15} css={{ m: 0 }}>
                    좋은 경험과 습관을 가진 지속 가능한 개발자 양성을 목표로
                    여러 선배들이 모여 만들어낸 웹 개발 중심의 인제대학교
                    컴퓨터공학과의 학술 동아리입니다.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid sm={12} md={6}>
              <Card variant="bordered">
                <Card.Header>
                  <Text b>열정 가득한 분위기</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Text h6 size={15} css={{ m: 0 }}>
                    누구에게나 열려 있는 기회, 그러나 강도 높은 주도적인 문제
                    해결의 경험을 제공합니다. 세상이 빠르게 변하는 만큼
                    메가브레인은 매년 새로운 시도들로 새로운 가능성을 찾습니다.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid sm={12} md={4}>
              <Card css={{ $$cardColor: "$colors$primary" }}>
                <Card.Header>
                  <Text b color="white">
                    프로젝트
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    팀 프로젝트를 진행합니다. 혼자 하지 못하는 웹 개발을 팀
                    내부에서 각자의 아이디어를 기획하고 회의하여 백엔드 및
                    프론트엔드가 협업하는 프로젝트를 진행합니다.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    flat
                    auto
                    as="a"
                    href="https://github.com/inje-megabrain"
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={12} md={4}>
              <Card css={{ $$cardColor: "$colors$primary" }}>
                <Card.Header>
                  <Text b color="white">
                    그룹 스터디
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    백엔드와 프론트엔드 각자의 파트에서 자체적인 스터디 그룹을
                    형성합니다. 학교에서 경험하지 못하는 웹 개발 전문 지식을
                    함께 나누며 성장합니다.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    flat
                    auto
                    as="a"
                    href="https://github.com/inje-megabrain/mega_power"
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      커리큘럼 Repo.
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={12} md={4}>
              <Card css={{ $$cardColor: "$colors$primary" }}>
                <Card.Header>
                  <Text b color="white">
                    소프트 스킬 중심
                  </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    문제 해결의 과정을 통해 끊임없이 변화하고 혁신하며 건강하게
                    성장하고자 하는 사람을 위한 커뮤니티입니다. 빠르고 잦은 문제
                    해결의 경험을 통해 숨겨진 가능성에 도전하며, 부쩍 성장한
                    자신을 발견할 수 있습니다.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    flat
                    auto
                    as="a"
                    href="https://recruit.megabrain.kr"
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      지원하기
                    </Text>
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Row>
        <Member />
        <Spacer y={1} />
      </Container>
    </>
  );
};

export default Main;
