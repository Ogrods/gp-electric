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
    title: 'Custom Projects',
    paragraph: "For business and residential construction and remodel projects, we power your project from start to finish."
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
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Remodel
                  </div>
                <h3 className="mt-0 mb-12">
                  Make your house a home
                  </h3>
                <p className="m-0">
                  No renovation is complete without reliable, industry-leading electrical installations and top-of-the-line wiring. The certified electricians at Apple Electric know how important your home is, so we work with you from the design phase to putting the finishing touches on the lights and electrical wiring on your home addition, remodel or renovation.                  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gp-electric-sites/interior.jpg')}
                  alt="interior"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Construction
                  </div>
                <h3 className="mt-0 mb-12">
                  Build from the ground up
                  </h3>
                <p className="m-0">
                  We will carefully inspect your home to determine what kind of electrical work and wiring you’re going to need for your construction project, and work with you to design a layout that will best suit your requirements. ensuring your electrical project meets code requirements, safety compliance, and importantly your satisfaction.                 </p>
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
                Like every system in your building, your electrical system needs to be updated in order to keep running smoothly. We offer the latest upgrades and features that will keep your business stylish and efficient. From LED lighting to high-efficiency wiring, our wide selection of upgrades and new product installs will keep you up to date. With better electrical systems in your home or business, you’ll be extending the life of your circuits and wiring.                  </p>
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