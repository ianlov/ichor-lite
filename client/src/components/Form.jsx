import { useState } from "react";
import Receipt from "./Receipt.jsx";
import Refuel from "./Refuel.jsx";

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    start: "",
    finish: "",
    AOHS: "71 FTW, VANCE AFB (8/33 FTS)",
    APC: "AETC",
    AMDS: "T006A",
    ASN: "",
    refuels: []
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form className="main-form">
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
      >Start</label>
      <input
        type="date"
        name="start"
        id="start"
        value={form.start}
        onChange={handleChange}
      />
      <label
        htmlFor="finish"
      >Finish</label>
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
      <div className="refuel-list">
        {form.refuels.map((refuel, idx) => (
          <Refuel
            key={idx}
            position={idx}
            refuel={refuel}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            form={form}
            setForm={setForm}
          />
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