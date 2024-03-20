import React, { useState } from "react";
import arrdown from "./assets/images/arrdown.svg";

const About = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="about-container">
          <div
            className="about-product"
            onClick={() => setIsActive1(!isActive1)}
          >
            <div id="prodBtn" className="prod-btn">
              <h3>О ПРОДУКТЕ</h3>
              <img className="arrow" src={arrdown} alt="arrow down" />
            </div>
            <div
              className={isActive1 ? "product-inf inf-active" : "product-inf"}
            >
              <p>
                <b>
                  Инновация в области гигиены полости рта, получившая два
                  патента.
                </b>
                <br />
                <br />
                Обеспечивает эффективный и безопасный уход. Производство
                небольшой сменной части обходится дешевле, чем целой зубной
                щётки, что позволяет нашим пользователям значительно экономить
                на покупке без потери качества чистки зубов, а также сократить
                выбросы потребляемого пластика.
                <br />
                <br />
                Комфорт во время пользования обеспечивает удобная форма ручки с
                матовой поверхностью, исключающая скольжение. Выверенная по всем
                стоматологическим стандартам сменная чистящая часть ...
              </p>
            </div>
          </div>
          <div
            className="about-company"
            onClick={() => setIsActive2(!isActive2)}
          >
            <h3>О КОМПАНИИ</h3>
            <img className="arrow" src={arrdown} alt="arrow down" />

            <div
              className={isActive2 ? "company-inf inf-active" : "company-inf"}
            >
              <p>
                Стоматологические инновации — российская компания, внедряющая
                уникальные решения в повседневные предметы гигиены полости рта.
                Запатентованная продукция разрабатывается совместно со
                стоматологами, опираясь на исследования с доказанной
                эффективностью, что позволяет обеспечить тщательный и безопасный
                уход за полостью рта, а наши технологии позволяют рационально
                использовать природные ресурсы, при этом экономя средства и
                время пользователей.
              </p>
            </div>
          </div>
        </div>
        <div className="contacts">
          <ul>
            <h5>Контакты</h5>
            <li>
              <a href="/">stominn@mail.ru</a>
            </li>
            <li>
              <a href="/">Instagramm</a>
            </li>
            <li>
              <a href="/">VK</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
