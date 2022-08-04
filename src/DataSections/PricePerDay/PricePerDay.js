import React from "react";
import { Col } from "react-bootstrap";
import { InputField } from "../../InputField/InputField";

export default function PricePerDay({
  pricePerDay,
  setPricePerDay,
  extraHourSalary,
  setExtraHourSalary,
  numOfHours,
  setNumOfHours,
  priceDeductHr,
  setPriceDeductHr,
  setTakenAmount,
  takenAmount,
}) {
  return (
    <>
      <Col xs="6" className="mb-3">
        <InputField
          label="اليومية عمومأ"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setPricePerDay(+e.target.value);
          }}
          value={pricePerDay || ""}
        />
      </Col>
      <Col xs="6" className="mb-3">
        <InputField
          label="الساعة الاضافية"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setExtraHourSalary(+e.target.value);
          }}
          value={extraHourSalary || ""}
        />
      </Col>
      <Col xs="6" className="mb-2">
        <InputField
          label="ساعات العمل"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setNumOfHours(+e.target.value);
          }}
          value={numOfHours || ""}
        />
      </Col>
      <Col xs="6" className="mb-2">
        <InputField
          label="سعر ساعة التاخير"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setPriceDeductHr(+e.target.value);
          }}
          value={priceDeductHr || ""}
        />
      </Col>
      <Col xs="6" className="mb-2">
        <InputField
          label="كل السحوبات"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setTakenAmount(+e.target.value);
          }}
          value={takenAmount || ""}
        />
      </Col>
    </>
  );
}
