const page = {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      title: "Handle",
      name: "handle",
      type: "string",
      required: true,
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      title: "Sections",
      of: [{ type: "hero" }],
    },
  ],
};

export default page;
