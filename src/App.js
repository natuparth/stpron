
import './App.css';
import { useState } from 'react';
import { UserList } from './userList';
import { AddUser } from './adduser';
import { Modal , Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const initialState = [{
  id: 1,
  first: 'Parth',
  last: 'Natu',
  dob: new Date('01/01/1997').toDateString(),
  married: false,
  picUrl: './assets/parth.jpeg'
}]

const newObj = {
  id: "",
  first: "",
  last: "",
  dob: "",
  married: false,
  picUrl: ''
}

function App() {
  const [userList, setHandler] = useState(initialState)

  const [modalFlag, setmodalFlag] = useState(false)
  const [userObject, setUserObject] = useState(newObj)



  const modifyUserListHandler=(user)=>{
    let index=userList.findIndex(x=>x.id===user.id)    
    let temp=userList;
    if(index > -1){
    temp[index]=user
    }
    else{
      user.id=temp.length+1
    temp.push(user)
    }
   
    setHandler([...temp]);
    setmodalFlag(false)
  }
  const openModalHandler = () => {
    setUserObject(newObj);
    setmodalFlag(true);
  }

  const editUser = (data) => {
    console.log(data)
    setUserObject(data)
    setmodalFlag(true)
  }

  return (
    <>
    <div className="App">
  <UserList users={userList} editUser={(user)=>{editUser(user)}} onUserAdded={()=> openModalHandler()} ></UserList> 
  
    </div>
    <MyModal show={modalFlag} userModal={userObject}
    onHide={() => setmodalFlag(false)} modifyUserList={(user)=>modifyUserListHandler(user)}></MyModal> 
  </>
  );
}

function MyModal(props) {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const {register,handleSubmit}=useForm()
    const onSubmit = data =>{ 
        let user={
            id: props.userModal?props.userModal.id:btoa(Math.random()).substring(0, 12),
            first: data.first,
            last: data.last,
            dob: data.dob,
            married: data.married,
            picUrl: selectedFile? './assets/'+selectedFile.name : (props.userModal.picUrl === ''? './assets/image_part_005.jpg' : props.userModal.picUrl)

        }
        props.modifyUserList(user)
    };
    const changeHandler = (event) => {
      console.log(event.target.files[0]);
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         {!props.userModal.id ? 'Add User': 'Edit User'}
        </Modal.Title>
        <button type="button" className="close" style={{border: 'none', background: 'white'}} 
         onClick={()=>props.onHide()}
        aria-label="Close">
  <span aria-hidden="true"><i className="fa fa-times"></i></span>
</button> 
      </Modal.Header>
      <Modal.Body>
      <div className="container">
         
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
           
             <div className="picture"> 
             {props.userModal.picUrl && isFilePicked === false ?   <img src={props.userModal.picUrl} /> : ''}
             {isFilePicked===true ?  <img src={'./assets/'+selectedFile.name} alt="Please upload a file from assets folder" /> : ''}
             {!isFilePicked===true && props.userModal.picUrl === "" ?  <i className="fa fa-upload fa-3x"></i> : ''}
             </div>
             <div className="uploadButton">
            {/* <input type="file" name="file" className="custom-file-input" onChange={changeHandler} /> */}
           <input type="file" name="uploadfile" id="img" style={{display:'none'}} onChange={changeHandler} />
<label className="uploadLable" htmlFor="img">Upload Profile</label>
            </div>
            <div className="first form__group">
            <input type="input" {...register("first")} defaultValue={props.userModal != ''?props.userModal.first:""} className="form__field" placeholder="first" name="first" id='first' required />
                <label htmlFor="first" className="form__label">First</label>
            </div>
            <div className="last form__group">
            <input type="input" {...register("last")} defaultValue={props.userModal != ''?props.userModal.last:""} className="form__field" placeholder="last" name="last" id='last' required />
                <label htmlFor="last" className="form__label">Last</label>
            </div>
            <div className="dob form__group">
            <input type="date" {...register("dob")} defaultValue={props.userModal?props.userModal.dob:""} className="form__field"  name="dob" id='dob' required placeholder=""/>
                <label htmlFor="dob" className="form__label">Date of Birth</label>
            </div>
            <div className="married form__group">
            <select {...register("married")}  defaultValue={props.userModal?props.userModal.married:"No"} type="input" className="form__field" placeholder="married" name="married" id='married' required >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                      </select>
                <label htmlFor="married" className="form__label">Married</label>
            </div>
            <div className="footer">
            <Button type="submit" onClick={props.onHide}>Upload User</Button>
            </div>
        </div>
        </form>
        </div>
   
      </Modal.Body>
      
    </Modal>
  );
}

export default App;
