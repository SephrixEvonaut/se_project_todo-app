import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
//import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const popup = new Popup(".popup");


const section = new Section({
  item: [],
  renderer: () => {},
  containerSelector: ".todos__list",
});

section.renderItems();

// The logic in this function should all be handled in the Todo class.

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");

  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

initialTodos.forEach((item) => {
  renderTodo(item);
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();

const submitPopupForm = (values) => {

  renderTodo(values);
  newTodoValidator.resetValidation();
}

const popupWithForm = new PopupWithForm({ popupSelector: ".popup", popupSubmit: submitPopupForm });

popupWithForm.setEventListeners();

addTodoButton.addEventListener("click", () => {
  popupWithForm.open();
  console.log("popup open");
});

addTodoCloseBtn.addEventListener("click", () => {
  popup.close();
});
