import styled from "styled-components";
import logos from "../assets/logo/footer-logo.svg";

const LogoCont = styled.div`
  border-top: 1.5rem solid #00979c;
  margin-top: 1.5rem;
`;

export default function Footer() {
  return (
    <>
      <LogoCont>
        <img src={logos} id='footer-logo' />
      </LogoCont>
    </>
  );
}
