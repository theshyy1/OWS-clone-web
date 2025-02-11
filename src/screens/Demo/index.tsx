import React, { useState } from "react";

const options = [
  { icon: 1, text: "Option 1" },
  { icon: 2, text: "Option 2" },
  { icon: 3, text: "Option 3" },
];

const Demo = () => {
  const [showText, setShowText] = useState(true); // State để theo dõi trạng thái hiển thị text

  const handleButtonClick = () => {
    setShowText(!showText); // Thay đổi trạng thái khi click
  };

  return (
    <div>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={handleButtonClick} className="flex items-center">
              {" "}
              {/* Sử dụng flex để căn chỉnh icon và text */}
              <span
                className={`transition-opacity duration-300 ${showText ? "opacity-100" : "opacity-0"}`}
              >
                {" "}
                {/* Hiệu ứng cho icon */}
                {option.icon}
              </span>
              <span
                className={`transition-opacity duration-300 ${showText ? "opacity-100" : "opacity-0"}`}
              >
                {" "}
                {/* Hiệu ứng cho text */}
                {option.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
