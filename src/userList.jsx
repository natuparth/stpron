import React, { Fragment } from 'react';
import image from './assets/2.jpg';
import './list.css';
const married = {
    'true': <div><span>Yes</span><p className="emoji">&#128512;</p></div>,
     'false': <Fragment><span>No</span><span className="emoji">&#128543;</span></Fragment>
}
const headings = ['id', 'first', 'last', 'dob', 'married', 'profile']
export function UserList(props){
   const headingElement = headings.map(data => <div>{data}</div>)
   headingElement.push(<div className="button"><button onClick={()=>props.onUserEdit()}>Add User</button></div>)
    // props.users.forEach(elem => {
    //     import(elem.picUrl).then(image => elem.picUrl = image)
    // })

 return (
     <Fragment>
  <div className="list header">
  {
       headingElement
  }
  </div>
  <div>
    {
        props.users.map((user)=>{
          return <div className="list listElement">
              <div>{user.id}</div>
              <div>{user.first}</div>
              <div>{user.last}</div>
              <div>{user.dob}</div>
              <div>{user.married ? married.true: married.false}
              
              </div>
              <div><img src={process.env.PUBLIC_URL + user.picUrl} width="100px" height="100px" /></div>
              
              <div className="button"><button onClick={()=>props.onUserEdit(user)}>Edit</button></div>
              <div className="button"><button onClick={()=>props.onUserDelete(user.id)}>Delete</button></div>

          </div>
        })
    }
  </div>    
  </Fragment>

 )

}