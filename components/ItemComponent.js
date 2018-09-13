import { Col, Card } from "antd";
const { Meta } = Card;

import Router from "next/router";
import Link from "next/link";
import PopupComponent from "./PopupComponent";

class ItemComponent extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({ show: true });
  };
  dismiss = e => {
    this.setState({ show: false });
  };
  render() {
    const { store, url } = this.props;

    return (
      <Col xs={24} md={12} lg={8} xl={6}>
        {this.state.show ? (
          <PopupComponent store={store} dismiss={this.dismiss} />
        ) : null}
        <style jsx>
          {`
            .item {
              padding-left: 1rem;
              padding-top: 1rem;
            }
          `}
        </style>
        <div className="item" onClick={this.showModal}>
          <Card
            hoverable
            cover={<img alt={`${store.title}이미지`} src={store.images[0]} />}
          >
            <Meta title={store.title} />
          </Card>
        </div>
      </Col>
    );
  }
}

export default ItemComponent;
