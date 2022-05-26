const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="mb-2 txt-center">
      <span className="d-block font-weight-medium letter-spacing-200 mb-0-25 txt-md txt-uppercase color-comp">
        {subtitle}
      </span>
      <h2 className="font-comp font-weight-light txt-display-comp">{title}</h2>
    </div>
  );
};

export default SectionTitle;
