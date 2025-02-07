import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }

  if (parseInt(reviewId) === 1) {
    throw new Error("Review not found!");
  }

  return (
    <h1>
      Product Review: {productId} / {reviewId}
    </h1>
  );
}
