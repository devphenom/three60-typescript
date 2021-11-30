import { H1 } from "../Globals.styles";
import { StyledHero } from "./Hero.style";
import { TodoIcon, NoteIcon, BookmarkIcon } from "../Icons";
const Hero = () => {
  return (
    <StyledHero>
      <H1>Track how far you've gone</H1>
      <div id="col-2">
        <div className="hero-card">
          <TodoIcon className="icon" />
          <p>Todos</p>
        </div>
        <div className="hero-card">
          <NoteIcon className="icon" />
          <p>Notes</p>
        </div>
        <div className="hero-card">
          <BookmarkIcon className="icon" />
          <p>Bookmarks</p>
        </div>
      </div>
      <p className="hero-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum pariatur
        distinctio at natus fugit quaerat quod quo veniam magnam sapiente.
      </p>
    </StyledHero>
  );
};
export default Hero;
