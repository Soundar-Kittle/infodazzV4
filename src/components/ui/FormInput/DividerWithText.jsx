import { Star } from "lucide-react";

const DividerWithText = ({
  text,
  position = "center", // "start" | "center" | "end"
  showLines = false,
  underline = false,
  overline = false,
  lineStyle = "solid", // solid | dotted | dashed | double
  lineColor = "border-gray-700",
  lineClassName = "",
  textClassName = "",
  className = "",
  startWith = null,
  endWith = null,
  component = null,
}) => {
  const borderStyles = {
    solid: "border-t-2",
    dotted: "border-t-2 border-dotted",
    dashed: "border-t-2 border-dashed",
    double: "border-t-4 border-double",
  };

  const iconMap = {
    star: <Star size={14} className="text-current fill-current" />,
    square: <div className="w-2 h-2 bg-current" />,
    circle: <div className="w-2 h-2 rounded-full bg-current" />,
  };

  const renderIcon = (type) =>
    typeof type === "string" ? iconMap[type] || null : type;

  const renderHorizontal = () => (
    <div
      className={`flex items-center w-full gap-2 my-2 ${
        position === "start"
          ? "justify-start "
          : position === "end"
            ? "justify-end"
            : "justify-start"
      }`}
    >
      {position !== "start" && showLines && (
        <>
          {startWith && <span>{renderIcon(startWith)}</span>}
          <hr
            className={`flex-grow ${borderStyles[lineStyle]} ${lineColor} ${lineClassName}`}
          />
        </>
      )}
      <span className={`text-base font-semibold ${textClassName}`}>{text}</span>
      {position !== "end" && showLines && (
        <>
          <hr
            className={`flex-grow ${borderStyles[lineStyle]} ${lineColor} ${lineClassName}`}
          />
          {endWith && <span>{renderIcon(endWith)}</span>}
        </>
      )}
    </div>
  );

  const renderStacked = () => (
    <div className="w-full my-2">
      <div className="flex justify-between items-center mb-1">
        <span
          className={`text-base font-semibold w-full relative flex items-center gap-2 ${textClassName}`}
        >
          {text}
          {component}
        </span>
      </div>
      <div className="relative w-full flex items-center">
        {startWith && (
          <div className="absolute left-0">{renderIcon(startWith)}</div>
        )}
        <hr
          className={`w-full ${startWith || endWith ? "mx-4" : ""} ${borderStyles[lineStyle]} ${lineColor} ${lineClassName}`}
        />
        {endWith && (
          <div className="absolute right-0">{renderIcon(endWith)}</div>
        )}
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {overline && renderStacked()}
      {!underline && !overline && renderHorizontal()}
      {underline && renderStacked()}
    </div>
  );
};

export default DividerWithText;
