let buttonChange = document.querySelector('.profile__button-change');
let formElement = document.querySelector('.popup__container');
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__name')
let profileButton = document.querySelector('.profile__job')

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}
console.log(profileButton.textContent)

function saveInfoPopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileButton.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

buttonChange.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', saveInfoPopup);

