import { Menu, Row, Col } from "antd";
import Link from "next/link";
const HeaderComponent = () => (
  <div className="header">
    <style>
      {`
      .header {
        color: #fff;
        line-height: 10vh;
        display: flex;
        justify-content: space-between;
      }
      .menu a {
          padding-left: 1rem;

        }

    `}
    </style>

    <div className="logo">AWESOME FOOD STORE</div>

    <div className="menu">
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/">
        <a>STORES</a>
      </Link>
    </div>
  </div>
);

export default HeaderComponent;
