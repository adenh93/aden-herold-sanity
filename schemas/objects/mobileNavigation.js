import { navigationItemValidation } from "../utils/validation";

export default {
  title: "Mobile Navigation Menu",
  name: "mobileNavigation",
  type: "object",
  fields: [
    {
      title: "Nav Bar Items",
      name: "navBarItems",
      type: "array",
      validation: navigationItemValidation,
      of: [{ type: "navigationItem" }],
    },
    {
      title: "Burger Menu Items",
      name: "burgerMenuItems",
      type: "array",
      validation: navigationItemValidation,
      of: [{ type: "navigationItem" }],
    },
  ],
};
