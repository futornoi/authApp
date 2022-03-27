
const MoreActionsPopup:React.FC<{className?: string}> = ({children, className}) => {
  return (
    <div className={`moreActions ${className ?? ''}`}>
      <div className="moreActions_burger">
        <span/><span/><span/>
      </div>
      <div className="moreActions_content">
        {children}
      </div>
    </div>
  );
};

export default MoreActionsPopup;
