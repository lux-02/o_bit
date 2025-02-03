import { useState } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [binaryStr, setBinaryStr] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 숫자가 아닌 경우엔 빈 문자열 처리
    if (value === "" || isNaN(Number(value))) {
      setBinaryStr("");
      return;
    }

    // 정수로 변환 후 이진수 문자열로 변경 (최소 4자리로 패딩)
    const num = Math.floor(Number(value));
    let bin = num.toString(2);
    while (bin.length < 4) {
      bin = "0" + bin;
    }
    setBinaryStr(bin);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="0000"
          className={styles.inputBox}
        />
      </div>

      <div className={styles.circleContainer}>
        {binaryStr.split("").map((bit, index) => (
          <div
            key={index}
            className={`${styles.circle} ${bit === "1" ? styles.filled : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
