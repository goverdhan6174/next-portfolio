import React, { useRef, useEffect } from "react";
import { Canvas } from "../../styles/MaterialStyles";

import useWindowSize from "../../hooks/useWindowSize";

import { useGlobalContext } from "../../context/globalContext";
import useCursorAction from "../../context/actions/cursorActions";

function CanvasElement() {
  let globalContext = useGlobalContext();
  let cursorType = useCursorAction().changeCursorType;
  let currentTheme: string = "dark";
  let canvasColor: { dark: string; light: string } = {
    dark: "red",
    light: "hotpink",
  };
  if (!!globalContext) {
    currentTheme = globalContext?.state.currentTheme;
    canvasColor = globalContext?.state.canvasColor;
  }

  let canvasRef = useRef(null);

  let windowSize = useWindowSize();

  useEffect(() => {
    let renderElement: any = canvasRef.current;
    let moving: boolean = false;

    if (renderElement != null) {
      let lastX: number, lastY: number, currentX: number, currentY: number;

      //get DPI
      // let dpi = window.devicePixelRatio;
      // my current device dpi
      let dpi = 1;

      // Scale the inner drawling surface to the same get CSS height
      //+ prefix casts it to an integer the slice method gets rid of "px"

      let style_height = +getComputedStyle(renderElement)
        .getPropertyValue("height")
        .slice(0, -2);
      //get CSS width
      let style_width = +getComputedStyle(renderElement)
        .getPropertyValue("width")
        .slice(0, -2);

      // scale the canvas
      renderElement.setAttribute("height", style_height * dpi);
      renderElement.setAttribute("width", style_width * dpi);

      //alternate to useWindowSize
      let drawing_height = +getComputedStyle(renderElement)
        .getPropertyValue("height")
        .slice(0, -2);
      //get CSS width
      let drawing_width = +getComputedStyle(renderElement)
        .getPropertyValue("width")
        .slice(0, -2);

      const renderContext: CanvasRenderingContext2D = renderElement.getContext(
        "2d"
      );

      renderContext.globalCompositeOperation = "source-over";
      renderContext.fillStyle =
        currentTheme === "dark" ? canvasColor.dark : canvasColor.light;
      renderContext.fillRect(0, 0, drawing_width, drawing_height);

      renderElement.addEventListener("mouseover", (e: React.MouseEvent) => {
        moving = true;
        lastX = Number(e.pageX - renderElement.offsetLeft);
        lastY = Number(e.pageY - renderElement.offsetTop);
      });

      renderElement.addEventListener("mouseleave", (e: React.MouseEvent) => {
        moving = false;
        lastX = Number(e.pageX - renderElement.offsetLeft);
        lastY = Number(e.pageY - renderElement.offsetTop);
      });

      renderElement.addEventListener("mousemove", (e: React.MouseEvent) => {
        if (moving) {
          renderContext.globalCompositeOperation = "destination-out";

          currentX = Number(e.pageX - renderElement.offsetLeft);
          currentY = Number(e.pageY - renderElement.offsetTop);

          renderContext.beginPath();
          renderContext.lineJoin = "round";
          renderContext.moveTo(lastX, lastY);
          renderContext.lineTo(currentX, currentY);
          renderContext.closePath();
          renderContext.lineWidth = 100;
          renderContext.stroke();
          renderContext.save();
          // renderContext.restore();

          lastX = currentX;
          lastY = currentY;
        }
      });
    }
  }, [
    canvasRef,
    windowSize,
    currentTheme,
    canvasColor.dark,
    canvasColor.light,
  ]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseEnter={() => cursorType("HOVERED")}
      onMouseLeave={() => cursorType("NORMAL")}
    />
  );
}

export default CanvasElement;
