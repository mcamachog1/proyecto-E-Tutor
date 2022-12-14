import React, { useState, useEffect, useContext } from "react";
import html1Url from "../../img/html-1.png";
import html2Url from "../../img/html-2.png";
import css1Url from "../../img/css-1.jpg";
import css2Url from "../../img/css-2.png";
import js1Url from "../../img/js-1.jpg";
import js2Url from "../../img/js-2.jpg";
import completoUrl from "../../img/completo.jpg";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/searchClass.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";

export const SearchClass = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const { store, actions } = useContext(Context);

  const handleDirection = (direction) => {
    if (direction == "start") {
      if (cardIndex + offset > store.clases.length - 1) {
        // console.log(0);
        setCardIndex(0);
      } else {
        // console.log(cardIndex + offset);
        setCardIndex(cardIndex + offset);
      }
    }

    if (direction == "end") {
      if (cardIndex - offset < 0)
        setCardIndex(Math.floor((store.clases.length - 1) / 5) * 5);
      else setCardIndex(cardIndex - offset);
    }
  };
  const numberOfSlides = Math.floor(store.clases.length / 5) + 1;
  const slides = [];
  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(i);
  }
  const offset = 5;

  return (
    <div className="fondo">
      <div className="pt-5">
        <Form
          id="myForm"
          action=""
          className="d-flex justify-content-center form"
        >
          <Form.Control
            className="keyWord"
            id="palabraClave"
            type="text"
            placeholder="Palabra Clave"
          />
          <Form.Label column sm={1} className="Fecha">
            Fecha
          </Form.Label>
          <Form.Control className="fechaSelect" id="fecha" type="date" />
          <Form.Select className="tutorSelect" aria-label="Default select example">
            <option>Tutor</option>
            {/* {console.log(store.tutores)}
            {console.log("HOLAAAAA")} */}
            {store.tutores.map((tutor, index) => {
              return (
                <option key={index} value={index}>
                  {tutor.name.first + " " + tutor.name.last}
                </option>
              );
            })}
          </Form.Select>
        </Form>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success buscarButton"
            form="myForm"
            type="submit"
            style={{ marginTop: "25px" }}
          >
            Buscar
          </button>
        </div>
      </div>
      <div>
        <hr className="mb-2" />
        <Carousel
          variant="dark"
          style={{ backgroundColor: "white" }}
          nextIcon={
            <i className="fas fa-chevron-circle-right carouselNext"></i>
          }
          prevIcon={<i className="fas fa-chevron-circle-left carouselNext"></i>}
          // onSlide={(eventKey, direction) => handleDirection(direction)}
          onSlid={(eventKey, direction) => handleDirection(direction)}
        >
          {slides.map((slide, index) => {
            // {store.planets.map((planet,index) => {
            return (
              <Carousel.Item key={slide}>
                <div className="d-flex">
                  {store.clases
                    .filter(
                      (clase, index) =>
                        index >= cardIndex && index < cardIndex + offset
                    )
                    .map((clase, index) => {
                      return (
                        <Card key={clase.name} className="cardClass text-center">
                          <Card.Img
                            variant="top"
                            src={clase.url}
                            style={{
                              objectFit: "contain",
                              // borderRadius: 55,
                              // width: "50vw",
                              paddingTop: "2px",
                              height: "100px",
                              // border: "1px solid red",
                            }}
                          />
                          <Card.Body>
                            <Card.Title>{clase.name}</Card.Title>
                            <Card.Text
                              style={{
                                height: "100px",
                              }}
                            >
                              {clase.description}
                            </Card.Text>
                            <Button className="Button5" variant="success">
                              Ver
                            </Button>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};



  // const getToDo = async () => {
  //   let response = await fetch("https://swapi.dev/api/people", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
  //   let data = await response.json();
  //   console.log(data.results);
  //   return data.results;
  // };
  // const tutores = getTodo();
  // console.log(tutores);


          {/* <div className="d-flex">
          <span className="p-2 center-label">
            <i className="fa fa-star "></i>
          </span>
          <h1 className="p-2 flex-grow-1">Clases disponibles</h1>
        </div> */}


  // const clases = [
  //   {
  //     name: "clase 1",
  //     description: "Curso basico de HTML",
  //     url: html1Url,
  //   },
  //   {
  //     name: "clase 2",
  //     description: "Curso avanzado de HTML",
  //     url: html2Url,
  //   },
  //   {
  //     name: "clase 3",
  //     description: "Curso basico de CSS. Aprende a dar estilo a tus paginas.",
  //     url: css1Url,
  //   },
  //   {
  //     name: "clase 4",
  //     description:
  //       "Curso CSS avanzado. Aprende todo acerca de los selectores y mucho mas.",
  //     url: css2Url,
  //   },
  //   {
  //     name: "clase 5",
  //     description:
  //       "Curso basico de JS. Lo que necesitas saber para dar accion a tu pagina",
  //     url: js1Url,
  //   },
  //   {
  //     name: "clase 6",
  //     description: "Curso de JS avanzado",
  //     url: js2Url,
  //   },
  //   {
  //     name: "clase 7",
  //     description: "Curso completo de HTML, CSS y JS.",
  //     url: completoUrl,
  //   },
  // ];