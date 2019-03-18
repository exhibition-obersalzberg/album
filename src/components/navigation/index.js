import React, { Component } from 'react';
import { Button } from '@wfp/ui';

import './navigation.scss';

import classNames from 'classnames';

class Navigation extends Component {
  render() {

    const { navOpen, toggleNav } = this.props;

    const classnames = classNames({
      'navigation': true,
      'navigation-open': navOpen === true,
    });

    const list = [
      { title: 'Reisewege', description: 'Lorem Ipsum et dolor' },
      { title: 'Berlin', description: 'Lorem Ipsum et dolor' },
      { title: 'Bayreuth - "Stadt der Erziehung"', description: 'Lorem Ipsum et dolor' },
      { title: 'Nürnberg - "Stadt der Parteitage"', description: ' (10.- 16.9.1935)' },
      { title: '"Geheimbühne" Obersalzberg', description: 'Lorem Ipsum et dolor' },
      { title: 'München - "Stadt der Bewegung"', description: 'Lorem Ipsum et dolor' },
      { title: 'Inszenierung', description: 'Lorem Ipsum et dolor' },
      { title: 'Herrschaftsstil', description: 'Lorem Ipsum et dolor' },
    ];

    const listItems = list.map((element, i) =>
      <li key={i}>
        <span className="navigation__list__title">{element.title}</span>
        <span className="navigation__list__description">{element.description}</span>
      </li>
    );

    return (
      <div className={classnames}>
        <Button kind="inverse" className="navigation__close" onClick={toggleNav}>Schließen</Button>
        <div className="navigation__list">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
