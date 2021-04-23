import React,{useEffect, useState} from 'react'
import Modal from 'react-modal'
import {useDispatch,useSelector} from 'react-redux'
import {getQuestions,addQuestion,updateQuestion,deleteQuestion} from '../action'
import { Icon } from 'semantic-ui-react'

const Lab13 = () => {

    const question = useSelector(state => state.question)
    const dispatch  = useDispatch()

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [note,setNote] = useState('')
    console.log(title,description,note);
    console.log(question);

    useEffect(()=>{
        dispatch(getQuestions())
    },[])

    // const TableProvider = () =>{
    //     return question.map((item)=>{
    //         return (
    //             <div key={item.title} className ="item">
    //                 {/* <div className ="left floated content">
    //                     {item.title}
    //                 </div> */}
    //                 <div className ="content">
    //                     {item.description}
    //                 </div>
                   
    //             </div>
    //          )
    //     })
    // }


    Modal.setAppElement('#root')

    
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [modalUpdateIsOpen,setUpdateIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openUpdateModal() {
        setUpdateIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    function closeUpdateModal(){
        setUpdateIsOpen(false);
    }


        return (
            
            <div>
                <div>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Thêm ghi chú</h2>
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
                    <button onClick={()=> dispatch(addQuestion(title,description,note))}>OK</button>
                </form>
                
                <button onClick={closeModal}>close</button>
                </Modal>
            </div>

            <div>
                
            </div>
            
            <table className="ui table segment">
                <thead>
                    <tr><th>Title</th>
                    <th>Mô tả</th>
                    <th>Ghi chú</th>
                    <th><button onClick={openModal}> <Icon name='plus' /></button></th>
                
                </tr></thead>
                <tbody>
                {question.map(ques =>
                    ques.map(item => 
                        (<tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.note}</td>
                        <td> 
                            <button onClick={openUpdateModal}> <Icon name='edit' /> {item._id}</button> 
                            <button onClick={deleteQuestion(item._id)}> <Icon name ='delete'/>  </button> 
                        </td>
                        </tr>)      
                        )  
                    )
                    
                }                        
                </tbody>
                </table>
            </div>     
        )
    }

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

export default Lab13
