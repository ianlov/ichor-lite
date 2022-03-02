import "../css/Refuel.css";

const Refuel = (props) => {
  const handleEdit = (ev) => {

    props.setIsVisible(!props.isVisible)
  }

  const handleDelete = () => {
    props.setForm({
      ...props.form,
      refuels: [
        
      ]
    })
  }

  return (
    <div className="refuel">
      <p>{props.refuel.date}</p>
      <p>{props.refuel.airfield}</p>
      <p>{props.refuel.service}</p>
      <p>{props.refuel.quantity} {props.refuel.unit}</p>
      <p>{props.refuel.invoicenumber}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Refuel;