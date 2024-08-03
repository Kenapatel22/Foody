import Restaurant from "./Resturant";

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
                <Restaurant
                    resName="Meghna Food"
                    cuisine="Biryani,North indian,Asian"
                    rate="4.4 stars"
                    time="38 minutes"    
                    />
                <Restaurant
                    resName="HL Frankie"
                    cuisine="Frankies, street food"
                    rate="4.2 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Gajanand Pauva House"
                    cuisine="Snacks, Indian"
                    rate="4.4 stars"
                    time="34 minutes"
                />
                <Restaurant
                    resName="Swati Snacks"
                    cuisine="Gujrati Food"
                    rate="4.4 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Punjabi Tadka"
                    cuisine="Punjabi Food"
                    rate="4.4 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="KFC"
                    cuisine="Burger,North indian,Asian"
                    rate="4.3 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Pizza Hut"
                    cuisine="Pizzas"
                    rate="3.8 stars"
                    time="25 minutes"
                />
                <Restaurant
                    resName="McDonald's"
                    cuisine="Fast food"
                    rate="4.2 stars"
                    time="38 minutes"
                />
                <Restaurant
                    resName="Karnavati Dabeli"
                    cuisine="Street Food"
                    rate="4.1 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Subway"
                    cuisine="Salad,Healthy food"
                    rate="4.0 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Shreeji Krupa"
                    cuisine="Snacks, Beverages"
                    rate="4.2 stars"
                    time="40 minutes"
                />
                <Restaurant
                    resName="Monginis"
                    cuisine="cake,Sweet Food"
                    rate="4.1 stars"
                    time="32 minutes"
                />
                <Restaurant
                    resName="Bole To Vadapav"
                    cuisine="vadapav, street food "
                    rate="4.4 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Das Khaman"
                    cuisine="snackes"
                    rate="4.0 stars"
                    time="32 minutes"
                />
                <Restaurant
                    resName="Wagh Bakri Tea Lounge"
                    cuisine="tea,desserts"
                    rate="3.4 stars"
                    time="28 minutes"
                />
                <Restaurant
                    resName="Vadilal Hangout"
                    cuisine="ice-creams"
                    rate="4.7 stars"
                    time="30 minutes"
                />
                <Restaurant
                    resName="Simple south"
                    cuisine="south indian"
                    rate="4.0 stars"
                    time="35 minutes"
                />
                <Restaurant
                    resName="Desi Tadka"
                    cuisine="street food"
                    rate="4.2 stars"
                    time="30 minutes"
                />
                
            </div>
        </div>
    );
} 

export default Body;