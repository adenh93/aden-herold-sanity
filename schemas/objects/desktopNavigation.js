import { navigationItemValidation } from "../utils/validation";

export default {
  title: "Desktop Navigation",
  name: "desktopNavigation",
  validation: navigationItemValidation,
  type: "array",
  of: [{ type: "navigationItem" }],
};
