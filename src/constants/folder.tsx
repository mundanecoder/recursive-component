import { IFolder } from "../pages/File";

export const dummyFileSystem: IFolder[] = [
  {
    name: "Documents",
    type: "folder",
    folder: [
      {
        name: "Work",
        type: "folder",
        folder: [
          { name: "Reports", type: "folder", folder: [] },
          {
            name: "Presentations",
            type: "folder",
            folder: [
              { name: "Q1", type: "folder", folder: [] },
              { name: "Q2", type: "folder", folder: [] },
            ],
          },
          { name: "Spreadsheets", type: "folder", folder: [] },
        ],
      },
      {
        name: "Personal",
        type: "folder",
        folder: [
          { name: "Taxes", type: "folder", folder: [] },
          { name: "Travel", type: "folder", folder: [] },
          {
            name: "Recipes",
            type: "folder",
            folder: [
              { name: "Desserts", type: "folder", folder: [] },
              { name: "Main Courses", type: "folder", folder: [] },
              { name: "Appetizers", type: "folder", folder: [] },
            ],
          },
        ],
      },
      {
        name: "Shared",
        type: "folder",
        folder: [
          { name: "Projects", type: "folder", folder: [] },
          { name: "Photos", type: "folder", folder: [] },
        ],
      },
    ],
  },
  {
    name: "Media",
    type: "folder",
    folder: [
      {
        name: "Music",
        type: "folder",
        folder: [
          {
            name: "Genres",
            type: "folder",
            folder: [
              { name: "Rock", type: "folder", folder: [] },
              { name: "Jazz", type: "folder", folder: [] },
              { name: "Pop", type: "folder", folder: [] },
            ],
          },
          {
            name: "Artists",
            type: "folder",
            folder: [
              { name: "Beatles", type: "folder", folder: [] },
              { name: "Miles Davis", type: "folder", folder: [] },
              { name: "Taylor Swift", type: "folder", folder: [] },
            ],
          },
        ],
      },
      {
        name: "Videos",
        type: "folder",
        folder: [
          {
            name: "Movies",
            type: "folder",
            folder: [
              { name: "Action", type: "folder", folder: [] },
              { name: "Comedy", type: "folder", folder: [] },
              { name: "Drama", type: "folder", folder: [] },
            ],
          },
          {
            name: "TV Shows",
            type: "folder",
            folder: [
              { name: "Sci-Fi", type: "folder", folder: [] },
              { name: "Documentary", type: "folder", folder: [] },
            ],
          },
        ],
      },
      {
        name: "Photos",
        type: "folder",
        folder: [
          {
            name: "Vacations",
            type: "folder",
            folder: [
              { name: "Hawaii", type: "folder", folder: [] },
              { name: "Europe", type: "folder", folder: [] },
              { name: "Australia", type: "folder", folder: [] },
            ],
          },
          {
            name: "Events",
            type: "folder",
            folder: [
              { name: "Weddings", type: "folder", folder: [] },
              { name: "Parties", type: "folder", folder: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Software",
    type: "folder",
    folder: [
      {
        name: "Development",
        type: "folder",
        folder: [
          { name: "Projects", type: "folder", folder: [] },
          { name: "Libraries", type: "folder", folder: [] },
          { name: "Tools", type: "folder", folder: [] },
        ],
      },
      {
        name: "Games",
        type: "folder",
        folder: [
          { name: "RPG", type: "folder", folder: [] },
          { name: "Strategy", type: "folder", folder: [] },
          { name: "Adventure", type: "folder", folder: [] },
        ],
      },
      {
        name: "Utilities",
        type: "folder",
        folder: [
          { name: "Backup", type: "folder", folder: [] },
          { name: "Security", type: "folder", folder: [] },
          { name: "Performance", type: "folder", folder: [] },
        ],
      },
    ],
  },
  {
    name: "Archive",
    type: "folder",
    folder: [
      {
        name: "2023",
        type: "folder",
        folder: [
          { name: "January", type: "folder", folder: [] },
          { name: "February", type: "folder", folder: [] },
          { name: "March", type: "folder", folder: [] },
        ],
      },
      {
        name: "2022",
        type: "folder",
        folder: [
          { name: "Q1", type: "folder", folder: [] },
          { name: "Q2", type: "folder", folder: [] },
          { name: "Q3", type: "folder", folder: [] },
        ],
      },
    ],
  },
];
