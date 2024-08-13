import React from "react";
import { FormData, YearData } from "../type";

interface Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, year: string) => void;
}

const IncomeStatementForm: React.FC<Props> = ({ formData, handleChange }) => {
  const fields: (keyof YearData)[] = [
    "revenues",
    "cogs",
    "distributionExpenses",
    "marketingAdmin",
    "rnd",
    "depreciation",
    "interest",
    "taxes",
    "grossProfit",
    "ebit",
    "incomeBeforeTaxes",
    "netIncome",
  ];

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold mb-4">
        Income Statements
      </h2>
      <form>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
          <div className="font-bold">Field</div>
          <div className="text-center font-bold">Year 1</div>
          <div className="text-center font-bold hidden sm:block">Year 2</div>
          <div className="text-center font-bold hidden sm:block">Year 3</div>

          {fields.map((field) => (
            <React.Fragment key={field}>
              <label className="text-gray-700 capitalize col-span-2 sm:col-span-1">
                {field.split(/(?=[A-Z])/).join(" ")}
              </label>
              {["year1", "year2", "year3"].map((year) => (
                <input
                  key={year}
                  type="number"
                  name={field}
                  value={formData[year as keyof FormData][field]}
                  onChange={(e) => handleChange(e, year)}
                  readOnly={["grossProfit", "ebit", "incomeBeforeTaxes", "netIncome"].includes(field)}
                  className={`border px-2 py-1 rounded w-full ${
                    ["grossProfit", "ebit", "incomeBeforeTaxes", "netIncome"].includes(field)
                      ? "bg-gray-100"
                      : ""
                  } ${year !== "year1" ? "hidden sm:block" : ""}`}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default IncomeStatementForm;