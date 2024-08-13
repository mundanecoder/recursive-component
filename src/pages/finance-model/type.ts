export interface FormData {
    year1: YearData;
    year2: YearData;
    year3: YearData;
  }
  
  export interface YearData {
    revenues: number;
    cogs: number;
    grossProfit: number;
    distributionExpenses: number;
    marketingAdmin: number;
    rnd: number;
    depreciation: number;
    ebit: number;
    interest: number;
    incomeBeforeTaxes: number;
    taxes: number;
    netIncome: number;
  }
  
  export interface PercentageData {
    salesGrowth: number; // Add this line
    cogsPercentage: number;
    grossProfitPercentage: number;
    distributionExpensesPercentage: number;
    marketingAdminPercentage: number;
    rndPercentage: number;
    depreciationPercentage: number;
    ebitPercentage: number;
    interestPercentage: number;
    incomeBeforeTaxesPercentage: number;
    taxesPercentage: number;
    netIncomePercentage: number;
  }