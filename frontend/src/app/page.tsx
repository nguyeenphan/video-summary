import { Button } from "@/components/ui/button";

async function getHomeData(path: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const res = await fetch(baseUrl + path);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Home() {

  const homeData = await getHomeData("/api/home-page");

  return (
    <>
      <h1>{homeData.data.title}</h1>
      <p>{homeData.data.description}</p>
    </>
  );
}
