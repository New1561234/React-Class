import { useState } from "react";

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  return (

  <form action="POST">
    <div class="form-group">
      <label htmlFor="name"> Name: </label>
      <input type="text" onChange={(e)=>setName(e.target.value)} name="name" className="form-control" />
    </div>

    <div class="form-group">
      <label htmlFor="email"> E-mail: </label>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" />
    </div>

    <div class="form-group">
      <label htmlFor="message"> Message: </label>
      <textarea type="text" onChange={(e)=>setMessage(e.target.value)} name="message" className="form-control" > Enter the message.... </textarea>
    </div>
    
    <div class="form-group">
      <button type="submit" className="submit"> Submit </button>
    </div>

  </form>
  );
};

export default Contact;
