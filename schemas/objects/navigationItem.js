import { requiredValidation } from "../utils/validation";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "navigationItemLink",
      type: "reference",
      to: [{ type: "navigationLink" }],
    },
    {
      name: "appearance",
      title: "Item Appearance",
      description: "How the item appears in the navigation (Default, Button)",
      type: "string",
      initialValue: "Default",
      options: {
        list: ["Default", "Button"],
      },
      validation: requiredValidation,
    },
  ],
};
