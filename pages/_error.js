import React from "react";
import Router from "next/router";
import { Button } from "antd";
import Link from "next/link";
export default class Error extends React.Component {
  state = {
    count: 5
  };
  componentDidMount() {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
    this.interval = setInterval(() => {
      this.setState({ count: --this.state.count });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return (
      <div>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server!`
            : "An error occurred on client"}
        </p>
        <p>5초 뒤에 메인 페이지로 이동합니다. {this.state.count}</p>
        <Link href="/">
          <a>
            <Button>STORE 페이지로 이동</Button>
          </a>
        </Link>
      </div>
    );
  }
}
