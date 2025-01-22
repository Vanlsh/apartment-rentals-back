import { getFlat } from "@/api/flat";
import FlatDetails from "@/components/flat/flat-details";

interface IFlatPageProps {
  params: {
    flatId: string;
  };
}

const FlatPage = async (props: IFlatPageProps) => {
  const { flatId } = await props.params;

  const data = await getFlat(flatId);
  return <FlatDetails flat={data.data} />;
};

export default FlatPage;
