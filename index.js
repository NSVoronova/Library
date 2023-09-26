let finalScore = `
1. Пользователь не зарегистрирован:
  -Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
  -На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
  -Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
  -Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
  -На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
  -Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2
  -"Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
  -На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
  -Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
  -Во время анимаций высота блока Favorites не должна меняться. +2
  -Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. 0
  -До регистрации: Нажатие на кнопку Check the card ни к чему не приведёт.
  -До авторизации: Иконка юзера в хедере отображается в виде силуэта.
  -В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2
2. Пользователь на этапе регистрации:
  -Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
  -На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
  -То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2
  -Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2
  -Дизайн модального окна соответствует макету. +15
  -При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2
  -При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2
  -Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
  -При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
  -В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
  -Пароль должен быть не короче 8 символов. +2
  -В поле E-mail должна быть валидация типа email. +2
  -Данные сохраняются в хранилище localStorage, в том числе и пароль +2
  -Иконка пользователя меняется на заглавные буквы имени. +2
  -Отображение страницы приходит в состояние после авторизации (этап 4). +2
  -Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2
  -Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
  -Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2
3. Пользователь на этапе входа в учётную запись после регистрации.
  -Дизайн модального окна Login соответствует макету. +15
  -При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
  -При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2
  -Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
  -При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
  -Для авторизации все поля должны быть не пустыми. +2
  -Пароль должен быть не короче 8 символов. +2
  -Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2
4.  Пользователь после входа в учётную запись
  -При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
  -Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
  -На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
  -То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2
  -Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2
  -Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, (сделала кнопку чуть больше) +2
  -Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
  -Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2
  -Дизайн модального окна профиля соответствует макету. +15
  -В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.
  -Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
  -Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2
  -Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2
  -Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
  -При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
  -При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2
  -При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2
  -Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2
  -Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2
  -Дизайн модального окна соответствует макету. +15 
  -При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
  -Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2
  -Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2
  -Expiration code содержит 2 поля с ограничением в 2 цифры. +2
  -CVC должен содержать 3 цифры. +2
  -После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.
  -При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2

Final Score: 198 points
`
console.log(finalScore);

// получаем данные из стораджа
let userData;
userData =  JSON.parse(localStorage.getItem("userData"))?? {}


// //////////////////////////////////////////////////////////
const userNotRegisterIcon = document.querySelector(".not__user__icon"); //иконка до регистрации
const userRegisterIcon = document.querySelector(".user__icon"); // кружочек после регистрации

if("firstName" in userData && userData.isAuthorised === true) {
  userNotRegisterIcon.style.display = "none"; // исчезновения окошка с иконкой юзера
  userRegisterIcon.style.display = "flex"; // добавление иконки с именем юзера
  userRegisterIcon.innerHTML = userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase(); // добавление букв внутрь иконки юзера
} else {
  userNotRegisterIcon.style.display = "flex";
  userRegisterIcon.style.display = "none";
}

// код для бургера

