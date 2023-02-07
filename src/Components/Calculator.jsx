import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Calculator = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState("1");
  const [exchangeInput, setExchangeInput] = useState(1 / 1256);
  const [exchange, setExchange] = useState();
  const [dropdown, setDropdown] = useState([""]);
  const [seDropdown, setSeDropdown] = useState([""]);
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState(["KRW"]);
  const [secondValue, setSecondValue] = useState(["USD"]);

  useEffect(() => {
    async function getCurrency() {
      const { data } = await axios.get(
        "https://api.exchangerate.host/latest?base=USD"
      );
      setCountry(data.rates);

      setDropdown(Object.entries(data.rates).map((item) => item[0]));
    }
    console.log(input);

    getCurrency();
  }, []);

  //input change Handler
  const inputHandleChange = (e) => {
    setInput(e.target.value);
    setExchangeInput((e.target.value / country[value]) * country[secondValue]);
    console.log("dropdown ::", dropdown);
  };

  // 위에 select 박스 onchangeHandler
  const selectHandleChange = (e) => {
    setValue(e.target.value);
    setExchangeInput((input / country[e.target.value]) * country[secondValue]);
  };

  //아래 input change handler
  const seInputChangeHandler = (e) => {
    let data = e.target.value;
    setExchangeInput(data);
    setInput(data / country[secondValue]);
  };
  // 아래 select 박스 onchangeHandler
  const selectExchangeHandler = (e) => {
    setSecondValue(e.target.value);
    setExchangeInput((input / country[value]) * country[e.target.value]);
  };
  console.log(country);

  return (
    <>
      <Header>
        <CalDiv>
          <CalInput name="amount" value={input} onChange={inputHandleChange} />
          <select
            value={value}
            onChange={(e) => selectHandleChange(e)}
            style={{ width: "300px", height: "50px" }}
          >
            {dropdown.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </CalDiv>
        <ExchangeDiv>
          <ExchangeInput
            value={exchangeInput}
            onChange={seInputChangeHandler}
          />
          <select
            value={secondValue}
            onChange={(e) => selectExchangeHandler(e)}
            style={{ width: "300px", height: "50px" }}
          >
            {dropdown.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </ExchangeDiv>
      </Header>
    </>
  );
};

export default Calculator;
const Header = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CalInput = styled.input`
  width: 100px;
  height: 45px;
`;
const ExchangeInput = styled.input`
  width: 100px;
  height: 45px;
`;
const CalDiv = styled.div`
  width: 300px;
  height: 80px;
  background-color: none;
  border: black;
  display: flex;
  flex-direction: row;
`;
const ExchangeDiv = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: row;
`;
