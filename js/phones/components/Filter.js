export default class Filter {
  constructor(element) {
    this._element = element;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <div class="filter">
        <h4>Filter</h4>
        
        <p>
          Search:
          <input>
        </p>
  
        <p>
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </div>
    `;
  }
}
