import axios from "axios";
import LayoutComponent from "../components/LayoutComponent";

import ListComponent from "../components/ListComponent";
import PopupComponent from "../components/PopupComponent";

import dynamic from "next/dynamic";

const Modal = dynamic(import("../components/PopupComponent.js"), {
  ssr: false
});
class MainPage extends React.Component {
  static async getInitialProps({ req }) {
    const res = await axios.get("http://localhost:9000/stores");
    return {
      stores: res.data
    };
  }
  render() {
    const { url } = this.props;
    const { stores } = this.props;
    return (
      <LayoutComponent title={"AWESOME FOOD STORE"}>
        <ListComponent stores={stores} />
      </LayoutComponent>
    );
  }
}

export default MainPage;
