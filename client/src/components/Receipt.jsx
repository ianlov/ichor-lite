import "../assets/css/Receipt.css";
import { createPortal } from "react-dom";
import { useState } from "react";

const Receipt = (props) => {
  const [receipt, setReceipt] = useState({
    date: "",
    airfield: "",
    address: "",
    service: "",
    quantity: "",
    unit: "gallons",
    typeofdoc: "receipt",
    invoicenumber: "",
    image: "",
  })

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setReceipt({
      ...receipt,
      [name]: value,
    });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.setForm({
      ...props.form,
      refuels: [
        ...props.form.refuels,
        receipt
      ]
    })
    props.setIsVisible(!props.isVisible);
    console.log("submitted receipt")
  }

  return props.isVisible? createPortal(
    <div className="screen">
      <div className="modal-wrapper">
        <form 
          className="receipt-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="date">Refuel Date</label>
          <input
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            value={receipt.date}
          />

          <label htmlFor="airfield">Airfield</label>
          <input
            onChange={handleChange}
            type="text"
            name="airfield"
            id="airfield"
            value={receipt.airfield}
          />

          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
            value={receipt.address}
          />

          <label htmlFor="service">Type Fuel Service</label>
          <input
            onChange={handleChange}
            type="text"
            name="service"
            id="service"
            value={receipt.service}
          />

          <label htmlFor="quantity">Quanitity</label>
          <input
            onChange={handleChange}
            type="number"
            name="quantity"
            id="quantity"
            value={receipt.quantity}
          />

          <div className="units">
            <p>Units</p>
            <input 
              type="radio"
              name="unit"
              id="gallons"
              value="gal"
              checked="checked"
              onChange={handleChange}
            />
            <label htmlFor="gallons">Gallons</label>
            <input 
              type="radio"
              name="unit"
              id="liters"
              value="lit"
              onChange={handleChange}
            />
            <label htmlFor="liters">Liters</label>
          </div>
          
          <label htmlFor="typeofdoc">Type of Document</label>
          <input
            onChange={handleChange}
            type="text"
            name="typeofdoc"
            id="typeofdoc"
            value={receipt.typeofdoc}
          />

          <label htmlFor="invoicenumber">Invoice Number</label>
          <input
            onChange={handleChange}
            type="text"
            name="invoicenumber"
            id="invoicenumber"
            value={receipt.invoicenumber}
          />

          <label htmlFor="image">Image</label>
          <input
            onChange={handleChange}
            type="file"
            name="image"
            id="image"
            value={receipt.image}
          />

          <div className="modal-buttons">
            <button>Submit</button>
            <button
              type="button"
              onClick={() => props.setIsVisible(!props.isVisible)}
            >Close</button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  ) : null
}

export default Receipt;