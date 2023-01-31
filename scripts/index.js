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
closeButton.addEventListener('click', handleCloseButton);


let popupSave = document.querySelector('.popup__button');
let popupName = document.querySelector('.popup__name');
let popupJob = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name')
let profileButton = document.querySelector('.profile__job')

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value
    profileButton.textContent = popupJob.value
}

popup.addEventListener('submit', handleFormSubmit);

popupSave.addEventListener('click', handleCloseButton);