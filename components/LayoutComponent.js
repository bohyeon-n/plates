import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import Head from "next/head";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;
const LayoutComponent = ({ children, title }) => (
  <div>
    <style jsx>
      {`
        .content {
          padding-top: 2rem;
          width: 80%;
          min-height: 80vh;
          margin: auto;
        }
      `}
    </style>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css"
      />
    </Head>
    <Layout>
      <Header>
        <HeaderComponent />
      </Header>
      <Layout>
        <Content>
          <div className="content">{children}</div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        <FooterComponent />
      </Footer>
    </Layout>
  </div>
);

export default LayoutComponent;
