import React, { useState, useEffect } from 'react';
import NavBarAdmin from '../Admin/NavBarAdmin';
import Footer from '../Footer';

const Admin = ()=> {
    const [userID, setUserID] = useState();
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const [isCreating, setIsCreating] = useState(false);

    const reset = () => {
        setIsCreating(false);
        setUserID();
        setUserName('');
        setEmail('');
    };
    const loadUsers = async () => {
        fetch('http://localhost:5000/user/', {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }),
            })
            .then((res) => res.json())
            .then((json) => {
                //props.updateToken(data.sessionToken);
                console.log(json)
                if(json.message === "Displaying All User's"){
                // console.log("username and or password is incorect")
                setUsers(json.users);
                } else {
                    localStorage.setItem('token', json.sessionToken)
                    
                } 
            });
    };
    useEffect(() => {
        reset();
        (async () => await loadUsers())();
    }, []);

    let onCreateUser = (e) => {
        e.preventDefault();
        setIsCreating(true);
    };

    let onCreatePerson = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/user/register', {
            method: "POST",
            body: JSON.stringify({ userName, email, }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }),
            })
            .then((res) => res.json())
            .then(async (json) => {
                console.log(json)
                if(json.message === "Incorrect username or password"){
                    //console.log("username and or password is incorect")
            //       document.getElementById('errorMessage').innerHTML = "Username and or email is Incorrect. Please try again."
                } else{
                    //document.getElementById('errorMessage').innerHTML = "Congragulations"
                    reset();
                    await loadUsers();
                }  
            });
    };

    const onDeletePerson = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }),
            })
            .then((res) => res.json())
            .then(async (json) => {
                console.log(json)
                if(json.message === "Failed to delete user"){
                    //console.log("username and or password is incorect")
                   // document.getElementById('errorMessage').innerHTML = "Username and or email is Incorrect. Please try again."
                } else{
                   // document.getElementById('errorMessage').innerHTML = "Congragulations"
                    reset();
                    await loadUsers();
                }  
            });
    };

    const onUpdatePerson = () => {
        fetch(`http://localhost:5000/user/${userID}`, {
            method: "PUT",
            body: JSON.stringify({ userName, email, }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            })
            .then((res) => res.json())
            .then(async (json) => {
                console.log(json)
                if(json.message === "Incorrect username or password"){
                    //console.log("username and or password is incorect")
                    document.getElementById('errorMessage').innerHTML = "Username and or email is Incorrect. Please try again."
                } else{
                    document.getElementById('errorMessage').innerHTML = "Congragulations"
                    reset();
                    await loadUsers();
                }  
            });
    };
    
    const onCancel = () => {
        reset();
    };

    const onUpdateClick = (u) => {
        setUserName(u.userName);
        setEmail(u.email);
        setUserID(u.id);
    }
    return(
        <div>
            <NavBarAdmin />
        <div className="mb-5">
            <h1 className="mt-5 lead fs-1">Admin Portal</h1>
            <p className="lead">Create, Add, Update and Delete User Accounts</p>
            </div>
        <button className="btn btn-outline-primary btn-lg mb-5" onClick={onCreateUser}>
            Create New User
        </button>
        { (isCreating || userName) &&
        <div className="card mx-auto" style={{
            maxWidth: "40rem",
            maxHeight: '60rem',
            margin: 'auto 20%',
            padding: '2rem'

        }}>
            <div className="card-body">
                <h5 className="card-title lead fs-1">Create User</h5>
                <input className="form-control mb-3" placeholder="User Name" value={userName ? userName : '' } onChange={(e) => setUserName(e.target.value)} />
                <input className="form-control" placeholder="Email" value={email ? email : '' } onChange={(e) => setEmail(e.target.value) } />
                <button onClick={ userID ? onUpdatePerson : onCreatePerson} className="btn btn-outline-primary card-link mt-3">{userID ? 'Update' : 'Create'}</button>
                <button onClick={onCancel}className="btn btn-outline-danger card-link mt-3" >Cancel</button>
            </div>
            <div id="errorMessage"> </div>
        </div>
}
{ !isCreating && !userName &&
        <table className="table mx-auto table-striped table-hover"
        style={{
            margin: 'auto 7rem'
        }}
        >
            <thead>
                <tr>
                    <td className="lead fs-2">User Name</td>
                    <td className="lead fs-2">Email</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
           {users.map((i,ii) => {
               return (
                   <tr key={`${ii}`}>
                       <td className="lead">{i.userName}</td>
                       <td className="lead">{i.email}</td>
                       <td><button onClick={() => onDeletePerson(i.id) }className="btn btn-outline-danger">Del</button></td>
                       <td><button onClick={() => onUpdateClick(i)}className="btn btn-outline-success">Update</button></td>
                    </tr>
               )
           })}
           </tbody>
        </table>
}
<Footer />
        </div>
    )
}

export default Admin;