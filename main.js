const projects = [
    {
        name: 'Tonic',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: './assets/images/img_card1.svg',
        technologies: ['./assets/images/Tags.svg', 'assets/images/Tags1.svg'],
        seeLive: "https://bludidi.github.io/Portfolio-Desktop-version-/", 
        seeSource: "https://github.com/Bludidi/Portfolio-Desktop-version-" 
    },

    {
        name: "assets/images/img_text2.svg",
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: "assets/images/img2.svg",
        technologies: ["assets/images/Tags.svg", "assets/images/Tags1.svg"],
        seeLive: "https://bludidi.github.io/Portfolio-Desktop-version-/", 
        seeSource: "https://github.com/Bludidi/Portfolio-Desktop-version-" 
    },

    {
        name: "assets/images/img_text3.svg",
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: "assets/images/img3.svg",
        technologies: ["assets/images/Tags.svg", "assets/images/Tags1.svg"],
        seeLive: "https://bludidi.github.io/Portfolio-Desktop-version-/", 
        seeSource: "https://github.com/Bludidi/Portfolio-Desktop-version-" 
    },

    {
        name: "assets/images/img_text4.svg",
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: "assets/images/img4.svg",
        technologies: ["assets/images/Tags.svg", "assets/images/Tags1.svg"],
        seeLive: "https://bludidi.github.io/Portfolio-Desktop-version-/", 
        seeSource: "https://github.com/Bludidi/Portfolio-Desktop-version-" 
    },
];

const projectCards = projects.map((project) => `
<div id="card1" class="cards">
            <div id="card_img" class="card left_align"><img class="card_img" src="${projects.image}" alt="project card"></div>
            <div id="txt_img" class="img-txt1"><img class="img_txt" src="${projects.name}" alt="projects name">
                <p class="p3">${project.shortDescription}</p>
                <img class="tags" src="${project.technologies}" alt="language Tags">
                <br>
                <input class="btns see_btn" type="button" value="See Project">
            </div>
        </div>
`
 )

const modalContainer = document.querySelector('.modal');
const recentWork = document.querySelector('.myWork');
const parser = new DOMParser();
projectCards.forEach((projectCard, index) => {
  const projectIndex = parser.parseFromString(projectCard, 'text/html').body.firstChild;
  const popupModal = `
<div class="project-popup-hidden ">
  <div class="backgroundpop"></div>
    <div class="project-popup">
      <div class="project-header">
        <i class="fa-solid fa-xmark project-close close">x</i>
        <h2>${projects[index].name}</h2>
      <div class="card_img card1">
        <img class="imagedesktop project-img"  src="${projects[index].image}" alt="card image">            
      <div class="project-footer">
        <p class="project-desc">${projects[index].description}</p>
        <div>
          <ul class = ("tech_lang")>
            ${projects[index].technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <div class="project-links">
            <a href="${projects[index].seeLive}">See Live <i class="close"></i></a>
            <a href="${projects[index].seeSource}">See Source <i class="close"></i></a>
          </div>
        </div>
      </div>
    </div>
</div>
`;


const popModal = parser.parseFromString(popupModal, 'text/html').body.firstChild;
const seeProject = projectIndex.querySelector('.see_btn');
const closeBtn = popModal.querySelector('.close');
seeProject.addEventListener('click', () => {
  popModal.classList.toggle('project-popup-hidden');
});
closeBtn.addEventListener('click', () => {
  popModal.classList.toggle('project-popup-hidden');
});
recentWork.append(projectIndex);
modalContainer.append(popModal);
});

