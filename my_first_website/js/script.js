document.querySelector(".button-container")
.addEventListener("click", () => { 
     let text = document.getElementById("filter-jobs").value;
  //   console.log(text)
   }
)

// async function getJobs(){
//     fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//         return data
//      })
   
// }


// getJobs();





// function showJobs(jobs){
//      console.log(jobs);
//      let jobsContainer = document.querySelector(".jobs-container");
//      let jobsHTML= "";
//      jobs.forEach(job => {
//           jobsHTML += `
//           <div class="job-tile">
//                     <div class="top">
//                          <img src="${job.logo}"/>
//                   <span class="material-icons more_horiz">more_horiz</span>
//                     </div>
//                     <div class="rolename">
//                         <span>${job.roleName}</span>
//                     </div>
//                     <div class="description">
//                         <span>${job.requirements.content}</span>
//                         <div class="buttons"> 
//                             <div class="button apply-now">
//                                 Apply now
//                             </div>
//                             <div class="button">
//                                  message
//                                  </div>
//                     </div>
//                     </div>
//                  </div>`      
//      })
          
//      jobsContainer.innerHTML = jobsHTML;
// }

// getJobs().then(data => { 
//      showJobs(data);
// }) ;