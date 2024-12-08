import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
  };

//login API call
const Login=(user)=>{
    axios.post('http://localhost:8080/auth/login', user,{headers})
        .then(response=> (response.data))
        .catch(err=>err.message);
}

export{
    Login
}