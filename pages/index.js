import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "/public/dev-ed-wave.png";
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">개인포트폴리오</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://fi-lime.vercel.app/"
                >
                  팀플
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              하승범
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              91813248
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
             
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">자기소개</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              안녕하십니까 중부대학교 18학번 정보보호학전공 하승범입니다.
              <span className="text-teal-500"> 모의해킹 </span>
              과 <span className="text-teal-500">엔지니어링 </span>
              두 분야를 공부하고 있습니다.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              간단하게 저의 소개를 하자면 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                취미
              </h3>
              <p className="py-2">
                취미라고 잘하는건 아닙니다
              </p>
              <h4 className="py-4 text-teal-600">저의 취미는</h4>
              <p className="text-gray-800 py-1">게임</p>
              <p className="text-gray-800 py-1">보컬 작사</p>
              <p className="text-gray-800 py-1">운동(목표)</p>
              <p className="text-gray-800 py-1">입니다.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                사용해본 프로그램
              </h3>
              <p className="py-2">
                마스터했다는 개념은 아니지만 어느정도 숙련도가 있고 한떄 사용했던 것들도 있습니다
              </p>
              <h4 className="py-4 text-teal-600">재가 사용했던것들은</h4>
              <p className="text-gray-800 py-1">베가스(영상편집)</p>
              <p className="text-gray-800 py-1">큐베이스(작곡작사)</p>
              <p className="text-gray-800 py-1">안드로이드슈튜디오</p>
              <p className="text-gray-800 py-1">칼리 리눅스</p>
              <p className="text-gray-800 py-1">유니티</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">잘하는 것</h3>
              <p className="py-2">
                네.. 재가 생각했을때 잘하는 게 아니라 들었던것들입니다.
              </p>
              <h4 className="py-4 text-teal-600">(제3자가 봤을떄)</h4>
              <p className="text-gray-800 py-1">영상 편집</p>
              <p className="text-gray-800 py-1">(아프리카 편집자 시절)</p>
              <p className="text-gray-800 py-1">FPS게임</p>
              <p className="text-gray-800 py-1">분석</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">포트폴리오</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              밑에 이미지들은 재가 살아오면서 해왔던 프로그램들
              <span className="text-teal-500"> android studio </span>
              , <span className="text-teal-500"> unity</span>
            를 가지고 만들었던 것들과 
            모의 해킹을 공부하고있기에 사용하는 칼리 리눅스입니다.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              안드로이드 스튜디오를 이용한 앱개발, mp3 플레이어 개발, 칼리 리눅스, 유니티를 이용한 미니 게임 개발 
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
