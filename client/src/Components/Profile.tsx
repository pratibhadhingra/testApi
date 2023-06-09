import { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
      fetch("/")
        .then((res) => {
          return res.json();
        })
        .then((data) => setUser(data.employees));
    }, []);
  
    return (
      <div>
        {user?.map((value: any, i) => {
          return( <p key={i}>Name: {value.name}, Email: {value.email}</p>)
        })}
      </div>
    )
}

export default Profile
