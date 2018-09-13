import { Col, Card } from "antd";
const { Meta } = Card;

import Router from "next/router";
import Link from "next/link";
import PopupComponent from "./PopupComponent";

class ItemComponent extends React.Component {
  showModal = e => {
    e.preventDefault();
    const { store } = this.props;

    Router.push(`/store?id=${store.id}`);
  };
  render() {
    const { store, url } = this.props;

    return (
      <Col xs={24} md={12} lg={8} xl={6}>
        <style jsx>
          {`
            .item {
              padding-left: 1rem;
              padding-top: 1rem;
            }
          `}
        </style>

        <Link prefetch href={`/store?id=${store.id}`} as={`/store/${store.id}`}>
          <div className="item">
            <Card
              hoverable
              cover={<img alt={`${store.title}이미지`} src={store.images[0]} />}
            >
              <Meta title={store.title} />
            </Card>
          </div>
        </Link>
      </Col>
    );
  }
}

export default ItemComponent;
