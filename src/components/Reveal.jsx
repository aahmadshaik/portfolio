import { useReveal } from "../hooks/useReveal";

const Reveal = ({ as = "div", delay = 0, className = "", children, ...rest }) => {
  const { ref, isVisible } = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
