import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import "./style.css";

const ProductList = () => {
  return (
    <>
      <div className="product_container">
        <div className="left_column">
          <div className="image_container">
            <img
              src="https://i.ibb.co/3ddP4Vr/ekart2.png"
              alt="ekart2"
              border="0"
              style={{width: "100%"}}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#ededed",
            }}
          >
            <FiPlusCircle style={{paddingLeft: "0.3em"}} />
            <span>2</span>
            <FiMinusCircle style={{paddingRight: "0.3em"}}/>
          </div>
        </div>
        <div className="right_column">
          <h3 style={{ margin: "0", fontWeight:"600", fontSize: "1em" }}>Querty Watch Leather strap</h3>
          <p style={{fontWeight: "bold"}}><sup>&#8377;</sup>12.000</p>
          <p><span style={{fontWeight: "bold"}}>Color:</span> Brown</p>
          <span style={{color: "green", fontSize: "small"}}>In stock</span>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.7em" }}>
            <button
              style={{
                fontSize: ".7em",
                borderRadius: "40px",
                color: "orange",
                backgroundColor: "white",
                borderColor: "orange",
                fontWeight: "bold",
                padding: "0.5em 1.5em",
                marginRight: "1em"
              }}
            >
              Delete
            </button>
            <button
              style={{
                fontSize: ".6em",
                borderRadius: "40px",
                color: "white",
                backgroundColor: "orange",
                border: "0",
                padding: "0.5em 1.5em",
                fontWeight: "bold",
              }}
            >
              Similar Products
            </button>
          </div>
        </div>
      </div>
      <hr style={{marginTop: "1.5em"}}/>
      <div className="total_container">
        <div style={{display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
            <h4 style={{margin: "0px"}}>Subtotal <sup>&#8377;</sup>24,000</h4>
            <button className="total_button">Proceed to buy (2 items)</button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
