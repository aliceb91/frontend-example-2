class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const p = document.createElement("p")
    p.append("This paragraph has been dynamically added by JavaScript!");
    this.mainContainerEl.append(p);
    return;
  }

  clearParagraphs() {
    const pArr = document.querySelectorAll("p");
    pArr.forEach((p) => p.remove());
    return;
  }
}

module.exports = View;