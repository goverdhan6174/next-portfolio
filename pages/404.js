import Link from "next/link";
import {
  BoxContainer,
  ErrorH1,
  ErrorTextContainer,
  ErrorH2,
} from "../styles/customStyles";
import { Center } from "../styles/MaterialStyles";
import useCursorAction from "../context/actions/cursorActions";

export default function FourZeroFour() {
  let { changeCursorType, changeCursorState } = useCursorAction();
  return (
    <BoxContainer
      fluid={false}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Center>
        <ErrorH1>404</ErrorH1>
        <ErrorTextContainer>
          <ErrorH2>This page could not be found.</ErrorH2>
          <Link href="/">
            <a
              onMouseEnter={() => changeCursorType("HOVERED")}
              onMouseLeave={() => changeCursorType("NORMAL")}
            >
              Go back home
            </a>
          </Link>
        </ErrorTextContainer>
      </Center>
    </BoxContainer>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
