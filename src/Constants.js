export const initialReturnAssumption = 4;
export const initialSalaryGrowthAssumption = 3;
export const initialSalaryGrowthYearsAssumption = 15;
export const initialStatePensionAgeAssumption = 65;
export const initialstatePensionAmountAssumption = 0;
export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

//PageIds
export const homePageId = "home";
export const oneOffModellingPageId = "one-off-modelling";
export const aboutPageId = "about";
