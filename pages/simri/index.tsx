import Button from "@/components/simri/Button/Button";
import Header from "@/components/simri/Header/Header";
import ProcessList from "@/components/simri/ProcessList/ProcessList";
import Section from "@/components/simri/Section/Section";
import SectionHeader from "@/components/simri/Section/SectionHeader";
import Tag from "@/components/simri/Tag/Tag";
import Head from "next/head";
import style from "./index.module.scss";

const Page = () => {
  return (
    <div className={style.page_container}>
      <Head>
        <title>심리테스트는 22HOURS에게</title>
        <meta property="og:title" content="심리테스트 개발은 22HOURS에게" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/simri/og.png" />
      </Head>
      <div className={style.container}>
        {/* <Header /> */}
        <article className={style.article}>
          <Section className={style.section1}>
            <img
              className={style.banner_img}
              alt="simri_banner_img"
              src={"/img/simri/main_banner.jpg"}
            />
          </Section>

          <Section className={style.section2}>
            <div className={style.info}>
              <img
                className={style.info_img}
                alt="simri_logo"
                src={"/img/simri/logo.png"}
              />
              <div className={style.info_main}>
                <h1>심리 테스트 전문 제작사</h1>
                <p>
                  웹부터 앱 까지 고객님의 모든 플랫폼을 개발하는 전문 웹 개발사
                  22HOURS
                </p>
              </div>
            </div>

            <div className={style.main}>
              <p>심리테스트를 만들어야 하는 이유!</p>
              <p>1. 바이럴 마케팅을 통한 트래픽 유입을 꾀하는 전략적인 방법</p>
              <p>
                2. 단순한 광고를 벗어나 이제는 재미있고 참여를 유도하는 광고
              </p>
            </div>
            <div className={style.tags}>
              <Tag>바이럴 마케팅</Tag>
              <Tag>재미있고 효과적인 광고</Tag>
            </div>

            <div className={style.action}>
              <Button onClick={() => alert("준비 중 입니다")}>문의하기</Button>
            </div>
            <div className={style.bottom}>
              <p>아직 잘 모르겠다구요?</p>
              <p>아래로 내려서 더 많은 내용을 확인하세요</p>
            </div>
          </Section>
          <Section className={style.section3}>
            <SectionHeader
              question="작업은 어떻게 진행되나요?"
              head_list={["22HOURS는", "시작부터 끝까지 함께합니다"]}
            />
            <ProcessList
              process_list={[
                {
                  head: "1단계 : 문의하기",
                  body_list: [
                    "깊게 고민하지 마시고, 같이 고민해요!",
                    "KMONG을 통해 문의를 주시는 것 부터 시작하면 됩니다",
                  ],
                },
                {
                  head: "2단계 : 기획하기",
                  body_list: [
                    "페이지 제작을 위한 기획 단계입니다",
                    "직접 작성하실 수 있도록 의뢰서를 보내드립니다",
                  ],
                },
                {
                  head: "3단계 : 디자인",
                  body_list: [
                    "기획안에 따라 디자인을 진행합니다",
                    "디자인 파일이 있으실 경우, 해당 파일을 보내주시면 됩니다",
                  ],
                },
                {
                  head: "4단계 : 확인하기",
                  body_list: [
                    "제작된 페이지를 유지보수 비용 없이 무료로 호스팅 해 드립니다",
                    "필요시 원본 소스코드 파일도 전송해드립니다",
                  ],
                },
              ]}
            />
          </Section>
          <Section className={style.section4}>
            <SectionHeader
              question="타 업체와의 차별점 1번"
              head_list={["22HOURS는", "무료 도메인, 호스팅을 제공합니다"]}
            />
            <div className={style.item}>
              <p>심리 테스트 페이지를 위한 도메인과 호스팅 비용으로</p>
              <p>매달 5~6만원씩 지출하는건 너무 비 효율적이지 않나요?</p>
            </div>
            <div className={style.item}>
              <p>22HOURS는 솔루션을 이용하여 </p>
              <p>도메인과 호스팅 비용을 제로로 만들어 드립니다</p>
            </div>
          </Section>
          <Section className={style.section4}>
            <SectionHeader
              question="타 업체와의 차별점 2번"
              head_list={["22HOURS는", "심리테스트 결과 DB를 제공합니다"]}
            />
            <div className={style.item}>
              <p>심리 테스트만 만들어 놓으면 아쉽잖아요?</p>
              <p>고객들이 어떤 결과를 가장 많이 얻게 되었는지 분석할 수 있는</p>
              <p>심리 테스트 결과를 실시간으로 볼 수 있는 DB를 제공합니다</p>
            </div>
            <div className={style.item}>
              <p>
                해당 DB는 엑셀과 동일하게 생겨, 아주 쉽고 간편하게 이용하실 수
                있습니다.
              </p>
            </div>
          </Section>
          <Section>
            <Button onClick={() => alert("준비 중 입니다")}>문의하기</Button>
          </Section>
        </article>
        <footer></footer>
      </div>
    </div>
  );
};

export default Page;
