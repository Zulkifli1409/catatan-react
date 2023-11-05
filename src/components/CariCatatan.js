import React from 'react';

function CariCatatan({ cariKataKunci, setCariKataKunci }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Cari Catatan</h5>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cari catatan..."
            value={cariKataKunci}
            onChange={(e) => setCariKataKunci(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default CariCatatan;
