const aboutButton = document.getElementById('aboutButton');
const myTasksButton = document.getElementById('myTasksButton');
const projectsButton = document.getElementById('projectsButton');
const analyticsButton = document.getElementById('analyticsButton');
const authorizationButton = document.getElementById('authorizationButton');
const registrationButton = document.getElementById('registrationButton');
const indexButton = document.getElementById('indexButton');

document.addEventListener('DOMContentLoaded', () => {
    aboutButton.addEventListener('click', () => {window.location.href = 'about.html';});
    myTasksButton.addEventListener('click', () => {window.location.href = 'myTasks.html';});
    projectsButton.addEventListener('click', () => {window.location.href = 'projects.html';});
    analyticsButton.addEventListener('click', () => {window.location.href = 'analytics.html';});
    authorizationButton.addEventListener('click', () => {window.location.href = 'authorization.html';});
    registrationButton.addEventListener('click', () => {window.location.href = 'registration.html';});
    indexButton.addEventListener('click', () => {window.location.href = 'index.html';});
})
