const Preloader: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={className ?? ''}>Loading...</div>;
};

export default Preloader;
