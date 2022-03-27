import { requiredValidation } from "../utils/validation";

export default {
  name: "global",
  type: "document",
  title: "Global config",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
      validation: requiredValidation,
    },
    {
      title: "Brand logo",
      description: "SVG used for site branding",
      name: "logo",
      type: "accessibleImage",
      validation: requiredValidation,
    },
    {
      title: "Mobile Logo",
      description: "SVG used for mobile site branding",
      name: "mobileLogo",
      type: "accessibleImage",
      validation: requiredValidation,
    },
    {
      title: "Announcement",
      name: "announcement",
      description: "Current site announcement",
      type: "announcement",
    },
    {
      title: "Main navigation",
      name: "mainNavigation",
      description: "Main site navigation",
      type: "desktopNavigation",
    },
    {
      title: "Mobile main navigation",
      name: "mobileMainNavigation",
      description: "Mobile main site navigation",
      type: "mobileNavigation",
    },
    {
      title: "Secondary navigation",
      name: "secondaryNavigation",
      description: "Secondary site navigation",
      type: "desktopSecondaryNavigation",
    },
  ],
};
