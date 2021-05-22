import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'See for yourself what our clients have to say about our work.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — We worked with Mike to finish our basement and run all new electrical and he was an absolute joy to work with. He was very knowledgeable and understood all the electrical codes and needs for the house, and was able to use a rough blasement floor plan to help us get the best design for the lighting and outlets needed. Mike was also very professional and accommodating of our specific requests and worked with us to have the best price. He picked up all the equipment, did all load in and the clean up. He was always on time and worked quickly to full completion. As expected, his quality work passed inspection with flying colors and no follow-up was needed.  I will continue to use Mike for all electrical needs that my home needs. I would highly recommend him to anyone that needs electrical work.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sam P</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Elgin, IL</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  I contacted GP Electric after I got a quote that was out of my budget. GP was much more affordable and did more work. These guys came in, did everything they said they would do. They cleaned up after themselves, they were quick, and efficient. They did a sub panel addition, re-routed outlets, installed light fixtures, and installed a heated tile flooring thermostat. I'm definitively calling them back to do more work on my house. Highly recommend them to anyone in need of electrical services!                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Moises P</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Crystal Lake, IL</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  I used GP Electric services for recess lights installation in my bedrooms. Fernando arrived on time and he and his partner took only 2.5 hours to install 8 lights. (4 in each room). They worked fast, were clean and did a great job. We had the rooms and the ceilings freshly painted and asked them to be careful. They did not damage anything! My father who is a retired electrician said that if he needs any electrical work done in his house, would hire Fernando! I would definitely recommend him - efficient , clean, and courteous!! His prices are also very reasonable.                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Stef S</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Buffalo Grove, IL</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;