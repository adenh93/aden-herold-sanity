export const navigationItemValidation = (Rule) =>
  Rule.unique().error("Duplicate navigation item entered");

export const requiredValidation = (Rule) => Rule.required();
