export function Button({ children, className, variant = 'default', ...props }) {
    const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none transition-all";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
    };
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }