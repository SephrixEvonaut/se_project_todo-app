import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, popupSubmit }) {
    super(popupSelector);
    this._popupSubmit = popupSubmit;

    this._popupForm = this._popup.querySelector(".popup__form");
    this._popupFormInput = this._popup.querySelectorAll(".popup__input");
  }

  // _popupFormInput = [{name: 'name3', value: ''}, {name: 'date', value: ''}]
  // inputValue = {name: 'name3', value: ''}

  // popupInputValue = {name3: '', date : ''}
  _getInputValues() {
    const popupInputValue = {};

    this._popupFormInput.forEach((inputValue) => {
      popupInputValue[inputValue.name] = inputValue.value;

    });

    return popupInputValue;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const values = this._getInputValues();
      this._popupSubmit(values);
      this.close();
    });
    super.setEventListeners();
  }
}

export default PopupWithForm;
