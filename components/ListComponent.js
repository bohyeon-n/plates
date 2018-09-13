import ItemComponent from "./ItemComponent";
import { Row } from "antd";
const gutter = { xs: 8, sm: 16, md: 24 };
const sliceItems = items => {
  return slicedItem;
};
const ListContainer = ({ stores }) => (
  <Row gutter={16} type="flex" justify="start" align="top">
    {stores.map((item, index) => (
      <ItemComponent key={item.id} store={item} />
    ))}
  </Row>
);

export default ListContainer;
