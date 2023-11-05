import React from "react";

function CatatanList({
  catatan,
  cariKataKunci,
  hapusCatatan,
  arsipkanCatatan,
  pindahkanCatatan,
}) {
  const catatanTerlihat = catatan.filter((item) =>
    item.title.toLowerCase().includes(cariKataKunci.toLowerCase())
  );

  const catatanBiasa = catatanTerlihat.filter((item) => !item.archived);
  const catatanArsip = catatanTerlihat.filter((item) => item.archived);

  return (
    <div className="mt-3">
      <h2>Daftar Catatan</h2>
      {catatanBiasa.length === 0 ? (
        <div className="alert alert-info">Tidak ada catatan</div>
      ) : (
        <ul className="list-group">
          {catatanBiasa.map((catatan) => (
            <li key={catatan.id} className="list-group-item">
              <h5>{catatan.title}</h5>
              <p>{catatan.body}</p>
              <p>Created At: {catatan.createdAt}</p>{" "}
              <button
                className="btn btn-danger"
                onClick={() => hapusCatatan(catatan.id)}
              >
                Hapus
              </button>
              <button
                className="btn btn-warning"
                onClick={() => arsipkanCatatan(catatan.id)}
              >
                Arsipkan
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Daftar Catatan Diarsipkan</h2>
      {catatanArsip.length === 0 ? (
        <div className="alert alert-info">Tidak ada catatan diarsipkan.</div>
      ) : (
        <ul className="list-group">
          {catatanArsip.map((catatan) => (
            <li key={catatan.id} className="list-group-item">
              <h5>{catatan.title}</h5>
              <p>{catatan.body}</p>
              <p>Created At: {catatan.createdAt}</p>{" "}
              <button
                className="btn btn-danger"
                onClick={() => hapusCatatan(catatan.id)}
              >
                Hapus
              </button>
              <button
                className="btn btn-success"
                onClick={() => pindahkanCatatan(catatan.id)}
              >
                Pindahkan
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatatanList;
