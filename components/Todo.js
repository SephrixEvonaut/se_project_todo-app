class Todo {
  constructor(data, selector) {
    this._selector = selector;
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
  }
  _setEventListeners() {
    this._deleteButtonElement.addEventListener("click", this._handleDelete);
    this._checkboxElement.addEventListener("change", this._handleCheck);
  }

  _handleDelete() {
    this._element.remove();

    this._element = null;
  }

  _handleCheck() {
    this._completed = !this._completed;
  }

  _generateCheckboxElement() {
    this._checkboxElement = this._element.querySelector(".todo__completed");
    this._checkboxElement.checked = this._completed;
  }
  _generateDateElement() {
    this._dateElement = this._element.querySelector(".todo__date");
    console.log(this._date);
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateElement.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }
  _generateNameElement() {
    this._nameElement = this._element.querySelector(".todo__name");
    this._nameElement.textContent = this._name;
  }

  getView() {
    this._element = this._getTemplate();
    this._deleteButtonElement =
      this._element.querySelector(".todo__delete-btn");
    this._generateNameElement();
    this._generateDateElement();
    this._generateCheckboxElement();
    this._setEventListeners();

    return this._element;
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  
}

export default Todo