document.addEventListener("DOMContentLoaded", function() {
  let burgerBtn = document.getElementById("burger__button");
  let navbar = document.querySelector('.navbar__wrapper');
  let burgerImg = document.getElementById("burger__img");

  let openMenu = () => {
    navbar.style.right = "-20px";
    burgerImg.src = "./images/burger_close.svg";
    burgerBtn.classList.remove("closed");
    burgerBtn.classList.add("opened");
  }

  let closeMenu = () => {
    navbar.style.right = "-350px"; 
    burgerImg.src = "./images/burger.svg";
    burgerBtn.classList.add("closed");
    burgerBtn.classList.remove("opened");
  }

  burgerBtn.addEventListener('click', function() {
    if (burgerBtn.classList.contains("closed")){
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener("click", function(event) {
    if (event.target.closest('.navbar__navigation')) {
      closeMenu();
    } else if (!burgerBtn.contains(event.target) && !navbar.contains(event.target)) {
      closeMenu();
    }
  });
});

// код для слайдера

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".favorite__season input");
  const tabContainers = document.querySelectorAll(".favorite__container");

  tabButtons.forEach(button => {
    button.addEventListener("change", () => {
      const selectedTab = button.getAttribute("id");
      tabContainers.forEach(container => {
        if (container.classList.contains(selectedTab + "__container")) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    });
  });
});

// код для появления дроп меню возле иконки пользователя
const headerRegister = document.querySelector(".register__logout");
const loginInDropMenu = document.querySelector(".login"); // Login в дроп меню

const dropMenu = document.querySelector(".drop__menu");

userNotRegisterIcon.addEventListener("click", () => {
  if (dropMenu.classList.contains("drop__menu__active")) {
    dropMenu.classList.remove("drop__menu__active")
  } else  {
    dropMenu.classList.add("drop__menu__active")
  }
});

// дроп после регистрации

const dropMenuUser = document.querySelector(".drop__menu__user");
userRegisterIcon.addEventListener("click", () => {
  if(dropMenuUser.classList.contains("drop__menu__user__active")) {
    dropMenuUser.classList.remove("drop__menu__user__active");
  } else {
    dropMenuUser.classList.add("drop__menu__user__active");
  }
})

document.addEventListener("click", ({target}) => {
  if (dropMenu.classList.contains("drop__menu__active")) {
    if ((!userNotRegisterIcon.contains(target) && !dropMenu.contains(target)) || target === headerRegister || target === loginInDropMenu) {
      dropMenu.classList.remove("drop__menu__active");
    }
  }
});

document.addEventListener("click", ({target}) => {
  if ((!userRegisterIcon.contains(target) && !dropMenuUser.contains(target))) {
    dropMenuUser.classList.remove("drop__menu__user__active");
  }
});

// код отправления формы регистрации

const digitalSignUp = document.getElementById("digitalSignUp"); //кнопка signUp внизу страницы
const modalWindowRegister = document.querySelector(".modal__window__register"); //модальное окно регистрации
const registrationForm = document.getElementById("registrationForm"); //форма регистрации в модальном окне
const registrationBtnInFormLogin = document.getElementById("registrationForm__register-btn")
const modalWindowLogin = document.querySelector(".modal__window__login");

//появление модального окна на нажатие кнопок sign up  и register в конце страницы и в модальном окне
document.addEventListener("click", ({target}) => {
  if(target === digitalSignUp || target === headerRegister || target === registrationBtnInFormLogin) {
    modalWindowLogin.classList.remove("modal__active");
    modalWindowRegister.classList.add("modal__active")
  }
});

// отправка формы регистрации в localStorage
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const randomNumber = Math.floor(Math.random() * 0x100000000).toString(16).toUpperCase().padStart(9, '0');
  const cardNum = randomNumber.toString(16).substring(0, 9);

  const userData = {
    isAuthorised: false,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    cardNumber: cardNum,
    visits: 1,
    books: {
      amount: 0,
      booksName: []
    },
    cardData: {}
  };

  userData.isAuthorised = true;
    localStorage.setItem("userData", JSON.stringify(userData)); //обновление данных в сторадж
    userNotRegisterIcon.style.display = "none"; // исчезновения окошка с иконкой юзера
    userRegisterIcon.style.display = "flex";  // добавление иконки с именем юзера
    userRegisterIcon.innerHTML = userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase(); // добавление букв внутрь иконки юзера
    localStorage.setItem("userData", JSON.stringify(userData)); // отправка в localStorage
    modalWindowRegister.classList.remove("modal__active"); //  закрытие модалки

    document.getElementById("firstName").value = ""; //обнуление value внутри инпутов
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    location.reload();
  });
  userData =  JSON.parse(localStorage.getItem("userData"))?? {}


const closeFormRegistrationBtn = document.getElementById("close__modal__registration");

// close registration form

closeFormRegistrationBtn.addEventListener("click", () =>  modalWindowRegister.classList.remove("modal__active"));

document.addEventListener("click", ({target}) => {
  if ( target === modalWindowRegister) {
    modalWindowRegister.classList.remove("modal__active")
  }
});

//  check the card ////////////////////////////////

