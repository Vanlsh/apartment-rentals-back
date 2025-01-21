interface IFlatPageProps {
  params: {
    flatId: string;
  };
}

const FlatPage = ({ params }: IFlatPageProps) => {
  const { flatId } = params;

  return <div>FlatPage</div>;
};

export default FlatPage;
