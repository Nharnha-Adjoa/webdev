const body = document.querySelector('body');
const slider = document.querySelector('.slider');

function store(value){
    localStorage.setItem('darkmode', value);
}

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode){
        store(false);
    }
    else if (darkmode === 'true'){
        body.classList.add('darkmode');
    }
}
load()

slider.addEventListener('click', () =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));

})

// Add an event listener to each job container
  const jobContainers = document.querySelectorAll('.job');

  jobContainers.forEach((jobContainer) => {
    jobContainer.addEventListener('click', (event) => {
        const logoSrc = event.currentTarget.querySelector('img').src;
        const jobTitle = event.currentTarget.querySelector('.job-title').innerText;

   // Store the job information in the localStorage
  localStorage.setItem('selectedJobLogo', logoSrc);
  localStorage.setItem('selectedJobTitle', jobTitle);
   });
 });

// Retrieve the stored job information from the localStorage
const selectedJobLogo = localStorage.getItem('selectedJobLogo');
const selectedJobTitle = localStorage.getItem('selectedJobTitle');

// Update the job logo and job name on the apply.html page
const logoImg = document.getElementById('logo-img');
const jobName = document.querySelector('.Software');

 if (selectedJobLogo && selectedJobTitle) {
   logoImg.src = selectedJobLogo;
  jobName.textContent = selectedJobTitle;
} else {
   // Handle the case when no job is selected (optional)
 logoImg.src = 'scoot.svg';
 jobName.textContent = 'Default Job Name';
}

