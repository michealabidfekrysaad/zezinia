import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

export default function Invoice({
  showInvoice,
  setShowInvoice,
  daysNumber,
  pricePerDay,
  basicSalary,
  hoursNumberOverTime,
  extraHourSalary,
  hoursNumberDeduct,
  priceDeductHr,
  takenAmount,
  finalSalary,
}) {
  return (
    <Modal show={showInvoice} onHide={() => setShowInvoice(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          {pricePerDay ? (
            <Col xs={12}>
              الموظف عمل لمدة {daysNumber} يوم و اليومية الخاصة بة كانت{" "}
              {pricePerDay} جنية و تفاصيل حسابة كالاتي
            </Col>
          ) : (
            <Col xs={12}>رجاء ادخال اليومية</Col>
          )}
        </Row>
        <Row className="mt-4">
          {!!pricePerDay && basicSalary && (
            <>
              <Col xs={6}>{basicSalary}</Col>
              <Col xs={6}>القبض الاساسي</Col>
            </>
          )}
          {!!pricePerDay && !!hoursNumberOverTime && (
            <>
              <Col xs={6}>+{hoursNumberOverTime * extraHourSalary}</Col>
              <Col xs={6} className="change-directoin">
                {hoursNumberOverTime}
                <span className="px-1">ساعة اضافية</span>
              </Col>
            </>
          )}
          {!!pricePerDay && !!hoursNumberDeduct && (
            <>
              <Col xs={6}>-{hoursNumberDeduct * priceDeductHr}</Col>
              <Col xs={6} className="change-directoin">
                {hoursNumberDeduct}
                <span className="px-1">ساعة تاخير</span>
              </Col>
            </>
          )}
          {!!pricePerDay && !!takenAmount && (
            <>
              <Col xs={6}>-{takenAmount}</Col>
              <Col xs={6}>السحوبات</Col>
            </>
          )}
        </Row>
        {!!pricePerDay && !!finalSalary && (
          <>
            <hr />
            <Row className="fw-bold">
              <Col xs={6}>{finalSalary}</Col>
              <Col xs={6}>الاجمالي</Col>
            </Row>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowInvoice(false)}>
          اغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
