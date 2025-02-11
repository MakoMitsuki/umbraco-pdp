import { css as l, customElement as c, html as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as i } from "@umbraco-cms/backoffice/lit-element";
var h = Object.getOwnPropertyDescriptor, p = (r, s, n, a) => {
  for (var e = a > 1 ? void 0 : a ? h(s, n) : s, o = r.length - 1, m; o >= 0; o--)
    (m = r[o]) && (e = m(e) || e);
  return e;
};
let t = class extends i {
  render() {
    return d`
      <h1>Welcome Dashboard</h1>
      <div>
        <p>
          This is the Backoffice. From here, you can modify the content,
          media, and settings of your website. Ur mom can edit it
        </p>
        <p>© Ama Usa An 2025</p>
      </div>
    `;
  }
};
t.styles = [
  l`
      :host {
        display: block;
        padding: 24px;
      }
    `
];
t = p([
  c("my-welcome-dashboard")
], t);
const b = t;
export {
  t as MyWelcomeDashboardElement,
  b as default
};
//# sourceMappingURL=welcome-dashboard.js.map
