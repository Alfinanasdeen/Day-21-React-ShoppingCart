import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation-bar";
import Footer from "./Components/Footer";
import Header from "./Components/header";

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const productData = [
    {
      id: 1,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: "",
      price: "$40.00 - $80.00",
    },

    {
      id: 2,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: {
        original: "$20.00",
        discounted: "$18.00",
      },
    },
    {
      id: 3,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: "",
      price: {
        original: "$20.00",
        discounted: "$18.00",
      },
    },
    {
      id: 4,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
    {
      id: 5,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: "",
      price: {
        original: "$50.00",
        discounted: "$25.00",
      },
    },
    {
      id: 6,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: "",
      price: "$120.00 - $280.00",
    },
    {
      id: 7,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: {
        original: "$20.00",
        discounted: "$18.00",
      },
    },
    {
      id: 8,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
  ];

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartQuantity(cartQuantity + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );

    const updatedCartWithoutZeroQuantities = updatedCart.filter(
      (item) => item.quantity > 0
    );

    setCartItems(updatedCartWithoutZeroQuantities);
    setCartQuantity(cartQuantity - 1);
  };

  return (
    <>
      <div className="nav-bar d-flex justify-content-between align-items-center p-3">
        <button type="button" className="btn btn-outline-secondary">
          Overview page
        </button>
        <div className="d-flex align-items-center mx-auto">
          <i className="fa-solid fa-desktop darker-icon mx-2"></i>
          <i className="fa-solid fa-tablet darker-icon mx-2"></i>
          <i className="fa-solid fa-mobile darker-icon mx-2"></i>
        </div>
      </div>
      <Navigation cartQuantity={cartQuantity} />
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {productData.map((product, index) => (
              <div key={product.id} className="col mb-3">
                <div className="card col mb-5 " style={{ width: "18rem" }}>
                  {[1, 2, 4, 6].includes(index) && (
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{
                        top: "0.5rem",
                        right: "0.5rem",
                        borderRadius: "0.25rem",
                        padding: "0.2rem",
                      }}
                    >
                      Sale
                    </div>
                  )}
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="Product"
                  />
                  <div
                    className="card-body text-center d-flex flex-column align-items-center"
                    style={{
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >{` ${product.title}`}</h5>
                    {product.rating && (
                      <h5
                        className="card-rating"
                        style={{ fontSize: "14px", fontWeight: "normal" }}
                      >{` ${product.rating}`}</h5>
                    )}
                    <div className="price-container">
                      {typeof product.price === "object" ? (
                        <>
                          <span className="text-muted text-decoration-line-through">
                            {product.price.original}
                          </span>
                          <span className="discounted-price">
                            {product.price.discounted}
                          </span>
                        </>
                      ) : (
                        <span>{product.price}</span>
                      )}
                    </div>
                    <br />

                    <button
                      type="button"
                      className="btn btn-outline-dark mt-2 mb-4"
                      style={{
                        display: "inline-block",
                        width: "auto",
                        maxWidth: "fit-content",
                      }}
                      onClick={() => {
                        if (cartItems.find((item) => item.id === product.id)) {
                          removeFromCart(product.id);
                        } else {
                          handleAddToCart(product);
                        }
                      }}
                    >
                      {cartItems.find((item) => item.id === product.id)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
