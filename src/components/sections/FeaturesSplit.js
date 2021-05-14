import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Residential Services',
    paragraph: "For any home electric problem, GP Electric Co. is your solution."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="photos" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Custom Home Development
                  </div>
                <h3 className="mt-0 mb-12">
                Making your vision a reality
                  </h3>
                <p className="m-0">
                GP Electric Co. has worked with various custom and semi-custom builders, ensuring a seamless electrical experience from the moment you step in the door. Heated floors? Steam generators and saunas? Fogless mirrors? Maybe you’re looking into smart-home automation, or maybe you just need that light fixture centered perfectly over your billiard table. Whatever the case, our technicians stay up-to-date with the latest products and practices to build you the home of your dreams.                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gp-electric-sites/interior.jpg')}
                  alt="exterior"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Remodel
                  </div>
                <h3 className="mt-0 mb-12">
                  Make your house a home
                  </h3>
                <p className="m-0">
                No home renovation is complete without top-of-the-line wiring. GP Electric Co. prides ourselves on creating an interactive design process with our clients. We will be with you every step of the way, providing ideas and options for you to choose from. Our technicians go above and beyond to build an electrical system with the maximum possible flexibility to make your next renovation that much easier.                   
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gp-electric-sites/remodel.jpg')}
                  alt="interior"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  New Construction
                  </div>
                <h3 className="mt-0 mb-12">
                  Build from the ground up
                  </h3>
                <p className="m-0">
                From tract-homes to custom mansions, our technicians know how to turn your blueprint into a home. GP Electric Co. prides itself on maintaining positive relationships with electrical and building inspectors in municipal jurisdictions across northern Illinois. GP does it right, the first time, saving you time and money. Building your own home can be quite the challenge, so why not make the electrical easy? From a hole in the ground to screwing in the last light bulb, GP Electric Co. will be there with you every step of the way.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gp-electric-sites/exterior.jpg')}
                  alt="exterior"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Service and maintenance
                  </div>
                <h3 className="mt-0 mb-12">
                  Stay on the cutting edge
                  </h3>
                <p className="m-0">
                If you don’t schedule for maintenance, maintenance will schedule for you! Breakers tripping? Outlets no longer work? Light bulbs burning out too fast? When it comes to troubleshooting and maintenance, GP Electric Co. has been there, done that, and knows just what to do. We also provide a complimentary whole-house diagnostic report to let you know about any other existing electrical issues. We can also make recommendations about updating your home's electrical devices to conform with current best-practices; including surge protection, generators, transfer switches, and more.                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gp-electric-sites/fixture2.jpg')}
                  alt="lighting fixture"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;