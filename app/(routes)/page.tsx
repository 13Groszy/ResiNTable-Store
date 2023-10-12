import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {

    const billboard = await getBillboard("e5abd08c-33fb-4557-8955-d87b6be14c5b");
    const products = await getProducts({isFeatured: true});
     
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;