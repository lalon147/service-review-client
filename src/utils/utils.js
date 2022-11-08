

export const getJwtToken=(loggedUser)=>{
     const user={email:loggedUser.email}
  return   fetch("http://localhost:5000/jwt",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            localStorage.setItem("token",data.token)
           

        }) 
}