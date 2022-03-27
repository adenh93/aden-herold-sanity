import { requiredValidation } from "../utils/validation";

export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Button Text",
      type: "string",
      validation: requiredValidation,
    },
    {
      name: "buttonType",
      title: "Button Type",
      type: "string",
      initialValue: "solid",
      options: {
        list: ["solid", "outline"],
      },
      validation: requiredValidation,
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "link",
    },
  ],
};
