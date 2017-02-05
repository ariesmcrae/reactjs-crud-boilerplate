import './index.css';

import {getUsers} from './api/userApi';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>            
        </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;

});
