const Button = ({ children, onClick, variant = "default", ...props }) => {
    const baseStyle =
        "px-4 py-2 rounded transition duration-150 ease-in-out font-medium";

    const variants = {
        default: "bg-slate-100 text-gray-800 hover:bg-slate-200",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        icon: "bg-gray-100 hover:bg-gray-200 text-xl p-2",
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`} {...props}>
        {children}
        </button>
    );
    };

export default Button;
