import { StyledHomepage } from "./Homepage.style";
// import { H1, Icon } from "../../components/Globals.styles";
import Auth from "../../components/Auth/Auth";
// import { faBookmark, faStickyNote } from "@fortawesome/free-regular-svg-icons";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const Homepage = () => {
  return (
    <StyledHomepage>
      <Auth />
    </StyledHomepage>
  );
};

export default Homepage;
