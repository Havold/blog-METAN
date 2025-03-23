import React from "react";

import styles from "./inputField.module.css";

type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "password";
  required?: true | false;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label} {required ? <span style={{ color: "red" }}>*</span> : ""}
      </label>
      <input
        required={required}
        className={styles.input}
        placeholder={label}
        name={name}
        id={name}
        type={type}
      />
    </div>
  );
};

export default InputField;
