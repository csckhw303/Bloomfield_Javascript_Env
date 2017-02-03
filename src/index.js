import "./index.css";
import numeral from "numeral";
import {getUsers} from "./api/userApi";

const courseValue = numeral(1000).format("$0,0.00");
console.log(`I would pay ${courseValue} for it`);

getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    })
    global.document.getElementById('users').innerHTML = userBody;
})