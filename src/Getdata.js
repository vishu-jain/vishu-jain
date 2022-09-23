import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

export default function Getdata() {
    const [getd, setGetd] = useState([])
    useEffect(()=>{
     axios.get('http://localhost:7600/getData')
     .then((res)=>{
         console.log(res);
       setGetd(res.data);
     }).catch((err)=>{
          console.log(err);
     })
  },[])

    return (
        <footer className="footer">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
        <tbody>
        {
            getd.map((data, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>
        </footer>
    )
}
