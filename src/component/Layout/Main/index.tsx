import TopNavigation from "../../Header";
import Footer from "../../Footer";

function withLayout() {
  return (WrapperComponent: React.ComponentType) =>
    (props: JSX.IntrinsicAttributes) =>
      (
        <>
          <TopNavigation />
          <WrapperComponent {...props} />
          <Footer />
        </>
      );
}

export default withLayout;
