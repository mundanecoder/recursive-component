import React, { useState } from "react";
import "./App.css";
import {
  FileText,
  Folder,
  Music,
  BookImage,
  ChevronRightIcon,
  ChevronDown,
  FileVideo,
} from "lucide-react";

type FileType = "folder" | "mp3" | "mp4" | "txt" | "jpg" | "pdf";

type TFolder = {
  name: string;
  type: FileType;
  folder?: TFolder[];
};

interface IFolderComponentProps {
  folder: TFolder;
  path: string;
  openFolders: Record<string, boolean>;
  setOpenFolders: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

function FolderComponent({
  folder,
  path,
  openFolders,
  setOpenFolders,
}: IFolderComponentProps) {
  const fullPath = `${path}/${folder.name}`;
  const isOpen = openFolders[fullPath];

  const toggleFolder = () => {
    setOpenFolders((prev) => {
      const newState = { ...prev };
      newState[fullPath] = !isOpen;
      return newState;
    });
  };

  const getIcon = (type: FileType) => {
    switch (type) {
      case "folder":
        return <Folder size={20} fill="orange" />;
      case "mp3":
        return <Music size={20} />;
      case "mp4":
        return <FileVideo size={20} />;
      case "pdf":
      case "txt":
        return <FileText size={20} />;
      case "jpg":
        return <BookImage size={20} />;
      default:
        return null;
    }
  };

  return (
    <li key={folder.name}>
      <span className="flex items-center gap-1 font-bold pl-2">
        {folder.folder && folder.folder.length > 0 ? (
          <span className="flex cursor-pointer" onClick={toggleFolder}>
            {isOpen ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRightIcon size={20} />
            )}
            <Folder size={20} fill="orange" />
          </span>
        ) : (
          getIcon(folder.type)
        )}
        {folder.name}
      </span>
      {isOpen && folder.folder && (
        <ul className="pl-4 flex flex-col">
          {folder.folder.map((item: TFolder) => (
            <FolderComponent
              key={item.name}
              folder={item}
              path={fullPath}
              openFolders={openFolders}
              setOpenFolders={setOpenFolders}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function App() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  let folder: TFolder[] = [
    {
      name: "Home",
      type: "folder",
      folder: [
        {
          name: "Movies",
          type: "folder",
          folder: [
            {
              name: "Comedy",
              type: "folder",
              folder: [
                {
                  name: "Fight-club.mp4",
                  type: "mp4",
                },
                {
                  name: "The Hangover.mp4",
                  type: "mp4",
                },
              ],
            },
            {
              name: "Musical",
              type: "folder",
              folder: [
                {
                  name: "La La Land.mp4",
                  type: "mp4",
                },
                {
                  name: "The Greatest Showman.mp4",
                  type: "mp4",
                },
              ],
            },
            {
              name: "Romance",
              type: "folder",
              folder: [
                {
                  name: "Chungking Express.mp4",
                  type: "mp4",
                },
                {
                  name: "Before Sunrise.mp4",
                  type: "mp4",
                },
              ],
            },
          ],
        },
        {
          name: "Music",
          type: "folder",
          folder: [
            {
              name: "Jazz",
              type: "folder",
              folder: [
                { name: "Miles Davis - Kind of Blue.mp3", type: "mp3" },
                { name: "John Coltrane - A Love Supreme.mp3", type: "mp3" },
              ],
            },
            {
              name: "Classical",
              type: "folder",
              folder: [
                { name: "Beethoven - Symphony No. 9.mp3", type: "mp3" },
                { name: "Mozart - Eine kleine Nachtmusik.mp3", type: "mp3" },
              ],
            },
            {
              name: "LoFi",
              type: "folder",
              folder: [
                { name: "Chillhop Essentials.mp3", type: "mp3" },
                { name: "Lofi Girl - Sleepy Fish.mp3", type: "mp3" },
              ],
            },
          ],
        },
        {
          name: "Pictures",
          type: "folder",
          folder: [
            {
              name: "Scenery",
              type: "folder",
              folder: [
                {
                  name: "Bali",
                  type: "folder",
                  folder: [
                    { name: "Beach Sunset.jpg", type: "jpg" },
                    { name: "Rice Terraces.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Shillong",
                  type: "folder",
                  folder: [
                    { name: "Umiam Lake.jpg", type: "jpg" },
                    { name: "Elephant Falls.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Family",
                  type: "folder",
                  folder: [
                    { name: "Family Reunion 2023.jpg", type: "jpg" },
                    { name: "Christmas Dinner.jpg", type: "jpg" },
                  ],
                },
              ],
            },
            {
              name: "Landscapes",
              type: "folder",
              folder: [
                {
                  name: "Atlanta",
                  type: "folder",
                  folder: [
                    { name: "Piedmont Park.jpg", type: "jpg" },
                    { name: "Atlanta Skyline.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Hiroshima",
                  type: "folder",
                  folder: [
                    { name: "Peace Memorial Park.jpg", type: "jpg" },
                    { name: "Itsukushima Shrine.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Nagasaki",
                  type: "folder",
                  folder: [
                    { name: "Glover Garden.jpg", type: "jpg" },
                    { name: "Mount Inasa.jpg", type: "jpg" },
                  ],
                },
              ],
            },
            {
              name: "Meghalaya",
              type: "folder",
              folder: [
                {
                  name: "Food",
                  type: "folder",
                  folder: [
                    { name: "Jadoh.jpg", type: "jpg" },
                    { name: "Tungrymbai.jpg", type: "jpg" },
                    { name: "Kwai.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Bernihat",
                  type: "folder",
                  folder: [
                    { name: "Bernihat Market.jpg", type: "jpg" },
                    { name: "Border View.jpg", type: "jpg" },
                  ],
                },
                {
                  name: "Tura",
                  type: "folder",
                  folder: [
                    { name: "Tura Peak.jpg", type: "jpg" },
                    { name: "Siju Cave.jpg", type: "jpg" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Documents",
          type: "folder",
          folder: [
            {
              name: "Medical",
              type: "folder",
              folder: [
                { name: "Health Insurance.pdf", type: "pdf" },
                { name: "Vaccination Records.pdf", type: "pdf" },
              ],
            },
            {
              name: "School",
              type: "folder",
              folder: [
                { name: "Transcript.pdf", type: "pdf" },
                { name: "Diploma.pdf", type: "pdf" },
              ],
            },
            {
              name: "Driving",
              type: "folder",
              folder: [
                { name: "Driver's License.pdf", type: "pdf" },
                { name: "Vehicle Registration.pdf", type: "pdf" },
              ],
            },
          ],
        },
        {
          name: "password.txt",
          type: "txt",
        },
      ],
    },
  ];

  return (
    <div className="w-full justify-start flex">
      <ul className="pl-4 flex flex-col">
        {folder.map((item: TFolder) => (
          <FolderComponent
            key={item.name}
            folder={item}
            path=""
            openFolders={openFolders}
            setOpenFolders={setOpenFolders}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