const cardNameInput = document.getElementById("card__name");
const cardNumberInput = document.getElementById("card__number");
const cardCheckButton = document.querySelector(".card__btn");
const cardContainer = document.querySelector(".card");

if("firstName" in userData) {
cardCheckButton.addEventListener("click", function () {
  if(userData.firstName) {
    const enteredName = cardNameInput.value;
    const enteredNumber = cardNumberInput.value;
  
    const isDataMatching = checkUserData(enteredName, enteredNumber);
  
    if (isDataMatching) {
      showInfoPanel();
      setTimeout(hideInfoPanel, 10000); 
    } else {
      alert("Неверное имя или номер карты.");
    }
  }
});
}

function checkUserData(name, cardNumber) {
  if (name === userData.firstName && cardNumber === userData.cardNumber) {
    return true;
  } else {
    return false;
  }
};

function showInfoPanel() {
  const cardContainer = document.querySelector(".card");
  const infoPanelHTML = `
  <div class="card__inputs">
    <div class="inputs__header">Brooklyn Public Library</div>
    <form class="find__card" action="#">
      <input type="text" maxlength="30" name="card__name" id="card__name" placeholder="Reader's name " value=${userData.firstName}>
      <input type="text" maxlength="30" name="card__name" id="card__number" placeholder="Card number" value=${userData.cardNumber}>
    </form>
  </div>
  <div class="card__info">
    <div class="card__info__item">
      <p>Visits</p>
      <img src="./images/visit.svg" alt="#">
      <p>${userData.visits}</p>
    </div>
    <div class="card__info__item">
      <p>Bonuses</p>
      <img src="./images/bonus.svg" alt="#">
      <p>1240</p>
    </div>
    <div class="card__info__item">
      <p>Books</p>
      <img src="./images/book.svg" alt="#">
      <p>${userData.books.booksName.length}</p>
    </div> 
  </div>
  `;
  cardContainer.innerHTML = infoPanelHTML;
}

function hideInfoPanel() {
  const cardContainer = document.querySelector(".card");
  const cardHTML = `
    <div class="card__inputs">
      <div class="inputs__header">Brooklyn Public Library</div>
      <form class="find__card" action="#">
        <input type="text" maxlength="30" name="card__name" id="card__name" placeholder="Reader's name ">
        <div id="div__card__name"></div>
        <input type="text" maxlength="30" name="card__name" id="card__number" placeholder="Card number">
        <div id="div__card__number"></div>
      </form>
    </div>
    <button type="button" class="card__btn">Check the card</button>
  `;
  cardContainer.innerHTML = cardHTML;
}

// ///////////// модальное окно Логин

const digitalLogin = document.getElementById("digitalLogin"); //кнопка логин внизу
const buyBtnArray = document.querySelectorAll(".buy");  //NodeList кнопок Buy у книг
const loginBtnInFormRegister = document.getElementById("registrationForm__login-btn"); //кнопка Login в форме регистрации



const closeFormLoginBtn = document.getElementById("close__modal__login");

document.addEventListener("click", ({target}) => {
  if(target === digitalLogin || target === loginBtnInFormRegister || target === loginInDropMenu) {
    modalWindowLogin.classList.add("modal__active");
    modalWindowRegister.classList.remove("modal__active")
  }
});

closeFormLoginBtn.addEventListener("click", () => modalWindowLogin.classList.remove("modal__active"));



// проверка введенных данных

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  userData =  JSON.parse(localStorage.getItem("userData"))?? {}
  const emailReadersCard = document.getElementById("e-mailReadersCard").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if ((emailReadersCard === userData.email || emailReadersCard === userData.cardNumber) && loginPassword === userData.password) {
    userData.isAuthorised = true;
    userData.visits++;
    localStorage.setItem("userData", JSON.stringify(userData)); //обновление данных в сторадж
    userNotRegisterIcon.style.display = "none"; // исчезновения окошка с иконкой юзера
    userRegisterIcon.style.display = "flex";  // добавление иконки с именем юзера
    userRegisterIcon.innerHTML = userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase(); // добавление букв внутрь иконки юзера  
  } else {
    alert ("Неверно введены почта, номер карты или пароль")
  }

    modalWindowLogin.classList.remove("modal__active"); //  закрытие модалки
  
    
    document.getElementById("e-mailReadersCard").value = ""; //обнуление value внутри инпутов
    document.getElementById("loginPassword").value = "";
    location.reload();
});

