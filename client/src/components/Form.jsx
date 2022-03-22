import { useState } from "react";
import Receipt from "./Receipt.jsx";
import Refuel from "./Refuel.jsx";

const Form = ({ form, setForm }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form
      className="main-form"
      action="mailto:ian.lovice@protonmail.com"
      encType="text/plain"
      method="post"
    >
      <label
        htmlFor="name"
      >Name</label>
      <input
        name="name"
        id="name"
        value={form.name}
        onChange={handleChange}
      />
      <label
        htmlFor="start"
      >Mission Start</label>
      <input
        type="date"
        name="start"
        id="start"
        value={form.start}
        onChange={handleChange}
      />
      <label
        htmlFor="finish"
      >Mission End</label>
      <input
        type="date"
        name="finish"
        id="finish"
        value={form.finish}
        onChange={handleChange}
      />
      <label
        htmlFor="ASN"
      >Aircraft Serial Number</label>
      <input
        name="ASN"
        id="ASN"
        value={form.ASN}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="AOHS"
        value={form.AOHS}
      />
      <input
        type="hidden"
        name="APC"
        value={form.APC}
      />
      <input
        type="hidden"
        name="AMDS"
        value={form.AMDS}
      />
      <div className="refuel-list">
        {form.refuels.map((refuel, idx) => (
          <div
            key={idx}
            className="refuel-container"
          >
            <Refuel
              position={idx}
              refuel={refuel}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              form={form}
              setForm={setForm}
            />
            <input
              type="hidden"
              name={`date ${idx+1}`}
              value={form.refuels[idx].date}
            />
            <input
              type="hidden"
              name={`airfield ${idx+1}`}
              value={form.refuels[idx].airfield}
            />
            <input
              type="hidden"
              name={`address ${idx+1}`}
              value={form.refuels[idx].address}
            />
            <input
              type="hidden"
              name={`service ${idx+1}`}
              value={form.refuels[idx].service}
            />
            <input
              type="hidden"
              name={`quantity ${idx+1}`}
              value={form.refuels[idx].quantity}
            />
            <input
              type="hidden"
              name={`unit ${idx+1}`}
              value={form.refuels[idx].unit}
            />
            <input
              type="hidden"
              name={`typeofdoc ${idx+1}`}
              value={form.refuels[idx].typeofdoc}
            />
            <input
              type="hidden"
              name={`invoicenumber ${idx+1}`}
              value={form.refuels[idx].invoicenumber}
            />
            <input
              type="hidden"
              name={`image ${idx+1}`}
              value={form.refuels[idx].image}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >(+) Receipt</button>
      <Receipt
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        form={form}
        setForm={setForm}
      />
      <button>Submit</button>
    </form>
  )
}

export default Form;