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
                    <div style={{display: "flex"}}>
                        < FiPlusCircle/>
                        <span>2</span>
                        < FiMinusCircle/>

                    </div>
                </div>
                <div className="right_column">
                    <h6>Product name</h6>
                    <p>Price</p>
                    <p>Color</p>
                    <p>In stock</p>
                    <div style={{display: "flex"}}>
                        <button>Add to cart</button>
                        <button>Similar Products</button>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ProductList