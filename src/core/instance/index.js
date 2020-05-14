import { initMixin } from "./init";

function Mender(options) {
  if (!(this instanceof Mender)) {
    console.log(
      "Mender is a constructor and should be called with the `new` keyword"
    );
  }
  this._init(options);
}

initMixin(Mender);

export default Mender;
