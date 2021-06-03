import React from 'react';
import  './adduser.css'


export function AddUser(){
 
    return (
        <div className="container">
        <div className="heading">Add a User</div>    
        <div className="grid">
            <div className="profilePic">
            <i className="fa fa-upload"></i>
            </div>
            <div className="first form__group">
            <input type="input" class="form__field" placeholder="first" name="first" id='first' required />
                <label for="first" class="form__label">First</label>
            </div>
            <div className="last form__group">
            <input type="input" class="form__field" placeholder="last" name="last" id='last' required />
                <label for="last" class="form__label">Last</label>
            </div>
            <div className="dob form__group">
            <input type="date" class="form__field"  name="dob" id='dob' required placeholder=""/>
                <label for="dob" class="form__label">Date of Birth</label>
            </div>
            <div className="married form__group">
            <select type="input" class="form__field" placeholder="married" name="married" id='married' required >
                  <option>Yes</option>
                  <option>No</option>
                      </select>
                <label for="married" class="form__label">Married</label>
            </div>

        </div>
        </div>
    )

}