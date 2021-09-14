const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    result.innerHTML = ''
     console.log(results);
    results.forEach(user =>{
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
         <img src="${user.picture.large}" alt="${user.name.first}">
         <div class="user-info">
         <h4>${user.name.first}  ${user.name.last}</h4>
         <p>${user.location.city}, ${user.location.country}</p>
         </div> 

        `
        result.appendChild(li)
    })

    
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
           
               item.classList.remove('hide')
           } else {
               item.classList.add('hide')
           }
        })

}
{/* <div class="school-info">
         
         <h4>School Name: ${school_name}</h4>
         <h4>Phone: ${phone}</h4>
         <h4>Adress:${address}</h4>
         <h4>Email: ${email}</h4>
         <h4>Website: ${website}</h4>
         <h4>Joined At: ${joined_at}</h4>
         <h4>No of Students: ${number_of_students}</h4>
         </div>
           */}