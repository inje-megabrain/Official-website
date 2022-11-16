import { Button, Container, Text } from "@nextui-org/react";
import { NextPage } from "next"
import Link from "next/link";
import bgImg from "../../public/images/megacon-22-bg.webp";
import { NextSeo } from 'next-seo';

const Con2022: NextPage = () => {
    return(
        <>
        <NextSeo
        title="MEGACON 2022"
        description="No efforts, No Success. Developer Conference by Megabrain"
        openGraph={{
            type: 'website',
            url: 'https://www.megabrain.kr',
            title: 'Megabrain',
            description: 'No efforts, No Success. Developer Conference by Megabrain',
            images: [
                {
                    url: '',
                    width: 800,
                    height: 400,
                },
            ],
        }}
    />
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImg.src})`, color: 'white', minHeight: '100vh' ,backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', padding: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
            <div style={{ paddingTop: 150, paddingBottom: 150, display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}} className="md:h-[100vh] sm:h-[60vh]">
            <div>
                <Text
                className="fadein text-5xl md:text-7xl sm:text-5xl"
                    h1
                    css={{
                    textGradient: "45deg, $blue600 -20%, $red600 70%",
                    textAlign: 'center'
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
          textAlign: 'center',
          lineHeight: '0.9em'
        }}
        weight="bold"
      >
        No efforts,<br/>
        No Success.
      </Text>
      <Text weight="bold" className="fadein text-white text-center text-2xl">A DEVELOPER CONFERENCE BY MEGABRAIN</Text>
      </div>
            </div>
            <div className="bg-black md:h-[60vh] sm:h-[40vh] text-center py-40 flex flex-col items-center justify-center">
                <div>
                <Text className="text-white text-2xl md:text-4xl sm:text-2xl">메가브레인에서 오프라인 컨퍼런스를 개최합니다.</Text>
                <Text className="text-white text-2xl md:text-4xl sm:text-2xl">다양한 기술과 서비스를 만들며 겪은 성장 경험을</Text>
                <Text className="text-white text-2xl md:text-4xl sm:text-2xl">함께 나누고 배우고 성장해요</Text>
                <Text className="text-white text-2xl md:text-4xl sm:text-2xl mt-4">2022년 12월 2일(금) PM6:00</Text>
                <Text className="text-white text-2xl md:text-4xl sm:text-2xl">인제대학교 E동 대강당</Text>
                </div>
            </div>
            <div className="bg-black md:h-[60vh] sm:h-[40vh] text-center py-40 flex flex-col items-center justify-center">
                <div className="text-center items-center flex flex-col">
                <Text className="text-white text-4xl mb-4 font-bold">Sessions</Text>
                <hr className="bg-white w-40 h-2"/>
                <Text className="text-3xl my-14 text-gray-300">준비중</Text>
                <Link  href={"https://ad21pifdjli.typeform.com/to/B3yfBTC5"} >
                    <button className="text-xl bg-slate-500 hover:bg-sky-700 py-3 px-6 rounded-xl">세션 발표 신청</button>
                </Link>
                <Text className="text-3xl text-gray-300 mt-8">프론트엔드, 백엔드, 보안, 인공지능 등</Text>
                <p className="text-gray-300 text-3xl mt-4">2022년 11월 16일 ~ 23일</p>
                </div>
            </div>
            <div className="bg-black py-7"><p className="bg-black text-white text-center text-xl">Copyright ⓒ 2022 by Megabrain.</p></div>
        </div>
        </>
    )
}

export default Con2022;
