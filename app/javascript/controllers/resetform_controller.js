import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log('Reset Form Controller is connected to element', this.element)
  }

  reset() {
    this.element.reset()
  }
}
