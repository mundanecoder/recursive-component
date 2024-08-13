import React from "react";
import { PercentageData } from "../type";

interface Props {
  percentageData: {
    year1: PercentageData;
    year2: PercentageData;
    year3: PercentageData;
  };
  handlePercentageChange: (
    field: keyof PercentageData,
    year: "year1" | "year2" | "year3",
    value: number
  ) => void;
}

const PercentageAnalysisTable: React.FC<Props> = ({
  percentageData,
  handlePercentageChange,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold mb-4">
        Percentage Analysis
      </h2>
      <form>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
          <div className="font-bold">Field</div>
          <div className="text-center font-bold">Year 1</div>
          <div className="text-center font-bold hidden sm:block">Year 2</div>
          <div className="text-center font-bold hidden sm:block">Year 3</div>

          <label className="text-gray-700 capitalize col-span-2 sm:col-span-1">
            Sales Growth
          </label>
          <div className="hidden sm:block"></div>
          {["year2", "year3"].map((year) => (
            <input
              key={year}
              type="number"
              value={percentageData[year as keyof typeof percentageData].salesGrowth.toFixed(2)}
              onChange={(e) =>
                handlePercentageChange(
                  "salesGrowth",
                  year as "year2" | "year3",
                  Number(e.target.value)
                )
              }
              className={`border px-2 py-1 rounded w-full ${year === "year2" ? "col-span-2 sm:col-span-1" : "hidden sm:block"}`}
            />
          ))}

          {Object.keys(percentageData.year1).filter(field => field !== "salesGrowth").map((field) => (
            <React.Fragment key={field}>
              <label className="text-gray-700 capitalize col-span-2 sm:col-span-1">
                {field.split(/(?=[A-Z])/).join(" ")}
              </label>
              {["year1", "year2", "year3"].map((year) => (
                <input
                  key={year}
                  type="number"
                  value={
                    percentageData[year as keyof typeof percentageData][
                      field as keyof PercentageData
                    ].toFixed(2)
                  }
                  onChange={(e) =>
                    handlePercentageChange(
                      field as keyof PercentageData,
                      year as "year1" | "year2" | "year3",
                      Number(e.target.value)
                    )
                  }
                  className={`border px-2 py-1 rounded w-full ${year !== "year1" ? "hidden sm:block" : ""}`}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default PercentageAnalysisTable;