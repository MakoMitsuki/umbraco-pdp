import { css as c, customElement as i, html as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as n } from "@umbraco-cms/backoffice/lit-element";
var b = Object.getOwnPropertyDescriptor, h = (l, t, s, m) => {
  for (var e = m > 1 ? void 0 : m ? b(t, s) : t, a = l.length - 1, r; a >= 0; a--)
    (r = l[a]) && (e = r(e) || e);
  return e;
};
let o = class extends n {
  render() {
    return d`
          <h1>
            <umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
            Dashboard
          </h1>
          <div>
            <p>
              <umb-localize key="welcomeDashboard_bodytext">
                This is the Backoffice. From here, you can modify the content,
                media, and settings of your website.
              </umb-localize>
            </p>
            <p>
              <umb-localize key="welcomeDashboard_copyright">
                © Ama Usa An 2025
              </umb-localize>
            </p>
          </div>
        `;
  }
};
o.styles = [
  c`
      :host {
        display: block;
        padding: 24px;
      }
    `
];
o = h([
  i("my-welcome-dashboard")
], o);
const u = o;
export {
  o as MyWelcomeDashboardElement,
  u as default
};
//# sourceMappingURL=welcome-dashboard.js.map
