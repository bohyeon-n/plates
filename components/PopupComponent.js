import { Modal, Button, Carousel, Col, Row } from "antd";
import axios from "axios";
import Router from "next/router";
class PopupComponent extends React.Component {
  render() {
    const { store, dismiss } = this.props;
    return (
      <Modal
        visible={true}
        title="AWESOME FOOD STORE"
        footer={null}
        width="90vw"
        style={{ top: 20 }}
        onCancel={dismiss}
      >
        <style jsx>
          {`
        .modal-content {
          min-height: 80vh;

        }
        h1 {
          padding-bottom: 2rem;
        }
        .content-img {
          width: 45%;
          height: 100%;
        }
        img {
          width: 100% 
          height: 100% 
        }
  
        .content-desc {
          width: 45%;
          height: 100%;
        }
  
      `}
        </style>
        <div className="modal-content">
          <Row>
            <Col xs={24} lg={12}>
              <Carousel autoplay>
                {store.images.map(img => (
                  <img src={img} />
                ))}
              </Carousel>
            </Col>
            <Col xs={24} lg={12}>
              <h1>{store.title}</h1>
              {store.desc.map(p => (
                <p>{p}</p>
              ))}
              {store.url ? (
                <a href={store.url}>{`${store.title} 홈페이지로 이동`}</a>
              ) : null}
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}
export default PopupComponent;
