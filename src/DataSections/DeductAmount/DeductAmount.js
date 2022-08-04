import React from "react";
import { Col } from "react-bootstrap";
import { InputField } from "../../InputField/InputField";

export default function DeductAmount({
  pricePerDay,
  setPricePerDay,
  daysNumber,
  setDaysNumber,
  basicSalary,
  setBasicSalary,
  hoursNumberDeduct,
  setHoursNumberDeduct,
  totalDeductAmount,
  setTotalDeductAmount,
  salaryWithOver,
  setSalaryWithOver,
}) {
  return (
    <>
      <Col xs={12} className="mb-2">
        <h4>القبض مع خصم التاخير</h4>
      </Col>
      <Col xs={5}>
        <InputField
          label="القبض بالاضافي"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setSalaryWithOver(+e.target.value);
          }}
          value={salaryWithOver || ""}
          disabled
        />
      </Col>
      <Col xs={2} className="d-flex justify-content-center align-items-end">
        -
      </Col>
      <Col xs={5}>
        <InputField
          label="ساعات التاخير"
          onChange={(e) => {
            if (+e.target.value < 0 || +e.target.value > 9999) {
              return "";
            }
            return setHoursNumberDeduct(+e.target.value);
          }}
          value={hoursNumberDeduct || ""}
        />
      </Col>
      <Col xs={12} className="text-center mt-2 fake-height">
        {totalDeductAmount && <h5> القبض بالتاخير : {totalDeductAmount}</h5>}
      </Col>
    </>
  );
}
