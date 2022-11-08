

export const getJwtToken=(user)=>{
    fetch("https://service-review-server-lalon147.vercel.app/jwt",{
            method:"POST",
            headers:{
                "Content-Type":"applicatio/json"
            },
            body:JSON.stringify(user.email)
        }).then(res=>res.json()).then(data=>{
            localStorage.setItem("token",data.token)
           

        }) 
}