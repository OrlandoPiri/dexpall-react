import React from 'react';

import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const Post = ({
  /*id,*/ image,
  update,
  title,
  info,
  location,
  duration,
  price,
}) => {
  return (
    <article className='tour-card' /*key={id}*/>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='update'>{update}</p>
      </div>
      <div className='tour-info'>
        <h4 className='tour-title'>{title}</h4>
        <p>{info}</p>
        <div className='tour-footer'>
          {/* <div>
           
          </div> */}
          <p>
            <span>
              {/* <i className='fas fa-map'></i> */}
              <FontAwesomeIcon icon={faMap} />
            </span>{' '}
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Post;
