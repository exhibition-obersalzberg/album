import React, { Component } from 'react';
import { Button } from '@wfp/ui';
import './content.scss';
import Slider from "react-slick";
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-regular-svg-icons'

import classNames from 'classnames';


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className="content__next"
      style={{ ...style }}
      onClick={onClick}
      kind="secondary"
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className="content__prev"
      style={{ ...style }}
      onClick={onClick}
      kind="secondary"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
}

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

    const { items } = this.props;
    const listItems = items.map((element, i) =>
      <div key={i} className="content__slide">
        <div className="content__image">
          {_.get(element, 'acf.image.url') &&
            <img
              alt="alternative Text"
              className="content__image__file"
              src={element.acf.image.url}
            />
          }
        </div>
        <div className="content__text">
          <span className="content__title">{element.title.rendered}</span>
          <span className="content__description">
            <div dangerouslySetInnerHTML={{ __html: element.content.rendered }} />
          </span>
        </div>
      </div>
    );

    return (
      <div>
        <Button kind="inverse" className="navigation__close" onClick={toggleNav}>Menü</Button>
        <div className="content">
          <Slider
            dots
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {listItems}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Navigation;
