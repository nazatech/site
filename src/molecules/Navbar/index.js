import React, { memo } from "react";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar__inside">
          <div class="navbar__logo">
            <strong>
              <small>Igreja Presbiteriana Conservadora</small>
              Jardim São Pedro
            </strong>
          </div>
          <div class="navbar__hamburguer jsHamburguer">
            <div class="line"></div>
          </div>
          <div class="navbar__menu jsMenu">
            <div class="menu">
              <div class="menu__link">
                <a class="jsMenuLink" href="#informativos">
                  Informativos
                </a>
              </div>
              <div class="menu__link">
                <a class="jsMenuLink" href="#onde-estamos">
                  Onde estamos
                </a>
              </div>
              <div class="menu__link">
                <a class="jsMenuLink" href="#conheca">
                  Conheça
                </a>
              </div>
              <div class="menu__link">
                <a class="jsMenuLink" href="#lideres">
                  Pastor
                </a>
              </div>
              <div class="menu__link">
                <a class="jsMenuLink" href="#contribua">
                  Contribua
                </a>
              </div>
              <div class="menu__link">
                <a class="jsMenuLink" href="#contato">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
