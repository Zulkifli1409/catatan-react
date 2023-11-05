import "./App.css";
import React, { useState } from "react";
import CatatanList from "./components/CatatanList";
import CatatanForm from "./components/CatatanForm";
import CariCatatan from "./components/CariCatatan";
import { getInitialData } from "./components/InitialData";

function App() {
  const [catatan, setCatatan] = useState(getInitialData()); // Use getInitialData to initialize the data

  const [cariKataKunci, setCariKataKunci] = useState("");

  const tambahCatatan = (catatanBaru) => {
    setCatatan([...catatan, catatanBaru]);
  };

  const pindahkanCatatan = (id) => {
    const catatanBaru = catatan.map((item) => {
      if (item.id === id) {
        return { ...item, archived: false };
      }
      return item;
    });
    setCatatan(catatanBaru);
  };

  const hapusCatatan = (id) => {
    const catatanBaru = catatan.filter((item) => item.id !== id);
    setCatatan(catatanBaru);
  };

  const arsipkanCatatan = (id) => {
    const catatanBaru = catatan.map((item) => {
      if (item.id === id) {
        return { ...item, archived: true };
      }
      return item;
    });
    setCatatan(catatanBaru);
  };

  return (
    <div className="container">
      <CatatanForm tambahCatatan={tambahCatatan} />
      <CariCatatan
        cariKataKunci={cariKataKunci}
        setCariKataKunci={setCariKataKunci}
      />
      <CatatanList
        catatan={catatan}
        cariKataKunci={cariKataKunci}
        hapusCatatan={hapusCatatan}
        arsipkanCatatan={arsipkanCatatan}
        pindahkanCatatan={pindahkanCatatan}
      />
    </div>
  );
}

export default App;
