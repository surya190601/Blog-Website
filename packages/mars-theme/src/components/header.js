import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "@frontity/components/image";
const Header = ({ state }) => {
  return (
    <>
      <StyledLink link="/">
        <StyledLogo
          alt="Logo"
          src="https://i.ibb.co/mGKKqNt/logo-color-2.png"
        />
      </StyledLink>
      <MobileMenu />
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogo = styled(Image)`
  width: 142.83px;
  height: 24px;
`;
