const projects = [
  {
    name: 'Tonic',
    subtitle: 'CANOPY',
    backEnd: 'Back End Dev',
    year: 2015,
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './assets/images/img_card1.svg',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    seeLive: 'https://bludidi.github.io/Portfolio-Desktop-version-/',
    seeSource: 'https://github.com/Bludidi/Portfolio-Desktop-version-',
  },  

  {
    name: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    backEnd: 'Back End Dev',
    year: 2015,
    shortDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'assets/images/img2.svg',
    languages: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript'],
    seeLive: 'https://bludidi.github.io/Portfolio-Desktop-version-/',
    seeSource: 'https://github.com/Bludidi/Portfolio-Desktop-version-',
  },

  {
    name: 'Facebook 360',
    subtitle: 'FACEBOOK',
    backEnd: 'Full Stack Dev',
    year: 2015,
    shortDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image:' assets/images/img3.svg',
    languages: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript', 'GitHub'],
    seeLive: 'https://bludidi.github.io/Portfolio-Desktop-version-/',
    seeSource: 'https://github.com/Bludidi/Portfolio-Desktop-version-',
  },

  {
    name: 'Uber Navigation',
    subtitle: 'UBER',
    backEnd: 'Leader Developer',
    year: 2018,
    shortDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'assets/images/img4.svg',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'Ruby on rails', 'JavaScript', 'GitHub'],
    seeLive: 'https://bludidi.github.io/Portfolio-Desktop-version-/',
    seeSource: 'https://github.com/Bludidi/Portfolio-Desktop-version-',
  },
];

const projectCards = projects.map((project) => `
<div id="card1" class="cards">
            <div id="card_img" class="card left_align"><img class="card_img" src="${project.image}" alt="project card"></div>
              <div id="txt_img" class="img-txt1"><h2>${project.name}</h2>
                <ul class="flex-cards">
                  <li class="all-list first">${project.subtitle}</li>
                  <li class="all-list second">${project.backEnd}</li>
                  <li class="all-list second">${project.year}</li>
                </ul>
                <p class="p3">${project.shortDescription}</p>
                <ul class="flex-button tech_lang">
                ${project.languages.map((tech) => `<li class="button">${tech}</li>`).join('')}
                </ul>
                <br>
                <input class="btns see_btn" type="button" value="See Project">
            </div>
        </div>
`,);

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
        <input type="button" value="&#10006" class="fa-solid fa-xmark project-close close">
        <h2>${projects[index].name}</h2>
        <p class="all-list first">${projects[index].subtitle} <span class="all-list second">${projects[index].backEnd}</span> <span class="all-list second">${projects[index].year}</span></p>

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
