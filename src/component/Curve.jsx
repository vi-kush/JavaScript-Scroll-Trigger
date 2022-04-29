
const Curve=(props)=>{

    const {till=0} = props;

    return(
        <div className="curve">	
            {props.text}					
            <div className="backline">
                {
                    [1,2,3,4,5,6].map((itm)=>(<div key={itm} className={`section ${(itm<till) ? "active" : ""}`}  style={{"--i":itm}}></div>))
                }
            </div>
            <div className="line">
                {
                    [1,2,3,4,5,6,7].map((itm)=>(<div key={itm} className={`circle ${(itm<=till) ? "active" : ""}`}  style={{"--i":itm}}></div>))
                }
            </div>
        </div>
    )
}

export default Curve