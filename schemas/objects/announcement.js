import { requiredValidation } from "../utils/validation";

export default {
  name: "announcement",
  title: "Announcement",
  type: "object",
  fields: [
    {
      name: "active",
      type: "boolean",
      title: "Active",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: requiredValidation,
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: requiredValidation,
    },
    {
      name: "announcementLinkText",
      type: "string",
      title: "Announcement Link Text",
      validation: requiredValidation,
    },
    {
      name: "announcementLink",
      type: "link",
      title: "Announcement Link",
      validation: requiredValidation,
    },
  ],
};
