import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Always online',
    Svg: require('../../static/img/features/p1.svg').default,
    description: (
      <>
        our servers are always online so you don't need to worry about your server going offline
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('../../static/img/features/p2.svg').default,
    description: (
      <>
        Our server have ping around 30ms. 
      </>
    ),
  },
  {
    title: 'Fast support',
    Svg: require('../../static/img/features/p3.svg').default,
    description: (
      <>
        Any problem? We can help you in matter of minutes
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
