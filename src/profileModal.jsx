import React, { Fragment } from 'react';
import './profileModal.css'
import { useForm } from "react-hook-form";

export function ProfileModel(props){
    const {register,handleSubmit}=useForm()
    const onSubmit = data =>{ 
        let user={
            id: props.userModal?props.userModal.id:undefined,
            first: data.first,
            last: data.last,
            dob: data.dob,
            married: data.married,
            picUrl: data.picUrl
        }
        props.modifyUserList(user)
    };
    console.log(props.userModal)
return(
<Fragment>
    <div className="modal">
    <div className="modal-content">
    {/* <span className="close">&times;</span> */}
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="file" {...register("picUrl")} value={props.userModal?props.userModal.first:""}/> */}
      <input type="text" {...register("first")} value={props.userModal?props.userModal.first:""} />
      <input type="text" {...register("last")} value={props.userModal?props.userModal.last:""}/>
      <input type="text" {...register("dob")} value={props.userModal?props.userModal.dob:""}/>
      <select {...register("married")} value={props.userModal?props.userModal.married:""}>
        <option value="true">married</option>
        <option value="false">single</option>
      </select>
      <input type="submit" />
    </form>
    </div>
    </div>
</Fragment>)
}