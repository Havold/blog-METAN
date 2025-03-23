import React from "react";

import styles from "./inputField.module.css";

type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "password";
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
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
