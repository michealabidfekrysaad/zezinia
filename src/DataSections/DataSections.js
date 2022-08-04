/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./DataSections.scss";

import { Button, Row } from "react-bootstrap";
import PricePerDay from "./PricePerDay/PricePerDay";
import MonthSalary from "./MonthSalary/MonthSalary";
import DeductAmount from "./DeductAmount/DeductAmount";
import OverTime from "./OverTime/OverTime";
import Taken from "./Taken/Taken";
import Invoice from "./Invoice/Invoice";

export default function DataSections() {
  const [pricePerDay, setPricePerDay] = useState("");
  const [daysNumber, setDaysNumber] = useState(30);
  const [numOfHours, setNumOfHours] = useState(12);
  const [basicSalary, setBasicSalary] = useState("");
  const [extraHourSalary, setExtraHourSalary] = useState("");
  const [hoursNumberDeduct, setHoursNumberDeduct] = useState(0);
  const [totalDeductAmount, setTotalDeductAmount] = useState("");
  const [priceDeductHr, setPriceDeductHr] = useState("");
  const [hoursNumberOverTime, setHoursNumberOverTime] = useState(0);
  const [salaryWithOver, setSalaryWithOver] = useState("");
  const [takenAmount, setTakenAmount] = useState("");
  const [finalSalary, setFinalSalary] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  useEffect(() => {
    if (pricePerDay > 0 && daysNumber > 0) {
      setBasicSalary(+pricePerDay * +daysNumber);
    } else {
      setBasicSalary("");
    }
    if (pricePerDay > 0 && hoursNumberDeduct >= 0) {
      setTotalDeductAmount(salaryWithOver - hoursNumberDeduct * priceDeductHr);
    } else {
      setTotalDeductAmount("");
    }
    if (pricePerDay > 0 && hoursNumberOverTime >= 0) {
      setSalaryWithOver(basicSalary + hoursNumberOverTime * extraHourSalary);
    } else {
      setSalaryWithOver("");
    }
    if (pricePerDay > 0 && takenAmount >= 0) {
      setFinalSalary(totalDeductAmount - takenAmount);
    } else {
      setFinalSalary("");
    }
  }, [
    daysNumber,
    pricePerDay,
    hoursNumberDeduct,
    basicSalary,
    numOfHours,
    priceDeductHr,
    hoursNumberOverTime,
    extraHourSalary,
    salaryWithOver,
    takenAmount,
    totalDeductAmount,
  ]);

  useEffect(() => {
    if (pricePerDay > 0 && numOfHours > 0) {
      setExtraHourSalary(
        Math.floor(pricePerDay / numOfHours) * 0.5 +
          Math.floor(pricePerDay / numOfHours)
      );
    } else {
      setExtraHourSalary("");
    }
  }, [pricePerDay]);

  return (
    <div className="dataSections">
      <Row className="mt-3 border-bottom p-2">
        <PricePerDay
          pricePerDay={pricePerDay}
          setPricePerDay={setPricePerDay}
          extraHourSalary={extraHourSalary}
          setExtraHourSalary={setExtraHourSalary}
          numOfHours={numOfHours}
          setNumOfHours={setNumOfHours}
          priceDeductHr={priceDeductHr}
          setPriceDeductHr={setPriceDeductHr}
          takenAmount={takenAmount}
          setTakenAmount={setTakenAmount}
        />
      </Row>
      <Row className="mt-3 border-bottom p-2">
        <MonthSalary
          pricePerDay={pricePerDay}
          setPricePerDay={setPricePerDay}
          daysNumber={daysNumber}
          setDaysNumber={setDaysNumber}
          setBasicSalary={setBasicSalary}
          basicSalary={basicSalary}
        />
      </Row>
      <Row className="mt-3 border-bottom p-2">
        <OverTime
          setBasicSalary={setBasicSalary}
          basicSalary={basicSalary}
          hoursNumberOverTime={hoursNumberOverTime}
          setHoursNumberOverTime={setHoursNumberOverTime}
          salaryWithOver={salaryWithOver}
        />
      </Row>
      <Row className="mt-3 border-bottom p-2">
        <DeductAmount
          pricePerDay={pricePerDay}
          setPricePerDay={setPricePerDay}
          daysNumber={daysNumber}
          setDaysNumber={setDaysNumber}
          setBasicSalary={setBasicSalary}
          basicSalary={basicSalary}
          hoursNumberDeduct={hoursNumberDeduct}
          setHoursNumberDeduct={setHoursNumberDeduct}
          totalDeductAmount={totalDeductAmount}
          setTotalDeductAmount={setTotalDeductAmount}
          salaryWithOver={salaryWithOver}
          setSalaryWithOver={setSalaryWithOver}
        />
      </Row>
      <Row className="mt-3 p-2">
        <Taken
          totalDeductAmount={totalDeductAmount}
          setTotalDeductAmount={setTotalDeductAmount}
          setTakenAmount={setTakenAmount}
          takenAmount={takenAmount}
          setFinalSalary={setFinalSalary}
          finalSalary={finalSalary}
        />
      </Row>
      <div className="invoice">
        <Button variant="primary" onClick={() => setShowInvoice(true)}>
          اظهار التفاصيل
        </Button>
      </div>
      <Invoice
        setShowInvoice={setShowInvoice}
        showInvoice={showInvoice}
        daysNumber={daysNumber}
        pricePerDay={pricePerDay}
        basicSalary={basicSalary}
        hoursNumberOverTime={hoursNumberOverTime}
        extraHourSalary={extraHourSalary}
        hoursNumberDeduct={hoursNumberDeduct}
        priceDeductHr={priceDeductHr}
        takenAmount={takenAmount}
        finalSalary={finalSalary}
      />
    </div>
  );
}
