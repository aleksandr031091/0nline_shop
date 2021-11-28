import CategoryItemsStyled from "./CategoryItemsStyled";

const CategoryItem = ({ product, onHandleClickCard }) => {
  return (
    <CategoryItemsStyled
      className="products_list_card"
      onClick={onHandleClickCard}
    >
      <img src={product.image} alt="phone" className="card_image" />
      <h3 className="product_name">{product.name}</h3>
      <p className="price">price: {product.price} $</p>
      <button className="btn_buy">Buy</button>
      {product.isSale && <span className="product_sale">sale</span>}
    </CategoryItemsStyled>
  );
};

export default CategoryItem;
