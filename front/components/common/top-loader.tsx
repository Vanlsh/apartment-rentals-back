import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#26B657"
      initialPosition={0.08}
      crawlSpeed={200}
      height={1.5}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #26B657,0 0 5px #26B657"
      zIndex={1600}
      showAtBottom={false}
    />
  );
};

export default TopLoader;
