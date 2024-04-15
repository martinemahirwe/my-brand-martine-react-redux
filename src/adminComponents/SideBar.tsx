import { BsHouseDoor, BsPersonCheck, BsBook, BsChat } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../slices/Hooks';
import { setIsOpen,setIsOpen1,setIsOpen2 } from '../slices/modalSlice';
import Modal1 from './modals/Modal1';
import Modal2 from './modals/Modal2';
import Modal3 from './modals/Modal3';

const SideBar = () => {
  const openModal = useAppSelector(state => state.modals.openModal1);
  const openModal2 = useAppSelector(state => state.modals.openModal2);
  const openModal3 = useAppSelector(state => state.modals.openModal3);
  const dispatch = useAppDispatch();

  const openModel = (state : boolean) => {
    dispatch(setIsOpen(!state));
    console.log("Model is opened");
  };
  const openModel1 = (state : boolean) => {
    dispatch(setIsOpen1(!state));
    console.log("Model is opened");
  };
  const openModel2 = (state : boolean) => {
    dispatch(setIsOpen2(!state));
    console.log("Model is opened");
  };

  return (
    <>
      <Modal1
        title="Add Articles"
        open={openModal}
        onProceed={() => {
          console.log("Proceed action");
        } }
        onClose={() => {
          dispatch(setIsOpen(false)); 
          console.log("Model is closed");
        } } children={undefined} />
         <Modal2
        open={openModal2}
        onProceed={() => {
          console.log("Proceed action");
        } } onClose={() => {
          dispatch(setIsOpen1(false)); 
          console.log("Model is closed");
        } }
       children={'Conversations'}  />
        
        <Modal3
        title="Manage Articles"
        open={openModal3}
        onProceed={() => {
          console.log("Proceed action");
        } }
        onClose={() => {
          dispatch(setIsOpen2(false)); 
          console.log("Model is closed");
        } } />

      <div className="side-bar">
        <div className="content">
          <div className="h2 home"><a href="#">Mchance</a></div>
          <div id="home" className="icon">
            <BsHouseDoor color="#DF7822" />
            <p className="p1">Home</p>
          </div>
          <div id="manage-art" className="icon" onClick={() => openModel2(openModal3)} >
            <BsPersonCheck color="#DF7822" />
            <p>Manage Articles</p>
          </div>
          <div id="create-art" className="icon" onClick={() => openModel(openModal)}>
            <BsBook color="#DF7822" />
            <p>Add Articles</p>
          </div>
          <div id="conver" className="icon" onClick={openModel1.bind(null, openModal2)}>
            <BsChat color="#DF7822" />
            <p>Conversations</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
