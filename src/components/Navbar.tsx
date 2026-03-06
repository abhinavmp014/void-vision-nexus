import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Code, Lightbulb, Eye, Mail, Wrench } from "lucide-react";

const navItems = [
  { name: "Home", link: "#", icon: <Home size={16} /> },
  { name: "About", link: "#about", icon: <User size={16} /> },
  { name: "Skills", link: "#skills", icon: <Code size={16} /> },
  { name: "Projects", link: "#projects", icon: <Wrench size={16} /> },
  { name: "My I Made", link: "#my-i-made", icon: <Lightbulb size={16} /> },
  { name: "Vision", link: "#vision", icon: <Eye size={16} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={16} /> },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
