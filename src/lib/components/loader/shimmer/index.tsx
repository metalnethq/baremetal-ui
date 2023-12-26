import "./animation.css";

type Props = {
  numberOfLines?: number;
  intent?: "card" | "list";
};

const ShimmerLoader = ({ numberOfLines = 4, intent = "card" }: Props) => {
  const shimmerStyle = {
    backgroundImage:
      "linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 2s linear infinite",
  };

  return (
    <div className="flex w-full p-3" data-testid="shimmer-loader">
      {intent === "card" && (
        <div
          className="h-[60px] w-[60px] rounded-full mr-2"
          style={shimmerStyle}
        />
      )}
      <div className="flex flex-1 flex-col">
        {...Array(numberOfLines)
          .fill(0)
          .map((_, i) =>
            i % 2 === 0 ? (
              <div
                key={i}
                className="h-4 w-full rounded-sm mb-2"
                style={shimmerStyle}
              />
            ) : (
              <div
                key={i}
                className="h-4 w-5/6 rounded-sm mb-2"
                style={shimmerStyle}
              />
            )
          )}
      </div>
    </div>
  );
};

export default ShimmerLoader;
