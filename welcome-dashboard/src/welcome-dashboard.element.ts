import { css, html, customElement, state, repeat } from "@umbraco-cms/backoffice/external/lit";
import { type UmbCurrentUserModel, UMB_CURRENT_USER_CONTEXT, UmbCurrentUserContext } from "@umbraco-cms/backoffice/current-user";
import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { type UmbUserDetailModel, UmbUserCollectionRepository } from '@umbraco-cms/backoffice/user';

@customElement('my-welcome-dashboard')
export class MyWelcomeDashboardElement extends UmbLitElement {

  @state()
    private _currentUser?: UmbCurrentUserModel;

   @state()
    private _userData: Array<UmbUserDetailModel> = [];
    
    #userRepository = new UmbUserCollectionRepository(this);

    constructor() {
        super();
        this.consumeContext(UMB_CURRENT_USER_CONTEXT, (instance: UmbCurrentUserContext) => {
            this._observeCurrentUser(instance);
        });
        this._getPagedUserData();
    }

    private async _getPagedUserData() {
      const { data } = await this.#userRepository.requestCollection();
      this._userData = data?.items ?? [];
    }

    private async _observeCurrentUser(instance: typeof UMB_CURRENT_USER_CONTEXT.TYPE) {
        this.observe(instance.currentUser, (currentUser: UmbCurrentUserModel | undefined) => {
            this._currentUser = currentUser;
        });
    }

    private _renderUser(user: UmbUserDetailModel) {
      if (!user) return;
      return html`<uui-table-row class="user">
          <uui-table-cell>${user.name}</uui-table-cell>
          <uui-table-cell>${user.email}</uui-table-cell>
          <uui-table-cell>${user.state}</uui-table-cell>
      </uui-table-row>`;
    }

    render() {
      return html`
      <uui-box>
        <span slot="headline">
                <umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
                ${this._currentUser?.name ?? 'Unknown'}!
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
  				${repeat(this._userData, (user) => user.unique, (user) => this._renderUser(user))}
  			</uui-table>
    </uui-box>
      `;
    }

  static styles = [
    css`
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
    `,
  ];
}

export default MyWelcomeDashboardElement;

declare global {
  interface HTMLElementTagNameMap {
    'my-welcome-dashboard': MyWelcomeDashboardElement;
  }
}