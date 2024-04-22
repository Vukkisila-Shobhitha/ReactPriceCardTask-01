import PropTypes from "prop-types"


export default function Cards(props){
  const {width, height, background,message,items,btnitem,val,isDisabled,color} = props; 
  // console.log(items)
  return <>
  <div className="mainbox">
     <div className="squ"
     style={{width:width, height:height, background:background}}>
      <div className="msgClass">{message}</div>
      <div className="priceClass"><h2>{val}</h2></div>
      <div className="listOrder">
      <ul>
        {
          items.map((element,index)=>(
            <li key={index} style={{color:element.color}}>{element.isAvailable ? "✔" : "❌"} {element.usage1}</li>
          ))
        }
      </ul>
      
      </div>
      <div className="cardsDiv">
      <button type="button" className="btn btn-primary" disabled={isDisabled}>{btnitem}</button>
      </div>
      </div>
  </div>
    
  </>
}


Cards.propTypes = {
  width : PropTypes.number,
  height : PropTypes.number,
  background : PropTypes.string,
  message: PropTypes.string,
  items: PropTypes.array,
  val: PropTypes.string
}