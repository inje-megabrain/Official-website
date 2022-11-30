import { Text } from "@nextui-org/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import bgImg from "../../public/images/megacon-22-bg.webp";
import TossLogo from "../../public/images/toss-logo.webp";
import { Sessions } from "../../src/Sessions";
import Emoji from "a11y-react-emoji";

const Con2022: NextPage = () => {
  return (
    <>
      <NextSeo
        title="MEGACON 2022"
        description="Developer Conference by Megabrain"
        openGraph={{
          type: "website",
          url: "https://megabrain.kr/con-2022",
          title: "MEGACON 2022",
          description: "Developer Conference by Megabrain",
          images: [
            {
              url: "/images/megacon-22-thumbnail.png",
              width: 1200,
              height: 600,
            },
          ],
        }}
        additionalMetaTags={[{ name: "theme-color", content: "#000000" }]}
      />
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImg.src})`,
          color: "white",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          padding: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            paddingTop: 150,
            paddingBottom: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="md:h-[100vh] sm:h-[60vh]"
        >
          <div>
            <Text
              className="fadein text-5xl md:text-7xl sm:text-5xl"
              h1
              css={{
                textGradient: "45deg, $blue600 -20%, $red600 70%",
                textAlign: "center",
              }}
              weight="bold"
            >
              MEGACON 2022
            </Text>
            <Text
              h2
              className="fadein text-5xl md:text-8xl sm:text-5xl"
              css={{
                textGradient: "45deg, $purple600 -20%, $blue600 80%",
                my: 70,
                textAlign: "center",
                lineHeight: "0.9em",
              }}
              weight="bold"
            >
              No efforts,
              <br />
              No Success.
            </Text>
            <Text
              weight="bold"
              className="fadein text-white text-center text-3xl font-light"
            >
              A DEVELOPER CONFERENCE BY MEGABRAIN
            </Text>
            <p className="fadein text-white text-center md:text-2xl mt-7 font-bold sm:text-md">
              Sponsored by{" "}
              <img src={TossLogo.src} className="w-16 h-16 inline" /> TOSS
            </p>
          </div>
        </div>
        <div className="bg-black md:h-[60vh] sm:h-[40vh] text-center py-40 flex flex-col items-center justify-center">
          <div className="text-center items-center justify-center flex flex-col">
            <Text className="text-white text-2xl md:text-4xl sm:text-2xl mb-4">
              메가브레인에서 오프라인 컨퍼런스를 개최합니다.
            </Text>
            <Text className="text-white text-2xl md:text-4xl sm:text-2xl mb-4">
              다양한 기술과 서비스를 만들며 겪은 성장 경험을
            </Text>
            <Text className="text-white text-2xl md:text-4xl sm:text-2xl mb-6">
              함께 나누고 배우고 성장해요.
            </Text>
            <hr className="bg-white w-40 h-1" />
            <Text className="text-white text-2xl md:text-4xl sm:text-2xl mt-6">
              2022년 12월 2일(금) PM6:00
            </Text>
            <Text className="text-white text-2xl md:text-4xl sm:text-2xl mt-4">
              인제대학교 E동 대강당
            </Text>
          </div>
        </div>
        <div className="bg-black md:min-h-[60vh] sm:min-h-[40vh] text-center py-10 flex flex-col items-center justify-center w-full">
          <Text className="text-white text-5xl mb-4 font-light text-center w-full">
            Sessions
          </Text>
          <hr className="bg-white w-40 h-1 mb-10" />
          <div className="grid grid-cols-2 gap-3 p-5">
            {Sessions.map((session, index) =>
              session.type !== "break" ? (
                <div
                  className="w-full flex flex-row items-center justify-between text-start bg-gray-800 rounded-2xl py-6 px-6 mt-2 sm:col-span-1 col-span-2 border-2 hover:border-white border-black space-x-2"
                  key={session.title}
                >
                  <div>
                    <p className="text-2xl font-bold">
                      {index + 1}. {session.title}
                    </p>
                    <a href={session.link} target="_blank" rel="noreferrer">
                      <Text
                        className="font-light text-2xl"
                        css={{
                          textGradient: "45deg, $yellow500 -20%, $red600 70%",
                        }}
                      >
                        {session.type}
                      </Text>
                      <p className="font-normal text-xl">
                        {session.name}, {session.info}
                      </p>
                    </a>
                  </div>
                  <Emoji
                    className="text-6xl"
                    symbol={
                      (session.type === "Frontend" && "🌏") ||
                      (session.type === "Backend" && "🚀") ||
                      (session.type === "Keynote" && "🎲") ||
                      (session.type === "AI" && "🧠") ||
                      (session.type === "IoT" && "💫") ||
                      "🎯"
                    }
                  />
                </div>
              ) : (
                <div
                  className="w-full text-start rounded-2xl py-6 px-8 mt-2 flex justify-center col-span-2"
                  key={session.title}
                >
                  <p className="text-2xl"> Break time </p>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="bg-black py-20">
          <Link href="/">
            <p className="bg-black text-white text-center text-xl">
              Copyright ⓒ 2022 by <b>Megabrain.</b>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Con2022;
