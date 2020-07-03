import axios from 'axios';

export default {
    //Get all employees
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    },
}