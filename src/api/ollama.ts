import axios from "axios";

export const ollamaApi = async (input: string) => {
  const response = await axios.post("https://localhost:11434", input);
  return response.data;
};

interface IProps {
  path: string;
  className: string[];
  args: string[];
}

export const addSparkJob = async ({ path, args, className }: IProps) => {
  const response = await axios.post("http://16.171.237.145:5000/submit", {
    path,
    args,
    className,
  });
  return response.data;
};
