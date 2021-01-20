import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './styles/DataDetail.scss';
import LikeButton from './common/likeButton';
import RemoveButton from './common/removeButton';

const DataDetail = ({id,image,title,item}) => (
  <article className="GalleryItem">
    <Link className="GalleryItem-wrapper" to={`/detail/${id}`} title={title}>
      <div className="GalleryItem-imageWrapper">
        <LazyLoad height={200} once>
          <img 
            src={image}
            alt={title}
            className="GalleryItem-image"
          />
        </LazyLoad>
      </div>
      <p className="GalleryItem-title">{title}</p>
    </Link>
    <LikeButton item={item}/>
    <RemoveButton item={item}/>
  </article>
);

DataDetail.prototype = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default DataDetail;