import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "tkgmydrzdm0u",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const projects = response.items.map((item) => {
        const { title, image, url } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setloading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { projects, loading };
};
