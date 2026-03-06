import { MiniNavbar } from "@/components/ui/mini-navbar";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "My I Made", href: "#my-i-made" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return <MiniNavbar brandName="Abhinav.mp" navLinks={navLinks} />;
};

export default Navbar;
