import React,{useState} from 'react'

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const ModalForm = (CRUD,call) => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>{CRUD}</h2>
                <div>Nhập thông tin ghi chú mà bạn mong muốn</div>
                <form>
                    <input 
                        placeholder="Tiêu đề"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    
                    <input 
                        placeholder="Nội dung"
                        onChange={(e)=>setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Ghi chú"
                        onChange={(e)=>setNote(e.target.value)}
                    />
                    <button onClick={()=> dispatch(call(title,description,note))}>OK</button>
                </form>
                
                <button onClick={closeModal}>close</button> 
        </Modal>
      </div>
    );
}

export default ModalForm
