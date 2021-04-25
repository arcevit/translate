import axios, { AxiosError } from "axios";
import { headers, team_name } from "@/config";
import { ref } from "@vue/composition-api";
import { TFolder } from "@/helpers/types";

const getFolders = () => {
  let folders = ref<TFolder[]>([]);
  let error = ref<any>(undefined);

  const load = async () => {
    try {
      const response = await axios.get(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${team_name}/folders`,
        headers
      );
      folders.value = response.data.data;
    } catch (e) {
      const err = e as AxiosError;
      error.value = err.response?.statusText;
    }
  };

  return { folders, error, load };
};

export default getFolders;
