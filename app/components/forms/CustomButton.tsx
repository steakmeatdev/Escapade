interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`w-full text-center py-4 bg-escapade hover:bg-escapade-dark text-white rounded-xl transition cursor-pointer ${className}`}
      >
        {label}
      </div>
    </>
  );
};
export default CustomButton;
