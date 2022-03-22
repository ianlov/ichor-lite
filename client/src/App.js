import './css/Global.css';
import Form from "./components/Form.jsx";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    start: "",
    finish: "",
    AOHS: "71 FTW, VANCE AFB (8/33 FTS)",
    APC: "AETC",
    AMDS: "T006A",
    ASN: "",
    refuels: []
  })


  return (
    <>
      <Form
        form={form}
        setForm={setForm}
      />
    </>
    
  );
}

export default App;
