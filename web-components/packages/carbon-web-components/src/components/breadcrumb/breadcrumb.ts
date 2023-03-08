/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './breadcrumb.scss';

/**
 * Breadcrumb.
 *
 * @element cds-breadcrumb
 */
@customElement(`${prefix}-breadcrumb`)
class BXBreadcrumb extends LitElement {
  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'nav');
    }
    super.connectedCallback();
  }

  render() {
    return html`
      <ol
        class="${prefix}--breadcrumb ${prefix}--breadcrumb--no-trailing-slash">
        <slot></slot>
      </ol>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXBreadcrumb;
