
export default function Login(){
    return(
        <div>
            <h1>Login Form</h1>
           <p>Name</p>
           <p><input type="text"  name="name"  placeholder="enter name" className="form-control"/></p>
           <p><input type="text"  name="email" placeholder="enter email" className="form-control"/></p>
           <p><input type="submit"  name="submit" value="Login" className="btn btn-danger" /></p>
 
        </div>
    );
 }