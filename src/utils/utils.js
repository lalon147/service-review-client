

export const getJwtToken=(loggedUser)=>{
     const user={email:loggedUser.email}
  return   fetch("https://service-review-server-lalon147.vercel.app/jwt",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            localStorage.setItem("token",data.token)
           

        }) 
}