import {MdOutlineMenu, MdSearch} from 'react-icons/md';
import {BsCamera} from 'react-icons/bs';
import './style.css';
import ProductList from '../ProductList';

const Cart = () => {
    return (
        <>
            <div className="navbar">
                
                    < MdOutlineMenu style={{width: "2em",
    height: "auto"}}/>
                <h4>LOGO.</h4>
            </div>
            <div className='max-width'>
                < MdSearch style={{position: "absolute", paddingTop: "5px",
    paddingLeft: "5px"}}/>
                <BsCamera style={{position: "absolute", right: "20px", paddingTop: "4px"}} />
                <span>
                    <input name='search' type="text" style={{width: "100%"}}/>

                </span>

                <ProductList/>
            </div>
        </>
    )

}

export default Cart