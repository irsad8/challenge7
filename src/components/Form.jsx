import React from "react";

function Form({ carSelected, setCarSelected, createCar, updateCar, select, setSelect }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (select) {
      updateCar(carSelected.id);
    } else {
      createCar();
    }
    setCarSelected("");
    setSelect(false)
  };

  return (
    <>
      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {select ? "Update data car" : "Isi data car baru"}
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {setCarSelected(""), setSelect(false)}}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="manufacture">Produsen</label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacture"
                      name="manufacture"
                      value={carSelected ? carSelected.manufacture : ""}
                      required
                      onChange={(e) => setCarSelected({...carSelected, mobil: e.target.value})}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="type">Tipe</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      name="type"
                      value={carSelected ? carSelected.type : ""}
                      required
                      onChange={(e) => setCarSelected({...carSelected, type: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="price">Harga</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="rentPerDay"
                      value={carSelected ? carSelected.rentPerDay : ""}
                      required
                      onChange={(e) => setCarSelected({...carSelected, rentPerDay: e.target.value})}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="capacity">Kapasitas</label>
                    <input
                      type="number"
                      className="form-control"
                      id="capacity"
                      name="capacity"
                      value={carSelected ? carSelected.capacity : ""}
                      required
                      onChange={(e) => setCarSelected({...carSelected, capacity: e.target.value})}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="transmisi">Transmisi</label>
                    <select
                      id="transmisi"
                      name="transmission"
                      className="form-control"
                      required
                      value={carSelected ? carSelected.transmission : ""}
                      onChange={(e) => setCarSelected({...carSelected, transmission: e.target.value})}
                    >
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="year">Tahun</label>
                    <input
                      type="number"
                      className="form-control"
                      id="year"
                      name="year"
                      value={carSelected ? carSelected.year : ""}
                      required
                      onChange={(e) => setCarSelected({...carSelected, year: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Deskripsi</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={carSelected ? carSelected.description : ""}
                    required
                    onChange={(e) => setCarSelected({...carSelected, description: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-check-label" htmlFor="file">
                    Upload gambar
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="file"
                    name="file"
                    required={!carSelected}
                    onChange={(e)=>setCarSelected({...carSelected, image : e.target.files[0].name})}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                  onClick={() => {setCarSelected(""), setSelect(false)}}
                >
                  Cancel
                </button>
                {select ? (
                  <button className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>
                    Update
                  </button>
                ) : (
                  <button className="btn btn-success" data-dismiss="modal" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
