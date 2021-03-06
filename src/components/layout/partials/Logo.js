import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
          <Image
            src={require('./../../../assets/images/gp-electric/white-copper-outlined-logo.png')}
            alt="Logo"
            width={32}
            height={32} />
      </h1>
    </div>
  );
}

export default Logo;