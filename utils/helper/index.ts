import { Review } from "@prisma/client";

export const calculateReviewsAvg = (reviews: Review[]) => {
  if (reviews.length === 0) return 0;
  return (
    reviews.reduce((current, review) => {
      return current + review.rating;
    }, 0) / reviews.length
  );
};
