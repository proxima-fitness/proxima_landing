import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
            label: 'SubTitle',
            required: true,

        },
        {
            name: 'content',
            type: 'text',
            label: "Content",
            required: true,
        },
        {
            name: 'time',
            type: 'number',
            label: "Time",
            required: true,
        },
        {
            name: 'media_url',
            type: 'text',
            label: "Media URL",
            required: true,
        }
    ],
    timestamps: true,
  };

