const editButton = document.querySelector('.profile__button');
popup = document.querySelector('.popup');
closeButton = document.querySelector('.popup__close');


handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
}

handleCloseButton = () => {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click' , handleCloseButton)


let popupSave = document.querySelector('.popup__button');
let popupName = document.querySelector('.input__name');
let popupJob = document.querySelector('.input__job');
console.log(popupJob)

function handleFormSubmit (evt) {
    evt.preventDefault();