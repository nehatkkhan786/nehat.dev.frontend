import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


const links = [
  { id: 1, title: "About", path: "#about" },
  { id: 2, title: "Skills", path: "#skills" },
  { id: 3, title: "Projects", path: "#projects" },
  // { id: 4, title: "Blog", path: "/blog" },
];

const NavLinks = () => {

  return (
    
    links.map((link) => {
    return (
      <Link
        key={link.id}
        href={link.path}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Typography
          sx={{
            fontSize: 14,
            cursor: "pointer",
            textTransform: "uppercase",
            transition: "color 0.2s ease-in-out",
            ":hover": {
              color: "#E95420",
              transition: "color 0.2s ease-in-out",
            },
          }}
        >
          {link.title}
        </Typography>
      </Link>
    );
})
  );
};

export default NavLinks;
