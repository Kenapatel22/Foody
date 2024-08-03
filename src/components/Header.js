const Header = () => {
    return(
        <div className="head">
        <div className="logo-container">
            <img  className="logo" src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"></img>
            <h2 className="name">Foody</h2>
        </div>
        <div className="nav-items">
            <ul>
                <li><u>Home</u></li>
                <li><u>About us</u></li>
                <li><u>contact us</u></li>
                <li><u>cart</u></li>
            </ul>
        </div>
        </div>
    )
}

export default Header;