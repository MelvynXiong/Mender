let uid = 0;

export function initMixin(Mender) {
  Mender.prototype._init = function (opitons) {
    const md = this;

    // 每次创建一个新的实例赋值一个 uid
    this._uid = uid++;

    md.$opitons = options;

    if (md.$opitons.el) {
      md.$mount(md.$opitons.el);
    }
  };
}
