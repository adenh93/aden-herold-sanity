import { requiredValidation } from "../utils/validation";

export default {
  name: "subNavigationItem",
  title: "Sub-Navigation Item",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: requiredValidation,
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: requiredValidation,
    },
    {
      name: "navigationItemLink",
      type: "link",
      validation: requiredValidation,
    },
  ],
};
