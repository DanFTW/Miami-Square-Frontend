import Input from "../components/Input";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  Header,
  SubHeader,
  Card,
  InfoCont,
  Info,
  Image,
  NavCont,
  Buttons,
} from "../styles/styles";

export default function Education() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavCont>
        <Link
          to='#'
          onClick={() => setShowModal(true)}
         className="info"
        >
          + Add Education
        </Link>
        <Modal show={showModal} setShow={setShowModal}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Input type='text' name='school' label='School Name' />
            <Input type='text' name='location' label='Location' />
            <Input type='text' name='degree' label='Degree' />
            <Input type='text' name='major' label='Study of Focus' />
            <Input type='text' name='duration' label='Duration' />
            <Input type='text' name='description' label='Description' />
          </ModalBody>
          <ModalFooter>
            <div className='modal__button'>
              <Buttons onClick={() => setShowModal(false)}>Submit</Buttons>
              <Buttons onClick={() => setShowModal(false)}>Cancel</Buttons>
            </div>
          </ModalFooter>
        </Modal>
      </NavCont>

      <Card>
        <Image />
        <InfoCont>
          <Info>
            <Header id='card-header'>Florida International University</Header>
            <SubHeader id='card-sub'>Bachelor of Arts</SubHeader>
            <SubHeader id='card-sub'>Economics</SubHeader>
          </Info>
          <Info>
            <SubHeader id='location'>
              <FaMapMarkerAlt /> Miami, FL., United States
            </SubHeader>
          </Info>
        </InfoCont>
      </Card>
      <Card>
        <Image />
        <InfoCont>
          <Info>
            <Header id='card-header'>Florida International University</Header>
            <SubHeader id='card-sub'>Bachelor of Arts</SubHeader>
            <SubHeader id='card-sub'>Economics</SubHeader>
          </Info>
          <Info>
            <SubHeader id='location'>
              <FaMapMarkerAlt /> Miami, FL., United States
            </SubHeader>
          </Info>
        </InfoCont>
      </Card>
    </>
  );
}
