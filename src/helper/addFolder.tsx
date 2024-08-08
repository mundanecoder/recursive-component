import { IFolder } from "../pages/File/page";

export function addFolder(
  path: string,
  foldername: string,
  fileSystem: IFolder[]
): IFolder[] {
  const pathParts = path.split("/").filter((part) => part !== "");
  const parentName = pathParts[pathParts.length - 1];
  const newFolderObject: IFolder = {
    name: foldername,
    type: "folder",
    folder: [],
  };

  function recursiveAddFolder(folders: IFolder[]): IFolder[] {
    return folders.map((folder) => {
      if (folder.name === parentName) {
        return {
          ...folder,
          folder: [...folder.folder, newFolderObject],
        };
      } else if (folder.type === "folder") {
        return {
          ...folder,
          folder: recursiveAddFolder(folder.folder),
        };
      }
      return folder;
    });
  }

  return recursiveAddFolder(fileSystem);
}
