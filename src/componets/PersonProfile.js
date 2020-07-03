import React, { useContext } from 'react';
import PersonContext from './PersonContext';


const PersonProfile = () => {

    const { users } = useContext(PersonContext);
    // console.log(item.dob.date)
    // const formatDob = () => {
    //             var dob = item.dob.date;
    //             var d = dob.slice(0,10).split('-');
    //             d[1] + '/' + d[2] + '/' + d[0];  
    //             return d;            
    //     }
  
            return (
                
            <div style={profileStyle}>
                <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                {users.map((item) => {
                    const date = new Date(item.dob.date);
                     
                    const formatDate = date.toLocaleDateString();
                    //console.log(date.toLocaleDateString())
                    return(
                        <tbody>
                            <tr>
                                <th> <img src={item.picture.thumbnail}></img></th>
                                <td>{item.name.first} {item.name.last}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{formatDate}</td>
                            </tr>
                        </tbody>
                                           
                    )
                })}
                </table>
            </div>
    
            )
}

const profileStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
}

export default PersonProfile;
