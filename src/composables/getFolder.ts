import axios, { AxiosError } from "axios";
import { headers, team_name } from "@/config";
import { ref } from "@vue/composition-api";
import { TFolder } from "@/helpers/types";

const getFolder = (folderId: string) => {
  const folder = ref<TFolder>();
  const error = ref<string | undefined>(undefined);

  const loadFolder = async () => {
    try {
      const response = await axios.get(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${team_name}/folders/${folderId}`,
        headers
      );
      folder.value = response.data.data;
    } catch (e) {
      const err = e as AxiosError;
      error.value = err.response?.statusText;
    }
  };

  return { folder, error, loadFolder };
};

export default getFolder;
