import React from "react";

function Card({ car, setCarSelected, deleteCar, setSelect }) {
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <div
          style={{
            backgroundImage: `url(${car.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
          className="card-img-top"
        ></div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            {car.manufacture} / {car.type}
          </h6>
          <h5 className="card-title">
            Rp. {Number(car.rentPerDay).toLocaleString("id-ID")}/Hari
          </h5>
          <p className="card-text">{car.description}</p>
          <ul className="list-unstyled">
            <li className="py-1">
              <i className="bi bi-people"></i> {car.capacity} orang
            </li>
            <li className="py-1">
              <i className="bi bi-gear"></i> {car.transmission}
            </li>
            <li className="py-1">
              <i className="bi bi-calendar4"></i> tahun {car.year}
            </li>
          </ul>
          <div className="d-flex justify-content-between gap-2">
            <button
              className="btn btn-danger w-100"
              type="button"
              onClick={() => deleteCar(car.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning w-100"
              type="button"
              data-toggle="modal"
              data-target="#formModal"
              onClick={() => {setCarSelected(car); setSelect(true)}}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
