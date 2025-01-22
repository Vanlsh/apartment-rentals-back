import { getFlats } from "@/api/flat";
import CustomPagination from "@/components/common/custom-pagination";
import FlatList from "@/components/flat/flat-list";
import HomeHeader from "@/components/home/home-header";
import { parseFilters } from "@/lib/parseFilter";
import { FlatFilters } from "@/types/flat";

interface HomeProps {
  searchParams: FlatFilters;
}
const Home = async (props: HomeProps) => {
  const searchParams = await props.searchParams;

  const filters = parseFilters(searchParams);

  const { data } = await getFlats(filters);

  const { roomsCount, priceMin, priceMax } = filters;
  return (
    <>
      <HomeHeader
        className="mb-3"
        filters={{ roomsCount, priceMin, priceMax }}
      />
      <FlatList className="mb-5" flats={data.data} />
      {data.totalPages > 1 && (
        <div className="mt-auto">
          <CustomPagination
            currentPage={data.page}
            totalCount={data.totalItems}
            pageSize={data.perPage}
          />
        </div>
      )}
    </>
  );
};

export default Home;
