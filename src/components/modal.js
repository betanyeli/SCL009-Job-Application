import React from 'react';
import '../App.css';

const Modal = ({ handleClose, show, img }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
            <div className="button-group">
            <i className="fas fa-ellipsis-h icon-group"></i>
            <button className="send-button">Enviar</button>
            <button className="save-button">Guardar</button>
            <i className="fas fa-times" onClick={handleClose}></i>
            </div>


       <img className="img-style" src={img} />

        </section>
      </div>
    );
  };

  export default Modal;
  