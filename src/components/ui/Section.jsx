const Section = ({ children, className = "" }) => {
  return (
    <div className={`max-w-md mx-auto my-4 p-4 bg-white-200 rounded shadow ${className}`}>
      {children}
    </div>
  );
};

export default Section;
