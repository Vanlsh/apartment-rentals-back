import { getFlats } from "@/api/flat";
import { parseFilters } from "@/lib/parseFilter";
import { FlatFilters } from "@/types/flat";

interface HomeProps {
  searchParams: FlatFilters;
}
const Home = async ({ searchParams }: HomeProps) => {
  const filters = parseFilters(searchParams);

  const { data } = await getFlats(filters);

  console.log(data);
  return <h1>Main Page</h1>;
};

export default Home;
