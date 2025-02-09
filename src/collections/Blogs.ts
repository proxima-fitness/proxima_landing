import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    access: {
        read: () => true,
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
        required: true,
      },
      {
        name: 'content',
        type: 'text',
        label: "Content",
        required: true,
      }
    ],
    timestamps: true,
  };

