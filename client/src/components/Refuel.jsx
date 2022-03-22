import "../css/Refuel.css";

const Refuel = (props) => {
  const handleDelete = () => {
    const newRefuels = props.form.refuels.filter((refuel, index) => index !== props.position)

    props.setForm({
      ...props.form,
      refuels: [
        ...newRefuels
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
      <button className="delete" type="button" onClick={handleDelete}>X</button>
    </div>
  )
}

export default Refuel;