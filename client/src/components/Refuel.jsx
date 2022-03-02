import "../assets/css/Refuel.css";

const Refuel = (props) => {
  return (
    <div 
      className="refuel"
      onClick={() => props.setIsVisible(!props.isVisible)}
    >
      <p>{props.refuel.date}</p>
      <p>{props.refuel.airfield}</p>
      <p>{props.refuel.service}</p>
      <p>{props.refuel.quantity} {props.refuel.unit}</p>
      <p>{props.refuel.invoicenumber}</p>
    </div>
  )
}

export default Refuel;