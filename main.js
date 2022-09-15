const projects = [
    {
        name: "assets/images/img_text1.svg",
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: "assets/images/img_card1.svg",
        technologies: ["assets/images/Tags.svg", "assets/images/Tags1.svg"],
        seeLive: "https://bludidi.github.io/Portfolio-Desktop-version-/", 
        seeSource: "https://github.com/Bludidi/Portfolio-Desktop-version-" 
    },

    {
        name: "assets/images/img_text2.svg",
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        image: "assets/images/img2",
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

const projectCards = projects.map((projects) => `
<div id="card1" class="cards">
            <div id="card_img" class="card left_align"><img class="card_img" src="${projects.image}
            "
                    alt="project card"></div>
            <div id="txt_img" class="img-txt1"><img class="img_txt" src="${projects.name}
            "
                    alt="projects name">
                <p class="p3">${projects.shortDescription}</p>
                <img class="tags" src="${projects.technologies}
                " alt="language Tags">
                <br>
                <input class="btns" type="button" value="See Project">
            </div>
        </div>
`
 )

 const modalContainer = document.querySelector('.modal');
const recentWork = document.querySelector('.myWork');
const parser = new DOMParser();

projectCardString.forEach((projectString, index) => {
  const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
});


mobilePopupElement.querySelector('.project-close');
  projectBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('project-popup-hidden');
  });
  closeBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('project-popup-hidden');
  });
  recentWork.append(projectElement);
  popupContainer.append(mobilePopupElement);

