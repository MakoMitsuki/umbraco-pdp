import { LitElement as x, html as y, ifDefined as d, css as C, property as g, state as h, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as E } from "@umbraco-cms/backoffice/property-editor";
import { UMB_NOTIFICATION_CONTEXT as T } from "@umbraco-cms/backoffice/notification";
import { UmbElementMixin as M } from "@umbraco-cms/backoffice/element-api";
import { UMB_MODAL_MANAGER_CONTEXT as w, UMB_CONFIRM_MODAL as O } from "@umbraco-cms/backoffice/modal";
var A = Object.defineProperty, I = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, r = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? I(e, i) : e, l = t.length - 1, m; l >= 0; l--)
    (m = t[l]) && (s = (n ? m(e, i, s) : m(s)) || s);
  return n && s && A(e, i, s), s;
}, k = (t, e, i) => e.has(t) || c("Cannot " + i), $ = (t, e, i) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i) => (k(t, e, "access private method"), i), a, _, p, v, f;
let o = class extends M(x) {
  constructor() {
    super(), $(this, a), this.value = "", this._suggestions = [
      "You should take a break",
      "I suggest that you visit the Eiffel Tower",
      "How about starting a book club today or this week?",
      "Are you hungry?"
    ], this.consumeContext(w, (t) => {
      this._modalManagerContext = t;
    }), this.consumeContext(T, (t) => {
      this._notificationContext = t;
    });
  }
  set config(t) {
    this._disabled = t.getValueByAlias("disabled"), this._placeholder = t.getValueByAlias("placeholder"), this._maxChars = t.getValueByAlias("maxChars");
  }
  render() {
    return y`
          <uui-input
            id="suggestion-input"
            class="element"
            label="text input"
            placeholder=${d(this._placeholder)}
            maxlength=${d(this._maxChars)}
            .value=${this.value || ""}
            @input=${u(this, a, _)}
          >
          </uui-input>
          <div id="wrapper">
            <uui-button
              id="suggestion-button"
              class="element"
              look="primary"
              label="give me suggestions"
              ?disabled=${this._disabled}
              @click=${u(this, a, v)}
            >
              Give me suggestions!
            </uui-button>
            <uui-button
                id="suggestion-trimmer"
                class="element"
                look="outline"
                label="Trim text"
                @click=${u(this, a, f)}
                >
                Trim text
            </uui-button>
          </div>
        `;
  }
};
a = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this.value = t.target.value, u(this, a, p).call(this);
};
p = function() {
  this.dispatchEvent(new E());
};
v = function() {
  const t = this._suggestions.length * Math.random() | 0;
  this.value = this._suggestions[t], u(this, a, p).call(this);
};
f = function() {
  var i, n;
  if (!this._maxChars) return;
  if (!this.value || this.value.length <= this._maxChars) {
    const s = {
      message: "Nothing to trim!"
    };
    (i = this._notificationContext) == null || i.peek("danger", { data: s });
    return;
  }
  const t = this.value.substring(0, this._maxChars), e = (n = this._modalManagerContext) == null ? void 0 : n.open(
    this,
    O,
    {
      data: {
        headline: "Trim text",
        content: `Do you want to trim the text to "${t}"?`,
        color: "danger",
        confirmLabel: "Trim"
      }
    }
  );
  e == null || e.onSubmit().then(() => {
    var l;
    this.value = t, u(this, a, p).call(this);
    const s = {
      headline: "Text trimmed",
      message: "You trimmed the text!"
    };
    (l = this._notificationContext) == null || l.peek("positive", { data: s });
  }, null);
};
o.styles = [
  C`
          #wrapper {
            margin-top: 10px;
            display: flex;
            gap: 10px;
          }
          .element {
            width: 100%;
          }
        `
];
r([
  g({ type: String })
], o.prototype, "value", 2);
r([
  h()
], o.prototype, "_suggestions", 2);
r([
  h()
], o.prototype, "_disabled", 2);
r([
  h()
], o.prototype, "_placeholder", 2);
r([
  h()
], o.prototype, "_maxChars", 2);
r([
  g({ attribute: !1 })
], o.prototype, "config", 1);
o = r([
  b("my-suggestions-property-editor-ui")
], o);
export {
  o as default
};
//# sourceMappingURL=suggestions.js.map
