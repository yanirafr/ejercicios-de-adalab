import React, { Component } from "react";
import Item from "./Item";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    name: "Gazpacho",
    description: "Gazpacho natural y fresquito",
    quantity: 4,
    category: "Preparados",
    price: 3,
  },
];

class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const lowerPrice = arrayOfItems.filter((item) => item.price < 10);
    const list = lowerPrice.map((item) => (
      <li className="item-list__item">
        <Item
          name={item.name}
          description={item.description}
          quantity={[item.quantity]}
          category={item.category}
          price={item.price}
        />
      </li>
    ));
    return <ul className="item-list">{list}</ul>;
  }
}
export default ItemList;
