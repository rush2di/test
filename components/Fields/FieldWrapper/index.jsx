const FieldWrapper = ({ label, meta, ...props }) => {
  return (
    <>
      <label
        className="d-block font-weight-medium txt-md mb-0-50"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {props.children}
      {meta.touched && meta.error ? (
        <div className="color-danger txt-md mt-0-50">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FieldWrapper;
