import React from 'react';
import '../App.css';

const Modal = ({ handleClose, show, img }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="container-modal">
        <section className='modal-main'>
          <div className="button-group">
            <i className="fas fa-ellipsis-h icon-group"></i>
            <button className="btn-guardar"><i className='fas fa-thumbtack' style={{ fontSize: '15px' }}></i>  Guardar</button>
            <button className="btn-enviar"><i className='fas fa-upload' style={{ fontSize: '15px' }}></i>  Enviar</button>

            <i className="fas fa-times" onClick={handleClose}></i>
          </div>


          <img className="img-style" src={img} alt="" />

        </section>
      </div>

    </div>
  );
};

export default Modal;
