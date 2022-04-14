import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi';
import "./style.css"

const ProductList = () => {
    return (
        <>
            <div className="product_container">
                <div className="left_column">
                    <div className="image_container">
                    <img src="https://i.ibb.co/3ddP4Vr/ekart2.png" alt="ekart2" border="0"/>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "#ededed"}}>
                        < FiPlusCircle/>
                        <span>2</span>
                        < FiMinusCircle/>

                    </div>
                </div>
                <div className="right_column">
                    <h3 style={{margin: "0"}}>Product name</h3>
                    <p>Price</p>
                    <p>Color</p>
                    <p>In stock</p>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <button style={{fontSize: ".6em",
    borderRadius: "40px",
    color: "orange",
    backgroundColor: "white",
    borderColor: "orange"
    }}>Delete</button>
                        <button style={{ fontSize: ".6em",
    borderRadius: "40px",
    color: "white",
    backgroundColor: "orange",
    border: "0"}}>Similar Products</button>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ProductList