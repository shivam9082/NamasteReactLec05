import React from 'react';
import './Shimmer.css'; // You'll need to create this CSS file for the shimmer effect styles

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card-image shimmer"></div>
      <div className="shimmer-card-info">
        <div className="shimmer shimmer-text"></div>
        <div className="shimmer shimmer-text"></div>
        <div className="shimmer shimmer-text short"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
