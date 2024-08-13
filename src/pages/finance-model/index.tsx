import React, { useState, useEffect } from "react";
import { FormData, YearData, PercentageData } from "./type";
import { initialFormData, initialPercentageData } from "./initialdata";
import { calculateFinancials, calculatePercentages } from "./calculation";
import IncomeStatementForm from "./components/IncomeStatementForm";
import PercentageAnalysisTable from "./components/PercentageAnalysisTable";

const FinanceModel: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [percentageData, setPercentageData] = useState<{
    year1: PercentageData;
    year2: PercentageData;
    year3: PercentageData;
  }>(initialPercentageData);

  useEffect(() => {
    const updatedFormData = calculateFinancials(formData);
    setFormData(updatedFormData);
    setPercentageData(calculatePercentages(updatedFormData));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    year: string
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [year]: {
        ...prevData[year as keyof FormData],
        [name]: Number(value),
      },
    }));
  };

  const handlePercentageChange = (
    field: keyof PercentageData,
    year: keyof FormData,
    value: number
  ) => {
    if (field === "salesGrowth") {
      handleSalesGrowthChange(year, value);
    } else {
      const revenue = formData[year].revenues;
      const newValue = (value / 100) * revenue;
      const fieldName = field.replace("Percentage", "") as keyof YearData;

      setFormData((prevData) => {
        const updatedData = { ...prevData };
        ["year1", "year2", "year3"].forEach((yearKey) => {
          if (yearKey >= year) {
            updatedData[yearKey as keyof FormData][fieldName] = newValue;
          }
        });
        return updatedData;
      });
    }
  };

  const handleSalesGrowthChange = (year: keyof FormData, growthPercentage: number) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      const previousYear = year === "year2" ? "year1" : "year2";
      const previousRevenue = updatedData[previousYear].revenues;
      const newRevenue = previousRevenue * (1 + growthPercentage / 100);

      updatedData[year].revenues = newRevenue;

      // Update subsequent years if changing year2
      if (year === "year2") {
        const year3GrowthPercentage = percentageData.year3.salesGrowth;
        updatedData.year3.revenues = newRevenue * (1 + year3GrowthPercentage / 100);
      }

      return updatedData;
    });
  };

  return (
    <div className="border min-h-screen py-4 w-full flex flex-col gap-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl sm:text-3xl text-purple-600 font-bold">
        Finance Model
      </h1>

      <section className="w-full lg:w-10/12 xl:w-8/12 flex flex-col lg:flex-row gap-4 self-center py-4">
        <div className="w-full lg:w-1/2">
          <IncomeStatementForm formData={formData} handleChange={handleChange} />
        </div>
        <div className="w-full lg:w-1/2">
          <PercentageAnalysisTable
            percentageData={percentageData}
            handlePercentageChange={handlePercentageChange}
          />
        </div>
      </section>
    </div>
  );
};

export default FinanceModel;