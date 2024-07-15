import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import { Layout, Card, Form } from "../components";

function Cars() {
  const [select, setSelect]= useState(false)
  const [carSelected, setCarSelected] = useState("")
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    getCars();
  },[cars])

  const getCars = async () => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((cars) => setCars(cars))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  };

  const createCar = async () => {
    const withId = { ...carSelected, id: uuidv4() };
    if (carSelected && carSelected.image) {
      withId.image = `./images/${carSelected.image}`;
    }
    fetch("http://localhost:8000/cars", {
      method : 'POST',headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(withId),
    }).then(()=>{
      setSelect(false)
      setTimeout(() => {
        alert("data berhasil ditambahkan");
      }, 100);
    })
  }

  const updateCar = async (id) => {
    if (carSelected && carSelected.image) {
      carSelected.image = `./images/${carSelected.image}`;
    }
    fetch("http://localhost:8000/cars/" + id, {
      method : 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carSelected),
    }).then(()=>{
      setCarSelected("")
      setSelect(false)
      setTimeout(() => {
        alert("data berhasil diubah");
      }, 100);
    })
  }

  const deleteCar = async (id)=> {
    fetch("http://localhost:8000/cars/" + id,{
      method: 'DELETE'
    }).then(()=>{
      setTimeout(() => {
        alert("data berhasil didelete");
      }, 100);
    })
  }

  return (
    <>
      <Layout value={carSelected}>
        {cars.map(car=>(
          <Card key={car.id} car={car} setCarSelected={setCarSelected} deleteCar={deleteCar} setSelect={setSelect}/>
        ))}
      </Layout>
      <Form carSelected={carSelected} setCarSelected={setCarSelected} createCar={createCar} updateCar={updateCar} select={select} setSelect={setSelect}/>
    </>
  );
}

export default Cars;
