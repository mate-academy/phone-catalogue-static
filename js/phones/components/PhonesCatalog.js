export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const phoneLink = event.target.closest('[data-element="phone-link"]');

      if (!phoneLink) {
        return;
      }

      this.props.onPhoneSelected(phoneLink.dataset.phoneId);
    });
  }

  render() {
    const { phones } = this.props;

    this.element.innerHTML = `
      <div class="phones-catalog">
        <h4>Phones Catalog</h4>
        <ul class="phones">
          ${ phones.map(phone => `
            <li class="thumbnail">
              <a
                data-element="phone-link"
                data-phone-id="${phone.id}"
                href="#!/phones/${phone.id}"
                class="thumb"
              >
                <img alt="${phone.name}" src="${phone.imageUrl}">
              </a>
  
              <div class="phones__btn-buy-wrapper">
                <a class="btn btn-success">
                  Add
                </a>
              </div>
  
              <a
                data-element="phone-link"
                data-phone-id="${phone.id}"
                href="#!/phones/${phone.id}"
              >
                ${phone.name}
              </a>
              <p>${phone.snippet}</p>
            </li>
          `).join('') }
        </ul>
      </div>
    `;
  }
}
