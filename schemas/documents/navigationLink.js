import { requiredValidation } from "../utils/validation";

export default {
  name: "navigationLink",
  title: "Navigation Link",
  type: "document",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text",
      validation: requiredValidation,
    },
    {
      title: "Has Sub-Navigation",
      name: "hasSubNavigation",
      type: "boolean",
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item URL",
      hidden: ({ document }) => document.hasSubNavigation,
    },
    {
      title: "Subnavigation Items",
      name: "subNavigationItems",
      type: "array",
      of: [{ type: "subNavigationItem" }],
      hidden: ({ document }) => !document.hasSubNavigation,
    },
  ],
};
