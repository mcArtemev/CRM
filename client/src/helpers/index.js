export const friendlyValidationResult = (validationResult) => {
  if (!validationResult.error) return {};

  return validationResult.error.details.reduce((accumulator, value) => {
    if (accumulator[value.path[0]]) {
      return accumulator;
    }
    accumulator[value.path[0]] = value.message;

    return accumulator;
  }, {});
};
