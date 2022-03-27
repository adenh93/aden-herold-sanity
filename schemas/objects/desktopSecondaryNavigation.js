import { navigationItemValidation } from "../utils/validation";

export default {
  title: "Desktop Secondary Navigation",
  name: "desktopSecondaryNavigation",
  validation: navigationItemValidation,
  type: "array",
  of: [{ type: "navigationLink" }],
};