document.addEventListener("click", ({target}) => {
  if ( target === modalWindowLogin) {
    modalWindowLogin.classList.remove("modal__active")
  }
});

if (userData.isAuthorised) {
  userRegisterIcon.setAttribute("title", `${userData.firstName}  ${userData.lastName}`); // добавление подсказки
}
buyBtnArray.forEach((btn) => {
  btn.addEventListener("click" , () => {
    if( !userData.isAuthorised || userData.isAuthorised === false) {
      modalWindowLogin.classList.add("modal__active");
    }
  })
});

const digitalHeader = document.querySelector(".library-card__view__header"); //Find Your library card
const headerDescription = document.querySelector(".library-card__description__header");
const textDescription = document.querySelector(".library-card__descripton__text");
const btnDescription = document.querySelector(".registration__btn");

if(userData.isAuthorised){
  cardContainer.innerHTML = `
              <div class="card__inputs">
                <div class="inputs__header">Brooklyn Public Library</div>
                <form class="find__card" action="#">
                <input type="text" maxlength="30" name="card__name" id="card__name" placeholder="Reader's name " value=${userData.firstName}>
                <input type="text" maxlength="30" name="card__name" id="card__number" placeholder="Card number" value=${userData.cardNumber}>
                </form>
              </div>
              <div class="card__info">
    <div class="card__info__item">
      <p>Visits</p>
      <img src="./images/visit.svg" alt="#">
      <p>${userData.visits}</p>
    </div>
    <div class="card__info__item">
      <p>Bonuses</p>
      <img src="./images/bonus.svg" alt="#">
      <p>1240</p>
    </div>
    <div class="card__info__item">
      <p>Books</p>
      <img src="./images/book.svg" alt="#">
      <p>${userData.books.booksName.length}</p>
    </div> 
  </div>
  `;
  digitalHeader.innerHTML = "Your Library card";
  btnDescription.innerHTML = `
  <button type="button" id="profile__btn">${userData.cardNumber}</button>
  `;
  headerDescription.innerHTML = "Visit your profile";
  textDescription.innerHTML = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
}

// модалка My Profile


const clipboardButton = document.querySelector('.profile__card__number .clipboard');
const cardNumberElement = document.querySelector('.my-profile__modal__card-number');

clipboardButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(cardNumberElement.textContent);
    alert('Код карты клиента скопирован в буфер обмена');
  } catch (err) {
    console.error('Ошибка при копировании в буфер обмена:', err);
  }
});

const userLettersInModalProfile = document.querySelector(".user__letters");
const userNameSurnameInModalProfile = document.querySelector(".user__name__surname");
const visitsInModalProfile = document.querySelector(".modal__profile__visits");
const booksInModalProfile = document.querySelector(".modal__profile__books");
const listRentedBooksInModalProfile = document.querySelector(".list__rented__books__profile");
const cardNumberInModalProfile = document.querySelector(".my-profile__modal__card-number");
const myProfileBtnDrop = document.querySelector(".myprofile");

if (userData.firstName){
  userLettersInModalProfile.innerHTML =  userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase();
  userNameSurnameInModalProfile.innerHTML = `${userData.firstName} ${userData.lastName}`;
  visitsInModalProfile.innerHTML = userData.visits;
  booksInModalProfile.innerHTML = userData.books.booksName.length;
}
if (userData.books && userData.books.booksName) {
  userData.books.booksName.forEach((book) => {
  let bookName = document.createElement("li");
  listRentedBooksInModalProfile.append(bookName);
  bookName.innerHTML =  book;
  }
)};

cardNumberInModalProfile.innerHTML = userData.cardNumber;

