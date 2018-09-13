import Layout from "../components/LayoutComponent";
const About = () => (
  <Layout>
    <style>{`
    .about{
      padding-top: 2rem;
    }
    `}</style>
    <div className="about">
      <p>AWESOME FOOD STORE는 지금 가장 핫한 맛집을 소개해주는 서비스입니다.</p>
    </div>
  </Layout>
);

export default About;
