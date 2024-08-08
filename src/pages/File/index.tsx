import {
  FilePlus2,
  FileStack,
  Folder,
  FolderOpen,
  FolderPlus,
} from "lucide-react";
import { useState } from "react";
import { dummyFileSystem } from "../../constants/folder";
import { addFolder } from "../../helper/addFolder";

export type IFolder = {
  name: string;
  type: string;
  folder: IFolder[];
};

interface IFolderComponentProps {
  folder: IFolder;
  path: string;
  open: Record<string, boolean>;
  setOpen: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  currentPath: string;
}

const Index = () => {
  const [fileSystem, setFileSystem] = useState<IFolder[]>(dummyFileSystem);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [currentPath, setPath] = useState("");

  function CollapseAllFolders() {
    const collectAllFolderPaths = (folders: IFolder[], basePath: string) => {
      let paths: string[] = [];

      folders.forEach((folder) => {
        const fullPath = `${basePath}/${folder.name}`;
        paths.push(fullPath);

        if (folder.type === "folder" && folder.folder.length > 0) {
          paths = paths.concat(collectAllFolderPaths(folder.folder, fullPath));
        }
      });

      return paths;
    };

    const allPaths = collectAllFolderPaths(fileSystem, "");
    console.log(allPaths, "allPaths");

    const closedState = allPaths.reduce((acc, path) => {
      acc[path] = false;
      return acc;
    }, {} as Record<string, boolean>);

    setOpen(closedState);
  }

  function createFolder() {
    let foldername = window.prompt("enter folder name") ?? "newfolder";
    const updatedFileSystem = addFolder(currentPath, foldername, fileSystem);
    setFileSystem(updatedFileSystem);

    setOpen((prev) => ({
      ...prev,
      [currentPath]: true,
    }));
  }

  return (
    <div className="w-full pl-8 py-8">
      <div className="bg-gray-100 py-2 w-2/12 my-4 flex items-center justify-center gap-2 shadow-md">
        <FolderPlus size={18} onClick={createFolder} />
        <FilePlus2 size={18} />
        <FileStack
          size={18}
          onClick={CollapseAllFolders}
          className="cursor-pointer"
        />
      </div>
      <ul className="w-4/12 relative">
        {fileSystem.map((folder, index) => (
          <RecursiveFolderComponent
            folder={folder}
            key={index}
            path={""}
            open={open}
            setOpen={setOpen}
            currentPath={currentPath}
            setPath={setPath}
          />
        ))}
      </ul>
    </div>
  );
};

export default Index;

function RecursiveFolderComponent({
  folder,
  path,
  open,
  setOpen,
  currentPath,
  setPath,
}: IFolderComponentProps) {
  const [show, setShow] = useState(false);
  const fullPath = `${path}/${folder.name}`;
  let isOpen = open[fullPath];

  const toggleFolderState = () => {
    setOpen((prev) => ({
      ...prev,
      [fullPath]: !prev[fullPath],
    }));
  };

  return (
    <>
      <li className="pl-6 w-full relative">
        <span
          className={`left-20 -top-2 text-sm bg-gray-400/40 px-2 rounded absolute ${
            !show ? "hidden" : "block"
          }`}
        >
          {fullPath}
        </span>
        <span
          className={`flex gap-1 mb-1`}
          onClick={() => {
            setPath(fullPath);
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {!isOpen ? (
            <Folder onClick={toggleFolderState} fill={"yellow"} />
          ) : (
            <FolderOpen onClick={toggleFolderState} fill={"yellow"} />
          )}
          {folder.name}
        </span>
        {folder.folder.length > 0 && isOpen && (
          <ul className="">
            {folder.folder.map((f, index) => (
              <RecursiveFolderComponent
                folder={f}
                path={fullPath}
                open={open}
                setOpen={setOpen}
                currentPath={currentPath}
                setPath={setPath}
                key={index}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  );
}
