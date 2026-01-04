import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import BlogsSection from '../components/template/BlogsSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'

function Blog() {
    return (
        <>
            <Breadcrumb title="مقالات" />

                <div>
                    <HeaderSctionBody title="مقالات" desc="جدید ترین های وبلاگ" />
                    <BlogsSection />
                </div>

            <ScrollTopBtn />
        </>
    )
}

export default Blog