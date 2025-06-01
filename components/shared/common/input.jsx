import React from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  placeholder = "",
  value,
//   onChange,
  error,
  icon ='',
  styles = {},
  inputStyles = "",
  labelStyles = "",
  errorStyles = "",
  iconPosition = "left", // or "right"
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1 mb-4  ${styles.wrapper || ""}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-sm   text-gray-700 ${labelStyles}`}
        >
          {label}
        </label>
      )}

      <div
        className={`flex items-center border bg-zinc-100  px-3 py-2 ${
          error ? "border-red-500" : "border-zinc-300"
        } focus-within:border-blue-500`}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2 text-gray-500">{icon}</span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
        //   onChange={onChange}
          className={`w-full outline-none bg-transparent ${inputStyles}`}
          {...rest}
        />
        {icon && iconPosition === "right" && (
          <span className="ml-2 text-gray-500">{icon}</span>
        )}
      </div>

      {error && (
        <p className={`text-red-500 text-xs ${errorStyles}`}>{error}</p>
      )}
      
    </div>
  );
};

export default CustomInput;
