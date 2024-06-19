import React from "react";

function Box({ setFind }) {
  const handleSearch = () => {
    const driver = document.getElementById("driver").value === 'true';
    const amount = document.getElementById("amount").value;

    setFind({driver,amount, status:true})
  };
  return (
    <div className="container">
      <div className="row justify-content-center panel mb-5">
        <div className="col py-4">
          <div className="row">
            <div className="col">
              <label htmlFor="driver">tipe driver</label>
            </div>
            <div className="col">
              <label htmlFor="date">tanggal</label>
            </div>
            <div className="col">
              <label htmlFor="time">waktu jemput/ambil</label>
            </div>
            <div className="col">
              <label htmlFor="amount">jumlah penumpang</label>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col">
              <select
                id="driver"
                className="form-select"
                aria-placeholder="pilih tipe driver"
              >
                <option value="true">dengan supir</option>
                <option value="false">tanpa supir (lepas kunci)</option>
              </select>
            </div>
            <div className="col">
              <input
                type="date"
                id="date"
                className="form-control"
                placeholder="pilih tanggal"
              />
            </div>
            <div className="col">
              <input
                type="time"
                id="time"
                className="form-control"
                placeholder="pilih waktu"
              />
            </div>
            <div className="col">
              <input
                type="number"
                id="amount"
                className="form-control"
                placeholder="Input 4"
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                id="search"
                className="btn btn-success bg-grass text-light"
                onClick={handleSearch}
              >
                <b>cari mobil</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
