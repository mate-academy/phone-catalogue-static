export default class PhoneViewer {
  constructor(element) {
    this._element = element;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div class="phone-viewer">
        <h4>Phone Viewer</h4>
      </div>  
    `;
  }
}
