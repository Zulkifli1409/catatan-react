import React, { useState } from "react";

function CatatanForm({ tambahCatatan }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const tambahCatatanHandler = () => {
    if (judul.trim() === "" || isi.trim() === "") {
      alert("Judul dan isi catatan harus diisi.");
      return;
    }

    if (judul.length > 50) {
      alert("Judul catatan tidak boleh melebihi 50 karakter.");
      return;
    }

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date().toLocaleString("id-ID", options);

    const catatanBaru = {
      id: +new Date(),
      title: judul,
      body: isi,
      archived: false,
      createdAt: formattedDate,
    };

    tambahCatatan(catatanBaru);

    setJudul("");
    setIsi("");
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Tambah Catatan Baru</h5>
        <div className="form-group">
          <label htmlFor="judul">Judul Catatan</label>
          <input
            type="text"
            className="form-control"
            id="judul"
            value={judul}
            onChange={(e) => {
              if (e.target.value.length <= 50) {
                setJudul(e.target.value);
              }
            }}
          />
          <small className="text-muted">
            {50 - judul.length} karakter tersisa
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="isi">Isi Catatan</label>
          <textarea
            className="form-control"
            id="isi"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={tambahCatatanHandler}>
          Tambah Catatan
        </button>
      </div>
    </div>
  );
}

export default CatatanForm;
