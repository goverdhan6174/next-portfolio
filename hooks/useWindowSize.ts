import { useState, useEffect, useCallback } from "react";

type WindowSizeType = { width: number | undefined; height: number | undefined };
// Hook
function useWindowSize(): WindowSizeType {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
  ///// to implement just called the hook useWindowSize and it will return the size
}

export default useWindowSize;

//client OS

/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */

// function getMobileOperatingSystem() {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
//     {
//       return 'iOS';

//     }
//     else if( userAgent.match( /Android/i ) )
//     {

//       return 'Android';
//     }
//     else
//     {
//       return 'unknown';
//     }
//   }
