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


const Shimmer = () => {
  return (
    <div className='shimmer-outer-div'>
    {(Array(10).fill("").map((_, index) => <ShimmerCard key={index} />))}
    </div>
  )
}

export default Shimmer;
