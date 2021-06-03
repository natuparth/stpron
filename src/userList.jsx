import React, { Fragment } from 'react';
import image from './assets/2.jpg';
import './list.css';

const married = {
    'true': <div><span>Yes</span><p className="emoji">&#128512;</p></div>,
     'false':<div><span>No</span><p className="emoji">&#128543;</p></div>
}
const headings = ['id', 'first', 'last', 'dob', 'married', 'profile']
export function UserList(props){
   const headingElement = headings.map(data => <div>{data}</div>)
   headingElement.push(<div className="button"><button onClick={()=>props.onUserAdded({'id':12})}>Add User</button></div>)
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
        props.users.map((user, index)=>{
          return <div className="list listElement">
              <div>{index+1}</div>
              <div>{user.first}</div>
              <div>{user.last}</div>
              <div>{user.dob}</div>
              <div>{user.married === "Yes" ? married.true: married.false}
              
              </div>
              <div><img src={process.env.PUBLIC_URL + user.picUrl} width="100px" height="100px" /></div>
          </div>
        })
    }
  </div>    
  </Fragment>

 )

}