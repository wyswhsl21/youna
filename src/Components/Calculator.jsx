import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Calculator = ({ transfer }) => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState("1");
  const [exchangeInput, setExchangeInput] = useState((1 / 1256).toFixed(5));
  const [exchange, setExchange] = useState();
  const [dropdown, setDropdown] = useState([""]);
  const [seDropdown, setSeDropdown] = useState([""]);
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("KRW");
  const [secondValue, setSecondValue] = useState("USD");

  useEffect(() => {
    async function getCurrency() {
      const { data } = await axios.get(
        "https://api.exchangerate.host/latest?base=USD"
      );
      setCountry(data.rates);

      setDropdown(Object.entries(data.rates).map((item) => item[0]));
    }

    getCurrency();
  }, []);
  console.log(dropdown);

  //input change Handler
  const inputHandleChange = (e) => {
    setInput(e.target.value);
    setExchangeInput(
      ((e.target.value / country[value]) * country[secondValue]).toFixed(5)
    );
    console.log("dropdown ::", dropdown);
  };

  // 위에 select 박스 onchangeHandler
  const selectHandleChange = (e) => {
    setValue(e.target.value);
    setExchangeInput(
      ((input / country[e.target.value]) * country[secondValue]).toFixed(5)
    );
  };
  console.log(value);

  //아래 input change handler
  const seInputChangeHandler = (e) => {
    let data = e.target.value;
    setExchangeInput(data);
    setInput(((data / country[secondValue]) * country[value]).toFixed(5));
  };
  // 아래 select 박스 onchangeHandler
  const selectExchangeHandler = (e) => {
    setSecondValue(e.target.value);
    setExchangeInput(
      ((input / country[value]) * country[e.target.value]).toFixed(5)
    );
  };
  console.log(exchangeInput);

  return (
    <>
      <Header>
        <CalDiv>
          <CalInput
            name="amount"
            value={input === "NaN" ? "" : input}
            onChange={inputHandleChange}
          />
          <select
            value={value}
            onChange={(e) => selectHandleChange(e)}
            style={{
              outline: "none",
              width: "130px",
              height: "50px",
              border: "none",
              borderRadius: "0 10px 10px 0",
            }}
          >
            {dropdown.map((item, index) => (
              <option key={index} value={item}>
                {transfer?.map((trans) => trans[item])}
              </option>
            ))}
          </select>
        </CalDiv>
        <ExchangeDiv>
          <ExchangeInput
            value={exchangeInput === "NaN" ? "" : exchangeInput}
            onChange={seInputChangeHandler}
          />
          <select
            value={secondValue}
            onChange={(e) => selectExchangeHandler(e)}
            style={{
              outline: "none",
              width: "130px",
              height: "50px",
              border: "none",
              borderRadius: "0 10px 10px 0",
            }}
          >
            {dropdown.map((item, index) => (
              <option key={index} value={item}>
                {transfer?.map((trans) => trans[item])}
              </option>
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
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CalInput = styled.input`
  width: 100px;
  height: 45px;
  border: none;
  &:focus {
    outline: none;
  }
  border-right: 1px solid gray;
  border-radius: 10px 0 0 10px;
`;
const ExchangeInput = styled.input`
  width: 100px;
  height: 45px;
  border: none;
  &:focus {
    outline: none;
  }
  border-right: 1px solid gray;
  border-radius: 10px 0 0 10px;
`;
const CalDiv = styled.div`
  width: 300px;
  height: 50px;

  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ExchangeDiv = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid gray;
  justify-content: space-between;
`;
