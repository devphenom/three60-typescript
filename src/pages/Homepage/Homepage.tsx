import React, { useState } from "react";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "./Homepage.style";
import { H1, Icon } from "../../components/Globals.styles";
import Login from "../../components/Login/Login";
import { faBookmark, faStickyNote } from "@fortawesome/free-regular-svg-icons";

const Homepage = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <Hero>
      <section id="hero-container">
        <div id="hero-row">
          <H1>Track how far you've gone</H1>
          <div id="col-2">
            <div>
              <Icon icon={faListUl} />
              Todos
            </div>
            <div>
              <Icon icon={faStickyNote} />
              Notes
            </div>
            <div>
              <Icon icon={faBookmark} /> Bookmarks
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            pariatur distinctio at natus fugit quaerat quod quo veniam magnam
            sapiente.
          </p>
        </div>
      </section>

      {authType === "login" ? (
        <Login auth={setAuthType} />
      ) : (
        <div>Hello World</div>
      )}
    </Hero>
  );
};

export default Homepage;
