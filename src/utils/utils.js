

export const getJwtToken=(user)=>{
  return   fetch("https://service-review-server-gamma.vercel.app/jwt",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user.email)
        }).then(res=>res.json()).then(data=>{
            localStorage.setItem("token",data.token)
           

        }) 
}