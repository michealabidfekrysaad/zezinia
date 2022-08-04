import React from "react";
import { Col } from "react-bootstrap";
import { InputField } from "../../InputField/InputField";

export default function OverTime({
  setBasicSalary,
  basicSalary,
  hoursNumberOverTime,
  setHoursNumberOverTime,
  salaryWithOver,
}) {
  return (
    <>
      <Col xs={12} className="mb-2">
        <h4>القبص مع الساعات الاضافية</h4>
      </Col>
      <Col xs={5}>
        <InputField
          label="قبض الشهر"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setBasicSalary(+e.target.value);
          }}
          value={basicSalary || ""}
          disabled
        />
      </Col>
      <Col xs={2} className="d-flex justify-content-center align-items-end">
        +
      </Col>
      <Col xs={5}>
        <InputField
          label="الساعات الاضافية"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setHoursNumberOverTime(+e.target.value);
          }}
          value={hoursNumberOverTime || ""}
        />
      </Col>
      <Col xs={12} className="text-center mt-2 fake-height">
        {salaryWithOver && <h5>القبض بالاضافي : {salaryWithOver}</h5>}
      </Col>
    </>
  );
}
