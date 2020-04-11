import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';

import './styles.css';

function OnboardingModal(props) {
    const [modalShow, setModalShow] = React.useState(false);  
    const modalClass = modalShow ? '' : 'ModalBox--hidden'
    const [selected, setSelected] = React.useState(false);
    const history = useHistory();

    return (
    <div className={`ModalBox ${modalClass}`} >
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
                <div className="Modal1_Text">Acceso al Blog</div>
                <div className="Modal_options">
                    <div className={selected==="option0" ? "option0_1" : 'option0'} onClick={() => setSelected("option0")}>
                    <img src="assets/lector.jpeg" alt="point0"/><p>Lector</p></div>
                    <div className={selected==="option1" ? "option1_1" : 'option1'} onClick={() => setSelected("option1")}>
                    <img  src="assets/escritor.jpg" alt="point1"/><p>Urtzi</p></div>
                </div>
                {selected ? 
                <div className="Modal_apply_options">
                <div className="Modal_apply_clean" onClick={()=> history.push('/home')}>Acceso</div>
                <div className="Modal_apply_accept"onClick={()=> history.push('/login')}>Acceso</div>
                </div>
                :
                <div className="Modal_apply">¿Quien eres?</div>
                }        
        </Modal.Body>
      </Modal>
    </div>
    );
  }

  export default OnboardingModal;
