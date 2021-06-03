import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { UserList} from './userList';
import Modal from 'react-bootstrap/Modal'
import { ProfileModel } from './profileModal';

const initialState = [{
  id: 1,
  first: 'Parth',
  last: 'Natu',
  dob: '01/01/1997',
  married: false,
  picUrl: './assets/parth.jpeg'
}]
function App() {
  const [userList, setHandler] = useState(initialState)
  
  const [userModal, setUserModalHandler] = useState({})
  
  const [modalFlag, setmodalFlag] = useState(false)
  // useEffect(async() => {
  //   let  temp = userList.map(async(elem) => {
  //       return {...elem, picUrl:await import(elem.picUrl)}
  //     })
  //     setHandler(temp);

  // },[])
  // const addUserHandler = (user) => {
  //   console.log(user);
  //   let temp = userList;
  //   temp.push(user)
  //   setHandler([...temp]);
  //   console.log(userList);
  // }
  const onUserDeleteHandler=(id)=>{
    let index=userList.findIndex(x=>x.id===id)
    let temp=userList;
    temp.splice(index,1)
    setHandler([...temp]);
  }
  const onUserEditHandler=(user)=>{
    setUserModalHandler(user)
    setmodalFlag(true)
  }
  const modifyUserListHandler=(user)=>{
    let index=userList.findIndex(x=>x.id===user.id)    
    let temp=userList;
    if(index){
    temp[index]=user
    }
    else{
      user.id=temp.length+1
    temp.push(user)
    }
    setHandler([...temp]);
    setmodalFlag(false)
  }

  return (
    <div className="App">
      {modalFlag && <ProfileModel userModal={userModal} modifyUserList={modifyUserListHandler}></ProfileModel>}
      <UserList users={userList} onUserDelete={onUserDeleteHandler} onUserEdit={onUserEditHandler}></UserList>
    </div>
  );
}

export default App;
