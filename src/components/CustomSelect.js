import React from "react";
import Select from "react-select";

const CustomSelect = ({ onChange, onBlur, options, values, className }) => {
  const defaultValue = (options, values) => {
    return options ? options.find((option) => option.value === values) : "";
  };

  const customStyles = {
    indicatorsContainer: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    container: (provided, state) => ({
      ...provided,
      width: "15rem",
      height: "2rem",
      // margin: "0 0 1rem 0",
      borderRadius: 10,
      border: "1px solid #93AD18",
    }),
    input: (provided, state) => ({
      ...provided,
      padding: "0 0 0 1rem",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className={className}>
      <Select
        defaultValue={defaultValue(options, values)}
        value={defaultValue(options, values)}
        onChange={(value) => onChange(value)}
        options={options}
        onBlur={onBlur}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomSelect;
