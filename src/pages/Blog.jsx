import React from 'react'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'
import Footer from '../components/modules/Footer/Footer'
import HeaderSctionBody from '../components/modules/HeaderSctionBody/HeaderSctionBody'
import BlogsSection from '../components/template/HomeFeatuer/BlogsSection'
import ScrollTopBtn from '../components/modules/ScrollTopBtn/ScrollTopBtn'

function Blog() {
    return (
        <>
            <Breadcrumb title="مقالات" />

                <div>
                    <HeaderSctionBody title="مقالات" desc="جدید ترین های وبلاگ" />
                    <BlogsSection />
                </div>

            <Footer />
            <ScrollTopBtn />
        </>
    )
}

export default Blog