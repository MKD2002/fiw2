import React,{ useState} from 'react'
import './Forms.css'
function Forms() {
  const[userData,setUserData]=useState(
    {
      name:"",
      phoneNo:"",
      technologiesKnown:"",
    }
  );
  const postUserData =(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    setUserData({...userData,[name]:value})
  }

const submit=async (event)=>{
event.preventDefault();
const {
  name,
  phoneNo,
  technologiesKnown
}=userData;
const res=await fetch(`https://fixitwizards-default-rtdb.firebaseio.com/${userData.name}.json`,
{
method : "POST",
headers : {
  "Content-Type":"application/json",
},
body:JSON.stringify({
  name,
  phoneNo,
  technologiesKnown
}),
}
);
if(res)
{
  alert("data store hogaya");
  console.log(userData);
}else{
  alert("please fi;; the data");
}
};

  return (
    <div className='forms'>
    <h1 className='formsh1'>Please Enter your Details</h1>
    <div action="" className='formsdiv' method='POST'>
        <label for="fname" className='formslabel'>Name :</label>
        <input className='formsinput' type="text" id="fname" name="name" placeholder="Enter your Name" value={userData.name} onChange={postUserData}/>
        <label for="num" className='formslabel'>Phone No.</label>
        <input className='formsinput' type="number" id="num" name="phoneNo" placeholder="Enter Your phone number" value={userData.phoneNo} onChange={postUserData} />
        <label for="tech" className='formslabel'>Technologies Known</label>
        <input className='formsinput' type="text" id="tech" placeholder="Please Enter technologies you known" name="technologiesKnown" value={userData.technologiesKnown} onChange={postUserData} />
    </div>
    <button className='formsbutton' onClick={submit}>Submit</button>
    </div>
  )
}

export default Forms
