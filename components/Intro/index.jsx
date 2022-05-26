import DefaultBTN from "components/Button";

const Intro = ({
  subtitle,
  title,
  text,
  headingTag,
  buttonText,
  buttonHref,
  isDark = false,
}) => {
  const CostumeTag = headingTag || "h1";

  const subtitleStyle = isDark
    ? "txt-md txt-uppercase font-weight-bold letter-spacing-100 color-comp"
    : "txt-md txt-uppercase font-weight-bold letter-spacing-100";

  const titleStyle = isDark
    ? "font-comp txt-capitalize txt-display-main my-1 font-weight-normal color-light"
    : "font-comp txt-capitalize txt-display-main my-1 font-weight-normal";

  const textStyle = isDark
    ? "txt mr-1-25 mr-sm-0 mb-1-50 color-muted"
    : "txt mr-1-25 mr-sm-0 mb-1-50";

  return (
    <div>
      <span className={subtitleStyle}>{subtitle}</span>
      <CostumeTag className={titleStyle}>{title}</CostumeTag>
      <p className={textStyle}>{text}</p>
      <div className="row">
        <div className="col-6 col-sm-12">
          <DefaultBTN href={buttonHref}>{buttonText}</DefaultBTN>
        </div>
      </div>
    </div>
  );
};

export default Intro;
