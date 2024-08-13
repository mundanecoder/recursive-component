import { FormData, PercentageData } from "./type";

export const initialFormData: FormData = {
  year1: {
    revenues: 100,
    cogs: 50,
    grossProfit: 0, // This will be calculated
    distributionExpenses: 10,
    marketingAdmin: 10,
    rnd: 5,
    depreciation: 3,
    ebit: 0, // This will be calculated
    interest: 3,
    incomeBeforeTaxes: 0, // This will be calculated
    taxes: 6,
    netIncome: 0, // This will be calculated
  },
  year2: {
    revenues: 120,
    cogs: 60,
    grossProfit: 0, // This will be calculated
    distributionExpenses: 12,
    marketingAdmin: 12,
    rnd: 6,
    depreciation: 4,
    ebit: 0, // This will be calculated
    interest: 4,
    incomeBeforeTaxes: 0, // This will be calculated
    taxes: 7,
    netIncome: 0, // This will be calculated
  },
  year3: {
    revenues: 140,
    cogs: 70,
    grossProfit: 0, // This will be calculated
    distributionExpenses: 14,
    marketingAdmin: 14,
    rnd: 7,
    depreciation: 5,
    ebit: 0, // This will be calculated
    interest: 5,
    incomeBeforeTaxes: 0, // This will be calculated
    taxes: 8,
    netIncome: 0, // This will be calculated
  },
};

export const initialPercentageData: {
  year1: PercentageData;
  year2: PercentageData;
  year3: PercentageData;
} = {
  year1: {
    salesGrowth: 0, // Add this line
    cogsPercentage: 0,
    grossProfitPercentage: 0,
    distributionExpensesPercentage: 0,
    marketingAdminPercentage: 0,
    rndPercentage: 0,
    depreciationPercentage: 0,
    ebitPercentage: 0,
    interestPercentage: 0,
    incomeBeforeTaxesPercentage: 0,
    taxesPercentage: 0,
    netIncomePercentage: 0,
  },
  year2: {
    salesGrowth: 20, // Add this line (20% growth from year1 to year2)
    cogsPercentage: 0,
    grossProfitPercentage: 0,
    distributionExpensesPercentage: 0,
    marketingAdminPercentage: 0,
    rndPercentage: 0,
    depreciationPercentage: 0,
    ebitPercentage: 0,
    interestPercentage: 0,
    incomeBeforeTaxesPercentage: 0,
    taxesPercentage: 0,
    netIncomePercentage: 0,
  },
  year3: {
    salesGrowth: 16.67,
    cogsPercentage: 0,
    grossProfitPercentage: 0,
    distributionExpensesPercentage: 0,
    marketingAdminPercentage: 0,
    rndPercentage: 0,
    depreciationPercentage: 0,
    ebitPercentage: 0,
    interestPercentage: 0,
    incomeBeforeTaxesPercentage: 0,
    taxesPercentage: 0,
    netIncomePercentage: 0,
  },
};
