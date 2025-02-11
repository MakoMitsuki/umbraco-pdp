import { css, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";

@customElement('my-welcome-dashboard')
export class MyWelcomeDashboardElement extends UmbLitElement {

  render() {
    return html`
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

  static styles = [
    css`
      :host {
        display: block;
        padding: 24px;
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