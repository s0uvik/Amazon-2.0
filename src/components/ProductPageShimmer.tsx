import { Shimmer } from "react-shimmer";

const ProductPageShimmer = () => {
  return (
    <div className=" flex flex-wrap gap-2 justify-around sm:justify-between md:-mt-40">
      {Array(10)
        .fill(1)
        .map(() => {
          return <Shimmer width={200} height={300} />;
        })}
    </div>
  );
};

export default ProductPageShimmer;
