import axios, { AxiosError } from "axios";
import { headers, team_name } from "@/config";
import { ref } from "@vue/composition-api";
import { TProject } from "@/helpers/types";

const getProjects = () => {
  let projects = ref<TProject[]>([]);
  let errorOfProjects = ref<any>(undefined);

  const loadProjects = async () => {
    try {
      const response = await axios.get(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${team_name}/projects?
        filters[is_workspace]=true`,
        headers
      );
      projects.value = response.data.data;
    } catch (e) {
      const err = e as AxiosError;
      errorOfProjects.value = err.response?.statusText;
    }
  };

  return { projects, errorOfProjects, loadProjects };
};

export default getProjects;
