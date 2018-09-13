import PopupComponent from "../components/PopupComponent";
import Layout from "../components/LayoutComponent";
import axios from "axios";
class store extends React.Component {
  static async getInitialProps({ req, query }) {
    const res = await axios.get(`http://localhost:9000/stores/${query.id}`);
    return {
      store: res.data
    };
  }
  render() {
    const { store } = this.props;
    return (
      <Layout>
        <PopupComponent store={store} />
      </Layout>
    );
  }
}

export default store;
