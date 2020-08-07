import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/38674533?s=460&u=8094d0e0263bd97f593becf945e36dd85a664eea&v=4"
          alt="Artur Oscar"
        />
        <div>
          <strong>Artur Oscar</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Entusiasta de tecnologia.
        <br /> <br />
        Viciado em café e xadrez.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
