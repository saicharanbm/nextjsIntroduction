function ProductId({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      Hello, this is ProjectsId Page of {params.productId}.
    </div>
  );
}

export default ProductId;
