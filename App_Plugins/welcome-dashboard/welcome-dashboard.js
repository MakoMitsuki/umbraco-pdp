import { css as p, state as d, customElement as b, html as n, repeat as m } from "@umbraco-cms/backoffice/external/lit";
import { UMB_CURRENT_USER_CONTEXT as _ } from "@umbraco-cms/backoffice/current-user";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbUserCollectionRepository as v } from "@umbraco-cms/backoffice/user";
var f = Object.defineProperty, w = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, c = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? w(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = (s ? i(t, r, a) : i(a)) || a);
  return s && a && f(t, r, a), a;
}, U = (e, t, r) => t.has(e) || h("Cannot " + r), g = (e, t, r) => (U(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), u;
let l = class extends y {
  constructor() {
    super(), this._userData = [], D(this, u, new v(this)), this.consumeContext(_, (e) => {
      this._observeCurrentUser(e);
    }), this._getPagedUserData();
  }
  async _getPagedUserData() {
    const { data: e } = await g(this, u).requestCollection();
    this._userData = (e == null ? void 0 : e.items) ?? [];
  }
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (t) => {
      this._currentUser = t;
    });
  }
  _renderUser(e) {
    if (e)
      return n`<uui-table-row class="user">
          <uui-table-cell>${e.name}</uui-table-cell>
          <uui-table-cell>${e.email}</uui-table-cell>
          <uui-table-cell>${e.state}</uui-table-cell>
      </uui-table-row>`;
  }
  render() {
    var e;
    return n`
      <uui-box>
        <span slot="headline">
                <umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
                ${((e = this._currentUser) == null ? void 0 : e.name) ?? "Unknown"}!
            </span>
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
        <uui-table id="users-wrapper">
  				<uui-table-row>
  					<uui-table-head-cell>Name</uui-table-head-cell>
  					<uui-table-head-cell>Email</uui-table-head-cell>
  					<uui-table-head-cell>Status</uui-table-head-cell>
  				</uui-table-row>
  				${m(this._userData, (t) => t.unique, (t) => this._renderUser(t))}
  			</uui-table>
    </uui-box>
      `;
  }
};
u = /* @__PURE__ */ new WeakMap();
l.styles = [
  p`
      :host {
  			display: block;
  			padding: var(--uui-size-layout-1);
  		}

        #users-wrapper {
          border: 1px solid lightgray;
        }
        .user {
          padding: 5px 10px;
        }
        .user:not(:first-child) {
          border-top: 1px solid lightgray;
        }

        uui-table-head-cell {
			font-weight: bold;
		}

		.user:hover,
		.user:focus {
			cursor: pointer;
			background-color: var(--uui-color-surface-alt);
		}
    `
];
c([
  d()
], l.prototype, "_currentUser", 2);
c([
  d()
], l.prototype, "_userData", 2);
l = c([
  b("my-welcome-dashboard")
], l);
const P = l;
export {
  l as MyWelcomeDashboardElement,
  P as default
};
//# sourceMappingURL=welcome-dashboard.js.map
