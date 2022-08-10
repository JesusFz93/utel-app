import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header title="Esta es la pagina acerca de" subtitle="About page" />
      <main className="row">
        <article className="col">
          <p>Pagina donde se encuentra informacion adicional</p>
        </article>
      </main>
    </>
  );
};

export default AboutPage;
