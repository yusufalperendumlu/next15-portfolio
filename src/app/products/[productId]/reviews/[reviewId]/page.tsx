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

  return (
    <h1>
      Product Review: {productId} / {reviewId}
    </h1>
  );
}
