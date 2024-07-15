import { useEffect, useState } from "react";
import { Nav, Jumbotron, Box, Card, Footer } from "../components";

function Search() {
  const [cars, setCars] = useState([]);
  const [find, setFind] = useState({})

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

  useEffect(()=>{
    getCars();
  },[])

  return (
    <>
      <Nav/>
      <Jumbotron type="non"/>
      <Box setFind={setFind}/>
      <div className="container">
        <div className="row" id="cars-container">
          {cars.filter(car=> car.available === find.driver && car.capacity >= find.amount).map(car=>(
            <Card key={car.id} car={car} view="true" />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
