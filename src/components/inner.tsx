type InnerProps = {
  className?: string;
  children: React.ReactNode;
};

const Inner = ({ className = ``, children }: InnerProps) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
    }}
    className={className}
  >
    {children}
  </div>
);

export default Inner;
