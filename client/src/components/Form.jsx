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
    <form className="main-form" 
      action="mailto:dbt220@gmail.com" 
      method="post" 
      enctype="text/plain"
    >
      <div className="name">
        <label
          htmlFor="name"
        >Name</label>
        <input
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="startdate">
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
      </div> 

      <div className="finishdate">
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
      </div>
      
      <div className="serial">
        <label
          htmlFor="ASN"
        >Aircraft Serial Number</label>
        <input
          name="ASN"
          id="ASN"
          value={form.ASN}
          onChange={handleChange}
        />
      </div>
      
      <div className="receipt">
        <div className="refuel-list">
          {form.refuels.map((refuel, idx) => (
            <Refuel
              key={idx}
              refuel={refuel}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
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
      </div>

      <div className="submit">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Form;