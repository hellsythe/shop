import Banner from "../ui/banner";
import TopProducts from "../ui/shop/topProducts";

export default function Home() {
  return (
    <div>
      <Banner />
        <div className="container mx-auto">
          <TopProducts />
        </div>
    </div>
  );
}
