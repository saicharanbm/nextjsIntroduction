import { notFound } from "next/navigation";
function ProductReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      Hello, this is Project review number {params.reviewId} of product number
      {params.productId}.
    </div>
  );
}

export default ProductReviewId;
