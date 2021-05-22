import { useGlobalContext } from "../globalContext";

function useToggleTheme() {
  let globalContext = useGlobalContext();

function toggleTheme() {
  if (!!globalContext) {
    globalContext?.dispatch({
      type: "TOGGLE_THEME",
    });
  }
}
 
  return toggleTheme;
}

export default useToggleTheme;
