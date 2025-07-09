import React from 'react';
import { StarRatingProps } from './types';

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array(fullStars).fill(0).map((_, i) => (
        <span key={`full-${i}`} style={{ color: 'gold', fontSize: '20px' }}>★</span>
      ))}
      {hasHalfStar && <span style={{ color: 'gold', fontSize: '20px' }}>☆</span>}
      {Array(emptyStars).fill(0).map((_, i) => (
        <span key={`empty-${i}`} style={{ color: 'lightgray', fontSize: '20px' }}>★</span>
      ))}
    </div>
  );
};

export default StarRating;
