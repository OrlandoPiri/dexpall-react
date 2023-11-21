import React, { useState } from 'react';
import './Posts.css';
// import Title from './Title';

import { posts } from '../../data';
import Post from './Post';

const Posts = () => {
  const [items, setItems] = useState(posts);

  return (
    <section className='posts'>
      <h4 className='posts-title'>featured posts:</h4>
      <div className='posts-center featured-center'>
        {items.map((post) => {
          /*const { id, image, date, title, info, location, duration, price } =
            tour;*/
          return (
            <Post key={post.id} {...post} />
            /*           <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>*/
          );
        })}
      </div>
      {items.length === 0 ? (
        <button
          type='button'
          className='btn refresh-btn'
          onClick={() => setItems(posts)}
        >
          refresh
        </button>
      ) : (
        <button
          type='button'
          className='btn clear-btn'
          onClick={() => setItems([])}
        >
          clear all
        </button>
      )}
    </section>
  );
};

export default Posts;
