"use client";

import { IconButton } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MoveToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTopButton = () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div
      className="move-up-icon-wrapper"
      style={{
        transition: "opacity 0.3s ease-in-out",
        zIndex: "999",
      }}
      onClick={scrollToTopButton}
    >
      <IconButton sx={{ position: "absolute", bottom: 20, right: 20 }}>
        <KeyboardArrowUpIcon sx={{ fontSize: { xs: 40 } }} color="primary" />
      </IconButton>
    </div>
  );
};

export default MoveToTop;
