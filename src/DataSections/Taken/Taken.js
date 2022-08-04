import React from "react";
import { Col } from "react-bootstrap";
import { InputField } from "../../InputField/InputField";

export default function Taken({
  setTotalDeductAmount,
  totalDeductAmount,
  setTakenAmount,
  takenAmount,
  finalSalary,
}) {
  return (
    <>
      <Col xs={12} className="mb-2">
        <h4>القبص مع خصم السحوبات</h4>
      </Col>
      <Col xs={5}>
        <InputField
          label="القبض بالتاخير"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setTotalDeductAmount(+e.target.value);
          }}
          value={totalDeductAmount || ""}
          disabled
        />
      </Col>
      <Col xs={2} className="d-flex justify-content-center align-items-end">
        -
      </Col>
      <Col xs={5}>
        <InputField
          label="السحوبات"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setTakenAmount(+e.target.value);
          }}
          value={takenAmount || ""}
        />
      </Col>
      <Col xs={12} className="text-center mt-2 fake-height">
        {finalSalary && <h5> القبض النهائي : {finalSalary}</h5>}
      </Col>
    </>
  );
}
