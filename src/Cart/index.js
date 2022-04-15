import { MdOutlineMenu, MdSearch } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import "./style.css";
import ProductList from "../ProductList";

const Cart = () => {
  return (
    <>
      <div className="navbar">
        <MdOutlineMenu style={{ width: "2em", height: "auto" }} />
        <h4>LOGO.</h4>
      </div>
      <div className="max-width">
        <MdSearch style={{ position: "absolute", padding: "11px" }} />
        <span>
            <BsCamera
              style={{
                position: "absolute",
                right: "20px",
                borderLeft: "solid 1px gray",
                margin: "11px",
                paddingLeft: "11px",
              }}
            />
          <input
            name="search"
            type="text"
            style={{
              width: "90%",
              backgroundColor: "#ededed",
              border: "none",
              padding: ".8em",
              paddingLeft: "2.5em",
            }}
            placeholder="Search"
          />
        </span>

        <ProductList />
      </div>
    </>
  );
};

export default Cart;
