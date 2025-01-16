function ProductReviews({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      Hello, this is Project reviews Page of product {params.productId}.
    </div>
  );
}

export default ProductReviews;
