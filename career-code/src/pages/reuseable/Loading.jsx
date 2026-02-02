const Loading = ({ size = "md", fullScreen = false }) => {
  const sizeClass = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  }[size];

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className={`loading loading-spinner text-primary ${sizeClass}`}></span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-4">
      <span className={`loading loading-spinner text-primary ${sizeClass}`}></span>
    </div>
  );
};

export default Loading;
