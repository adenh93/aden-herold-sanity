import { requiredValidation } from "../utils/validation";

export default {
  name: "accessibleImage",
  title: "Accessible Image",
  type: "image",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: requiredValidation,
    },
  ],
};
