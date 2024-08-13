import { FormData, YearData, PercentageData } from "./type";

export const calculateFinancials = (formData: FormData): FormData => {
  const updatedFormData: FormData = { ...formData };

  ["year1", "year2", "year3"].forEach((year) => {
    const yearData = updatedFormData[year as keyof FormData];
    yearData.grossProfit = yearData.revenues - yearData.cogs;
    yearData.ebit =
      yearData.grossProfit -
      (yearData.distributionExpenses +
        yearData.marketingAdmin +
        yearData.rnd +
        yearData.depreciation);
    yearData.incomeBeforeTaxes = yearData.ebit - yearData.interest;
    yearData.netIncome = yearData.incomeBeforeTaxes - yearData.taxes;
  });

  return updatedFormData;
};

// export const calculatePercentages = (
//   formData: FormData
// ): {
//   year1: PercentageData;
//   year2: PercentageData;
//   year3: PercentageData;
// } => {
//   const percentageData: {
//     year1: PercentageData;
//     year2: PercentageData;
//     year3: PercentageData;
//   } = {
//     year1: {} as PercentageData,
//     year2: {} as PercentageData,
//     year3: {} as PercentageData,
//   };

//   ["year1", "year2", "year3"].forEach((year) => {
//     const yearData = formData[year as keyof FormData];
//     const yearPercentages = percentageData[year as keyof typeof percentageData];

//     Object.keys(yearData).forEach((field) => {
//       if (field !== "revenues") {
//         yearPercentages[`${field}Percentage` as keyof PercentageData] =
//           (yearData[field as keyof YearData] / yearData.revenues) * 100;
//       }
//     });
//   });

//   return percentageData;
// };

export const calculatePercentages = (
  formData: FormData
): {
  year1: PercentageData;
  year2: PercentageData;
  year3: PercentageData;
} => {
  const percentageData: {
    year1: PercentageData;
    year2: PercentageData;
    year3: PercentageData;
  } = {
    year1: {} as PercentageData,
    year2: {} as PercentageData,
    year3: {} as PercentageData,
  };

  ["year1", "year2", "year3"].forEach((year, index) => {
    const yearData = formData[year as keyof FormData];
    const yearPercentages = percentageData[year as keyof typeof percentageData];

    // Calculate sales growth
    if (index > 0) {
      const previousYear = `year${index}` as keyof FormData;
      const previousRevenue = formData[previousYear].revenues;
      yearPercentages.salesGrowth =
        ((yearData.revenues - previousRevenue) / previousRevenue) * 100;
    } else {
      yearPercentages.salesGrowth = 0;
    }

    // Calculate other percentages
    Object.keys(yearData).forEach((field) => {
      if (field !== "revenues") {
        yearPercentages[`${field}Percentage` as keyof PercentageData] =
          (yearData[field as keyof YearData] / yearData.revenues) * 100;
      }
    });
  });
  return percentageData;
};
