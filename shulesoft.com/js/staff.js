function fetchData(){
    fetch('https://admin.shulesoft.com/HomeController/userapi').then(response => {
      // console.log(response )
        if (!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data =>{
        console.log(data.staffs);
        const html = data.staffs
        .map(user =>{
            return `
            <div class="card">
            <header id="top">
            <p><img width="100px" height="100px" src="${user.photo}" alt="${user.name}"/></p>
                <h2>Full Name:${user.name}</h2>
                <h3>Role:${user.role}</h3>
                 <h4>Email: ${user.email}</h4>
                 <h4>Phone:${user.phone}</h4>
                 <h4>next_kin:${user.next_kin}</h4>
                 <h4>address:${user.address}</h4>
                 <h4>department:${user.department}</h4>
                 </header>
             </div>`; })
        .join("")
        // console.log(html)
        document.querySelector('.info').insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
 }
 fetchData();                
 
