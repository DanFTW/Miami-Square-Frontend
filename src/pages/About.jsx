import { FaMapMarkerAlt } from "react-icons/fa";
import {
  Header,
  SubHeader,
  CardAbout,
  InfoCont,
  Info,
} from "../styles/styles";

export default function About() {
  return (
    <>
      <CardAbout>
        <InfoCont id="about-info-cont">
          <Info id="about-info">
            <Header id='card-header' >Website</Header>
            <SubHeader id='card-sub'>https://</SubHeader>
          </Info>
          <Info id="about-info">
            <Header id='card-header'>Florida International University</Header>
            <SubHeader id='card-sub'>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur take root and flourish Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium hydrogen atoms Ut enim ad minima veniam extraordinary claims require extraordinary evidence. Two ghostly white figures in coveralls and helmets are softly dancing inconspicuous motes of rock and gas rich in mystery paroxysm of global death ship of the imagination permanence of the stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.</SubHeader>
          </Info>
          
        </InfoCont>
      </CardAbout>
    </>
  );
}
