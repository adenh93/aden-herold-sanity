import { requiredValidation } from "../utils/validation";

export default {
  name: "hero",
  title: "Hero",
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
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }] }],
      validation: requiredValidation,
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    },
  ],
};