const modalWindowProfile = document.querySelector(".modal__window__profile");
let btnDescriptionProfile = document.getElementById("profile__btn");
if(btnDescriptionProfile){
  btnDescriptionProfile.style.width = "90px";
}

if (userData.isAuthorised) {
  document.addEventListener("click", ({target}) => {
    if (target === myProfileBtnDrop || target === btnDescriptionProfile) {
      modalWindowProfile.classList.add("modal__active");
      dropMenuUser.classList.remove("drop__menu__user__active");
    }
  });

  const closeMyProfileBtn = document.getElementById("close__modal__profile");
  closeMyProfileBtn.addEventListener("click", () =>  modalWindowProfile.classList.remove("modal__active"));

  document.addEventListener("click", ({target}) => {
    if ( target === modalWindowProfile) {
      modalWindowProfile.classList.remove("modal__active");
    }
  });
}

//ПОКУПКА АБОНЕМЕНТА

const modalWindowAbonement = document.querySelector(".modal__window__buy__card");
const closeAbonementWindow = document.querySelector("#close__modal__buy__card");

buyBtnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(userData.isAuthorised && !userData.cardData.bankCardNumber) {
      modalWindowAbonement.classList.add("modal__active");
    }
  })
});

closeAbonementWindow.addEventListener("click", () => modalWindowAbonement.classList.remove("modal__active"))

document.addEventListener("click", ({target}) => {
  if ( target === modalWindowAbonement) {
    modalWindowAbonement.classList.remove("modal__active");
  }
});

buyCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userData =  JSON.parse(localStorage.getItem("userData"))?? {}
  const bankCardNumber = document.getElementById("bankCardNumber").value;

  if(userData.isAuthorised) {
    userData.cardData.bankCardNumber = bankCardNumber;
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  modalWindowAbonement.classList.remove("modal__active");

  document.getElementById("bankCardNumber").value = "";
  document.getElementById("expirationCode1").value = "";
  document.getElementById("expirationCode").value = "";
  document.getElementById("cvc").value = "";
  document.getElementById("cardholderName").value = "";
  document.getElementById("postalCode").value = "";
  document.getElementById("city").value = "";
});


//Добавлять книги

//listRentedBooksInModalProfile.innerHTML = `<li>The Last Queen, Clive Irving</li>` //ПОМЕНЯТЬ КОГДА БУДУТ КНИГИ
//const buyBtnArray = document.querySelectorAll(".buy");  //NodeList кнопок Buy у книг
buyBtnArray.forEach((btn) => {
  if(userData.firstName && userData.books.booksName.length !== 0 && userData.isAuthorised){
    userData.books.booksName.forEach((nameBook) => {
      let header = btn.closest(".favorite__book__item").querySelector(".book__name").innerHTML;
      let author = btn.closest(".favorite__book__item").querySelector(".book__author").innerHTML;
      if (nameBook === `${header}, ${author}`){
         btn.disabled = true;
         btn.innerHTML = "Own";
      }
  })
}})
buyBtnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(userData.isAuthorised && userData.cardData.bankCardNumber) {
      userData =  JSON.parse(localStorage.getItem("userData"))?? {}
      let header = btn.closest(".favorite__book__item").querySelector(".book__name").innerHTML;
      let author = btn.closest(".favorite__book__item").querySelector(".book__author").innerHTML;
      userData.books.booksName.push(`${header}, ${author}`);

      btn.disabled = true;
      btn.innerHTML = "Own";
      localStorage.setItem("userData", JSON.stringify(userData));
      location.reload()
    }
  })
});


// выход из профиля

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {
  userData =  JSON.parse(localStorage.getItem("userData"))?? {}
  if (userData.isAuthorised) {
    userData.isAuthorised = false;
    localStorage.setItem("userData", JSON.stringify(userData));
    dropMenuUser.classList.remove("drop__menu__user__active");
    userNotRegisterIcon.style.display = "flex"; 
    userRegisterIcon.style.display = "none";
    location.reload();
  }
});


// смена конца страницы после входа

