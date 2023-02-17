let buttonChange = document.querySelector('.profile__button-change');
let formElement = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileButton = document.querySelector('.profile__job');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileButton.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function saveInfoPopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileButton.textContent = jobInput.value;
  closePopup();
}

buttonChange.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', saveInfoPopup);

//5 спринт

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const galleryContainer = document.querySelector(".gallery");
const template = document.querySelector("#elements");
const formCardAdd = document.querySelector('.popup__form_place');
const popupInputTypePlace = document.querySelector('.popup__input_type_place');
const popupInputTypeLink = document.querySelector('.popup__input_type_link');
const popupGallery = document.querySelector('.popup_gallery');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const buttonClosePopup = document.querySelector('.popup__close_gallery')

function handleDelete(evt) {
  evt.target.closest('.gallery__item').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('gallery__button-like_active');
}

function openPopupImage(name, link) {
  popupImage.src = link;
  popupText.textContent = name;
  popupGallery.classList.add('popup_opened');
}

function closePopupGallery() {
  popupGallery.classList.remove('popup_opened');
}

//Создание галлереи

const getItemElement = (name, link) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemName = newItemElement.querySelector('.gallery__title').textContent = name;
  const newItemPlace = newItemElement.querySelector('.gallery__picture').src = link;
  const buttontDelete = newItemElement.querySelector('.gallery__delete');
  const addLike = newItemElement.querySelector('.gallery__button-like');
  const galleryImage = newItemElement.querySelector('.gallery__picture_click');
  buttontDelete.addEventListener('click', handleDelete);
  addLike.addEventListener('click', handleLike);
  galleryImage.addEventListener('click', () => { openPopupImage(name, link); });
  buttonClosePopup.addEventListener('click', closePopupGallery);
  galleryContainer.prepend(newItemElement);
}

initialCards.forEach((item) => {
  getItemElement(item.name, item.link);
})

//Добавление новых карточек

const renderItem = (name, link) => {
  template.append(getItemElement(name, link));
}

formCardAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderItem(popupInputTypePlace.value, popupInputTypeLink.value);
  closePopupPlace();
});

//ОТКРЫТИЕ ЗАКРЫТИЕ ПОПАП Place

let popupPlace = document.querySelector('.popup_place');
let plusButton = document.querySelector('.profile__add-button');
let placeInput = document.querySelector('.popup__input_type_place');
let linkInput = document.querySelector('.popup__input_type_link');
let closeButtonPlace = document.querySelector('.popup__close_place');

function openPopupPlace() {
  popupPlace.classList.add('popup_opened');
}

function closePopupPlace() {
  popupPlace.classList.remove('popup_opened');
}

plusButton.addEventListener('click', openPopupPlace);

closeButtonPlace.addEventListener('click', closePopupPlace);



