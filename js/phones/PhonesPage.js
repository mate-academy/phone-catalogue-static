import PhonesCatalog from './components/PhonesCatalog.js';
import PhoneViewer from './components/PhoneViewer.js';
import ShoppingCart from './components/ShoppingCart.js';
import Filter from './components/Filter.js';

import * as phonesAPI from '../api/phones.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: phonesAPI.getAll(),
      selectedPhone: null,
    };

    this.render();
  }

  updateChildren() {
    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,

      onPhoneSelected: (phoneId) => {
        this.setState({
          selectedPhone: phonesAPI.getById(phoneId),
        });
      }
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
    });

    this.initComponent(ShoppingCart);
    this.initComponent(Filter);
  }

  initComponent(constructor, props = {}) {
    const componentName = constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);

    if (!element) {
      return;
    }

    new constructor(element, props);
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  }

  render() {
    this.element.innerHTML = `
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
          ${ this.state.selectedPhone ? `
            <div data-component="PhoneViewer"></div>
          ` : `
            <div data-component="PhonesCatalog"></div>
          `}
        </div>
      </div>
    `;

    this.updateChildren();
  }
}
