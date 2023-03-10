import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 11 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleAlert}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
