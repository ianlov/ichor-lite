import { useState } from "react";

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
    <form action="mailto:dbt220@gmail.com" method="post" enctype="text/plain">
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
        htmlFor="AOHS"
      >Aircraft Organization and Home Station</label>
      <input
        name="AOHS"
        id="AOHS"
        value={form.AOHS}
        onChange={handleChange}
      />

      <label
        htmlFor="APC"
      >Aircraft Processing Command</label>
      <input
        name="APC"
        id="APC"
        value={form.APC}
        onChange={handleChange}
      />

      <label
        htmlFor="AMDS"
      >Aircraft MDS</label>
      <input
        name="AMDS"
        id="AMDS"
        value={form.AMDS}
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

      <button 
        type="button"
        onClick={() => setIsVisible(true)}
      >Add Refuel</button>

      {isVisible? 
        <form>
          <label>Date</label>
          <input 
          
          />

          <label>Airfield Name</label>
          <input
          
          />
        </form>
      : null}

      <input
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default Form;