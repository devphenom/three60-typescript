import { H1 } from "../Globals.styles";
import { StyledHero } from "./Hero.style";

export const Hero = () => {
  return (
    <StyledHero>
      <div id="hero-row">
        <H1>Track how far you've gone</H1>
        <div id="col-2">
          <div>
            {/* <PlaylistAddCheckIcon /> */}
            Todos
          </div>
          <div>
            {/* <Icon icon={faStickyNote} /> */}
            Notes
          </div>
          <div>{/* <Icon icon={faBookmark} /> Bookmarks */}</div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          pariatur distinctio at natus fugit quaerat quod quo veniam magnam
          sapiente.
        </p>
      </div>
    </StyledHero>
  );
};
