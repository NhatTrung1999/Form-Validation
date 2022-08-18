import {
    HeaderProduct,
    SidebarProduct,
    ContentProduct,
} from "../../components/Product";

function ProductPage() {
    return (
        <>
            <div id="header">
                <HeaderProduct />
            </div>
            <div id="container">
                <div id="sidebar">
                    <SidebarProduct />
                </div>
                <div id="content">
                    <ContentProduct />
                </div>
            </div>
        </>
    );
}

export default ProductPage;
