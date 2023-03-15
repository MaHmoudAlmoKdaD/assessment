import arrowRight from "./../../../images/icon/arrowRight.svg";
import "./products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="wrapperProducts">
        <div className="header">
          <p>Our Premium Collection</p>
        </div>
        <div className="categories">
          <ul className="cat-list">
            <li className="cat-item">
              <a href="#">All Products</a>
            </li>
            <li className="cat-item">
              <a href="#">Coat & Jackets</a>
            </li>
            <li className="cat-item">
              <a href="#">Dressed</a>
            </li>
            <li className="cat-item">
              <a href="#">Playsuit</a>
            </li>
            <li className="cat-item">
              <a href="#">Short</a>
            </li>
            <li className="cat-item">
              <a href="#">Skirt</a>
            </li>
            <li className="cat-item">
              <a href="#">T-Shirt</a>
            </li>
          </ul>
        </div>
        <div className="wrapperProductsCard">
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cardProduct">
            <div className="image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product image"
              />
            </div>
            <div className="details">
              <div className="categoryName">
                <p>Category Dress</p>
              </div>
              <div className="productName">
                <p>Tropical Suit</p>
              </div>
              <div className="arrowRight">
                <div className="icon">
                  <img src={arrowRight} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <button>Find out More</button>
      </div>
    </div>
  );
};

export default Products;
