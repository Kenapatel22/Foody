const Restaurant  = (Props) => {
    console.log(Props);

    return(
        <div className="res">
            
            <img className="res-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_NYmg95uW07i0eDkbGtknr3Fc9Orca9-_g&usqp=CAU"></img>
            <h3>{Props.resName}</h3>
            <h4> {Props.cuisine}</h4>
            <h4>{Props.rate}</h4>
            <h4>{Props.time}</h4>
        </div>
    );
}  

export default Restaurant;