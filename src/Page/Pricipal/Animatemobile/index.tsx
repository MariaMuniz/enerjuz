import React from "react";




import "./mobile.css";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
function Animatemobile() {
  return (
    <div className="mobile">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="Usina1.jpg" alt="Imagem Two" />
          <Carousel.Caption>
            <h1
              style={{
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              Somos a Enerjuz
            </h1>

            <p
              style={{
                color: "#ffffb2",
                fontSize: "1rem",
                marginBottom: "1rem",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Seja sustentável, produza sua própria energia e garanta um futuro
              limpo para todos
              <br></br>
            </p>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="residencial2.png" alt="Imagem Tree" />
          <Carousel.Caption>
            <h1 style={{ fontFamily: "Poppins", animation: "fadeIn 5s" }}>
              Enquanto o sol brilha você economiza!
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "1rem",
                marginBottom: "1rem",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Economize na sua conta de energia com a instalação de um sistema
              solar fotovoltaico.
              <br></br>
            </p>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="imgAgro2.png" alt="Imagem One" />
          <Carousel.Caption>
            <h1 style={{ fontFamily: "Poppins", animation: "fadeIn 5s" }}>
              Economize sem investir.
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "1rem",
                marginBottom: "1rem",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Alugue um sistema fotovoltaico e economize na sua conta de energia
              sem nenhum investimento.
              <p
                style={{
                  color: "#fff",
                  padding: "1rem",
                  fontSize: "1.6rem",
                }}
              >
                Saiba Mais
              </p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Animatemobile;