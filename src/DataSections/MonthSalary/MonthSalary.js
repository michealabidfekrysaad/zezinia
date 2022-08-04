import React from "react";
import { Col } from "react-bootstrap";
import { InputField } from "../../InputField/InputField";

export default function MonthSalary({
  pricePerDay,
  setPricePerDay,
  daysNumber,
  setDaysNumber,
  basicSalary,
  setBasicSalary,
}) {
  return (
    <>
      <Col xs={12} className="mb-2">
        <h4>حساب قبض الشهر بدون خصم</h4>
      </Col>
      <Col xs={5}>
        <InputField
          label="اليومية"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setPricePerDay(+e.target.value);
          }}
          value={pricePerDay || ""}
          disabled
        />
      </Col>
      <Col xs={2} className="d-flex justify-content-center align-items-end">
        x
      </Col>
      <Col xs={5}>
        <InputField
          label="عدد الايام"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setDaysNumber(+e.target.value);
          }}
          value={daysNumber || ""}
        />
      </Col>
      <Col xs={12} className="text-center mt-2 fake-height">
        {basicSalary && <h5> القبض : {basicSalary}</h5>}
      </Col>
    </>
  );
}
