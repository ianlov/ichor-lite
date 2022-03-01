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
    unit: "",
    typeofdoc: "receipt",
    invoicenumber: ""
  })

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setReceipt({
      ...receipt,
      [name]: value,
    });
  }

  const handleSubmit = () => {
    props.setForm({
      ...props.form,
      refuels: [
        ...props.refuels,
        receipt
      ]
    })
    props.setIsVisible(!props.isVisible);
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
            handleChange={handleChange}
            type="date"
            name="date"
            id="date"
            value={receipt.date}
          />

          <label htmlFor="airfield">Airfield</label>
          <input
            handleChange={handleChange}
            type="text"
            name="airfield"
            id="airfield"
            value={receipt.airfield}
          />

          <label htmlFor="address">Address</label>
          <input
            handleChange={handleChange}
            type="text"
            name="address"
            id="address"
            value={receipt.address}
          />

          <label htmlFor="service">Type Fuel Service</label>
          <input
            handleChange={handleChange}
            type="text"
            name="service"
            id="service"
            value={receipt.service}
          />

          <label htmlFor="quantity">Quanitity</label>
          <input
            handleChange={handleChange}
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
              value="gallons"
              checked="checked"
              onChange={handleChange}
            />
            <label htmlFor="gallons">Gallons</label>
            <input 
              type="radio"
              name="unit"
              id="liters"
              value="liters"
              onChange={handleChange}
            />
            <label htmlFor="liters">Liters</label>
          </div>
          
          <label htmlFor="typeofdoc">Type of Document</label>
          <input
            handleChange={handleChange}
            type="text"
            name="typeofdoc"
            id="typeofdoc"
            value={receipt.typeofdoc}
          />

          <label htmlFor="invoicenumber">Invoice Number</label>
          <input
            handleChange={handleChange}
            type="text"
            name="invoicenumber"
            id="invoicenumber"
            value={receipt.invoicenumber}
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