import React, {useState, useEffect} from "react";

const Main = ({ active, setActive }) => {

  return (
    <div className="container">
      <main>
        <div className="ratio first-card">
          <div className="ratio-inner ratio-2-1">
            <div
              className="ratio-content first-content"
              onClick={() => {
                setActive(true);
              }}
            >
              <div className="first-card-logo">
                <h1>
                  СТОМАТОЛОЛГИЧЕСКИЕ <br /> ИННОВАЦИИ
                </h1>
              </div>
              <div className="first-about card-about">
                <div className="inf">
                  <h3>“Набор на год” </h3>
                  <h6 className="hide-inf">доступно в 4-х цветах</h6>
                </div>
                <hr />
                <div className="buy">
                  <div className="inf show-inf">
                    <h6>доступно в 4-х цветах</h6>
                  </div>
                  <div className="price">
                    <h2>
                      499 <span className="rub">₽</span>
                    </h2>
                  </div>
                  <button className="buy-btn">Купить</button>
                </div>
              </div>
              <div className="back back-1"></div>
            </div>
          </div>
        </div>
        <div class="ratio  second-card">
          <div class="ratio-inner ratio-1-1">
            <div
              class="ratio-content second-content"
              onClick={() => {
                setActive(true);
              }}
            >
              <div className="second-about card-about">
                <div className="inf">
                  <h3>Ручки</h3>
                  <div className="price hide-price">
                    <h2>
                      159 <span className="rub">₽</span>
                    </h2>
                  </div>
                </div>
                <hr />
                <div className="inf show-price">
                  <div className="price">
                    <h2>
                      159 <span className="rub">₽</span>
                    </h2>
                  </div>
                </div>
                <div className="buy">
                  <button className="buy-btn">Купить</button>
                </div>
              </div>
              <div className="back back-2"></div>
            </div>
          </div>
        </div>
        <div class="ratio third-card">
          <div class="ratio-inner ratio-1-1 ">
            <div
              class="ratio-content third-content"
              onClick={() => {
                setActive(true);
              }}
            >
              <div className="third-about card-about">
                <div className="inf">
                  <h3>Щетинки</h3>
                  <div className="price hide-price">
                    <h2>
                      399 <span className="rub">₽</span>
                    </h2>
                  </div>
                </div>
                <hr />
                <div className="inf show-price">
                  <div className="price">
                    <h2>
                      399 <span className="rub">₽</span>
                    </h2>
                  </div>
                </div>
                <div className="buy">
                  <button className="buy-btn">Купить</button>
                </div>
              </div>
              <div className="back back-3"></div>
            </div>
          </div>
        </div>
        <div class="ratio fouth-card">
          <div class="ratio-inner ratio-2-1 ">
            <div class="ratio-content fourth-content">
            <div className="back back-4"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
