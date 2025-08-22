export default class Section {
  constructor({ item, renderer, containerSelector }) {
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._item.forEach((item) => {
      renderer();
    });
  }

  addItem() {
    //figure out contents with tutor... prolly append?
  }
}
