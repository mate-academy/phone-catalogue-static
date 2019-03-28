export default class PhonesCatalog {
  constructor(element, props) {
    this._element = element;
    this._props = props;

    this._render();
  }

  _render() {
    const { phones } = this._props;

    this._element.innerHTML = `
      <div class="phones-catalog">
        <h4>Phones Catalog</h4>
        <ul class="phones">
          ${ phones.map(phone => `
            <li class="thumbnail">
              <a href="#!/phones/${phone.id}" class="thumb">
                <img alt="${phone.name}" src="${phone.imageUrl}">
              </a>
  
              <div class="phones__btn-buy-wrapper">
                <a class="btn btn-success">
                  Add
                </a>
              </div>
  
              <a href="#!/phones/${phone.id}">${phone.name}</a>
              <p>${phone.snippet}</p>
            </li>
          `).join('') }
        </ul>
      </div>
    `;
  }
}
