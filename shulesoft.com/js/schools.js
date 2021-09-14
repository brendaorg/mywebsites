const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://admin.shulesoft.com/HomeController/schoolapi')
    const {schools}  = await res.json();

    // console.log(schools);
    result.innerHTML = '';

    schools.forEach(school =>{
        const li = document.createElement('li')
        listItems.push(li)
         let  {school_name,phone,address,email,website,joined_at,photo,number_of_students} = school;
        li.innerHTML = `
        <div class="contain">
        <img src="${photo}" alt="Pancake"/>
        <div class="container_heading">
         <h1>${school_name}</h1>
         
         <div class="container_text">
          <div class="container_text_data">
           <h2>Phone Number: ${phone}</h2>
          </div>
          <div class="container_text_data">
           <h2>Adress: ${address}</h2>
          </div>
          <div class="container_text_data">
           <h2>Email: ${email}</h2>
          </div>
         </div>

         <div class="container_text">
         <div class="container_text_data">
          <h2>Website: ${website ?? ''}</h2>
         </div>
         <div class="container_text_data">
          <h2>Date Joined: ${joined_at}</h2>
         </div>
         <div class="container_text_data">
          <h2>Number of Students: ${number_of_students ?? ''}</h2>
         </div>
        </div>
        </div>
       </div>
        `
        result.appendChild(li)
    })

    
}

function filterData(searchTerm) {
    console.log(searchTerm)
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
           
               item.classList.remove('hide')
           } else {
               item.classList.add('hide')
           }
        })

}