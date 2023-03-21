const body = document.querySelector('body');
body.style.backgroundColor = 'white';
// mobile menu

const menuBtn = document.getElementById('menu-close-btn');
const menuSection = document.querySelector('section.mobile-menu');
const closeButton = document.getElementById('close-btn');
const menuItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    menuSection.classList.remove('visible');
  });
}

menuBtn.addEventListener('click', () => {
  menuSection.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  menuSection.classList.remove('visible');
});

// featured speakers list dynamically rendered in the page
const data = [
  {
    id: 1,
    img: './assets/images/founder.png',
    title: 'Kalyesubura Shadia',
    position: 'founder BUMSA',
    info: 'He is currently the president of Deen for Allah and thanks to himfor having come up with idea of creating BUMSA',
  },
  {
    id: 2,
    img: './assets/images/musa.png',
    title: 'Musa Kyagera',
    position: 'Coordinater BUMSA',
    info: 'He is currently the leader of the Uganda Daawa Association and he has been among the people who have worked hard in the propagation of the Deen of Allah',
  },
  {
    id: 3,
    img: './assets/images/mubagye.png',
    title: 'Shaban Mubagye',
    position: 'Supreme Leader',
    info: 'Shaban Mubaagye is the Mufti supreme leader of Uganda and is one of the most influential leaders we have in Uganda',
  },
  {
    id: 4,
    img: './assets/images/menk.png',
    title: 'Mufti Menk',
    position: 'Mufi Zimbabwe',
    info: 'This is one of the great scholars we have in this current generation. He has inspired many people towards the rememberance of ALLAH',
  },
  {
    id: 5,
    img: './assets/images/kalyesubula.png',
    title: 'Muswala Shafic',
    position: 'Chairman BUMSA',
    info: 'This is the current leader of the dawa commitee in the Uganda muslim associatio and is a form chairperson of BUMSA',
  },
  {
    id: 6,
    img: './assets/images/student1.jpg',
    title: 'Mayito ISmail',
    position: 'Student Leader',
    info: 'Mayito has been one of the most prominent learders for the BUMSA community and the alumni community. He has done many tramendous things to ensure that BUMSA is a success.',
  },
];

function createSpeakers(id, title, img, position, info) {
  return `
    <section class="speakers">
              <img
                src="${title}"
                alt="speaker1"
                class="img-speaker"
              />
              <div class="speaker-info">
                <p class="name">${img}</p>
                <p class="speaker-title">${position}</p>
                <p class="title-bar-speaker lowbar-title"></p>
                <article class="speaker-bio">
                   ${info}
                </article>
              </div>
            </section>
    `;
}

let speakers = '';

data.forEach((item) => {
  const html = createSpeakers(
    item.id,
    item.img,
    item.title,
    item.position,
    item.info,
  );
  speakers += html;
});

document.getElementById('speaker-container').innerHTML = speakers;
