export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Internal Link",
      name: "internalLink",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "externalUrl",
      title: "External URL",
      type: "url",
    },
  ],
};
