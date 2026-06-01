import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="NovaCart - Smart Shopping" />

          <div className="banner">
            <a href="#container">
              <button>
                Explore Products <CgMouse />
              </button>
            </a>
          </div>

          <div className="whyNovaCart">
            <h2>Why Choose NovaCart?</h2>

            <div className="features">
              <div className="featureCard">
                <h3>🔒 Secure Payments</h3>
                <p>100% safe and encrypted transactions.</p>
              </div>

              <div className="featureCard">
                <h3>🚚 Fast Delivery</h3>
                <p>Quick delivery right to your doorstep.</p>
              </div>

              <div className="featureCard">
                <h3>⭐ Premium Quality</h3>
                <p>Top-rated products from trusted sellers.</p>
              </div>

              <div className="featureCard">
                <h3>🎧 24/7 Support</h3>
                <p>Dedicated customer support anytime.</p>
              </div>
            </div>
          </div>

          <div className="categoriesSection">
            <h2>Shop By Category</h2>

            <div className="categories">
              <Link to="/products" className="categoryCard">
                📱 Electronics
              </Link>

              <Link to="/products" className="categoryCard">
                👕 Fashion
              </Link>

              <Link to="/products" className="categoryCard">
                👟 Shoes
              </Link>

              <Link to="/products" className="categoryCard">
                📚 Books
              </Link>

              <Link to="/products" className="categoryCard">
                ⌚ Accessories
              </Link>
            </div>
          </div>

          <h2 className="homeHeading">Trending Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Home;