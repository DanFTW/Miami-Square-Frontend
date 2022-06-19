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

export default function Experience() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavCont>
        <Link
          to='#'
          onClick={() => setShowModal(true)}
          className="info"
        >
          + Add Experience
        </Link>
        <Modal show={showModal} setShow={setShowModal}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Input type='text' name='experience' label='Title' />
            <Input type='text' name='firm' label='Firm' />
            <Input type='text' name='location' label='Location' />
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
            <Header id='card-header'>Software Developer</Header>
            <SubHeader id='card-sub'>Apple - Full-Time</SubHeader>
            <SubHeader id='card-sub'>Dec 2020 - Present</SubHeader>
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
            <Header id='card-header'>Software Developer</Header>
            <SubHeader id='card-sub'>Apple - Full-Time</SubHeader>
            <SubHeader id='card-sub'>Dec 2020 - Present</SubHeader>
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
