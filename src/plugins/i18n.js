import { createI18n } from "vue-i18n";

const messages = {
    en: {
        message: {
            hello: "hello world",
            greeting: "good morning, world!",
        },
        appBar: {
            home: 'Home',
            about: 'About',
            products: 'products'
        },
        heroSection: {
            brandName: 'Furniture Store',
            allProducts : 'All Products',
            title: 'All You Needs in One Market',
        }
    },
    jp: {
        message: {
            hello: "こんにちは、世界",
            greeting: "おはよう、世界！",      
        },
        appBar: {
            home: '家',
            about: '約',
            products: '製品'
        },
        heroSection: {
            brandName: '家具店',
            allProducts: 'すべての製品',
            title: '必要なものすべてを 1 つのマーケットで'
        }
    },
    ar: {
        message: {
            hello: "مرحبا أيها العالم",
            greeting: "صباح الخير أيها العالم",
        },
        appBar: {
            home: 'الرئيسية',
            about: 'حول',
            products: 'المنتجات'
        },
        heroSection: {
            brandName: 'متجر أثاث',
            allProducts: 'كل المنتجات',
            title: 'كل ما تحتاجه ستجده في هذا المتجر',
        }
    },
}
// ! change language from i18n
const i18n = createI18n({
    locale: 'jp',     
    fallbackLocale: 'ar',  
    messages, 
});


export default i18n;