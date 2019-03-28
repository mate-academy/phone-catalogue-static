import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';

import * as phonesAPI from '../api/phones.js';

export default class PhonesPage {
  constructor(element) {
    this._element = element;

    this.state = {
      phones: phonesAPI.getAll()
    };

    this._render();

    this._initComponent(PhonesCatalog, {
      phones: this.state.phones,
    });

    this._initComponent(PhoneViewer);
    this._initComponent(ShoppingCart);
    this._initComponent(Filter);
  }

  _initComponent(constructor, props = {}) {
    const componentName = constructor.name;
    const element = this._element.querySelector(`[data-component="${componentName}"]`);

    new constructor(element, props);
  }

  _render() {
    this._element.innerHTML = `
      <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <div data-component="Filter"></div>
          </section>
  
          <section>
            <div data-component="ShoppingCart"></div>
          </section>
        </div>
  
        <!--Main content-->
        <div class="col-md-10">
          <div data-component="PhonesCatalog"></div>
          <div data-component="PhoneViewer"></div>
        </div>
      </div>
    `;
  }
}
