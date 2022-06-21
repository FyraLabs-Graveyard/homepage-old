import { Link, styled } from "@nextui-org/react";

const NavbarWrapper = styled("div", {
  display: "flex",
  gap: "$10",
  justifyContent: "center",
  p: "2rem",
});

const NavLink = styled(Link, {
  fontSize: "$lg",
});

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavLink color="text">Home</NavLink>
      <NavLink color="text">Jobs</NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
