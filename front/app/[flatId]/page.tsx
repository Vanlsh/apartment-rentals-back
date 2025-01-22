import { getFlat } from "@/api/flat";
import FlatDetails from "@/components/flat/flat-details";
import { RequestError } from "@/lib/fetch-data";
import { notFound } from "next/navigation";

interface IFlatPageProps {
  params: {
    flatId: string;
  };
}

const getData = async (flatId: string) => {
  try {
    return await getFlat(flatId);
  } catch (error) {
    if (error instanceof RequestError && error.status === 404) {
      notFound();
    }
    console.log(error);

    throw error;
  }
};
const FlatPage = async (props: IFlatPageProps) => {
  const { flatId } = await props.params;

  const data = await getData(flatId);

  return <FlatDetails flat={data.data} />;
};

export default FlatPage;
