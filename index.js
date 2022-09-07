let today = new Date('July 20, 2022');
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Eliane Zammar, ${thisYear}`;
footer.appendChild(copyright);
const skills = ['sleeping', 'smiling', 'laughing', 'eating'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill); 
}
const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    console.log(message, name, email);
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name} wrote </a>`;
    newMessage.innerHTML += `<span> ${message} </span>`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

// const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/{GITHUB_EZAMMAR25}/repos');
githubRequest.send();
// githubRequest.addEventListener('load', function () {
//     let repositories = JSON.parse(this.response);
//     console.log(repositories);
//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');

//     for(let i=0; i < repositories.length; i++) {
//         const project = document.createElement('li');
//         projectList.appendChild(project);
//     }
// });
fetch('https://api.github.com/users/{GITHUB_EZAMMAR25}/repos')
    .then(response => response.json())
    .then(githubRequest.addEventListener('load', function () {
        let repositories = JSON.parse(this.response);
        console.log(repositories);
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
    
        for(let i=0; i < repositories.length; i++) {
            const project = document.createElement('li');
            projectList.appendChild(project); 
        }})
        );
