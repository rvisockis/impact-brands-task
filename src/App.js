import Header from './components/Header';
import Product from './components/Product';
import FAQ from './components/FAQ';
import Slider from './components/Slider'
import Footer from './components/Footer'
import FAQData from './constants/faqs.json'
import ProductData from './constants/products.json'
import {Container, Grid, Button} from '@material-ui/core';
import {useState, useEffect} from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, {
    Pagination
} from 'swiper/core';
import Typography from '@material-ui/core/Typography';

SwiperCore.use([Pagination]);

function App() {
    const [showProductCount, setShowProductCount] = useState(4);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        window.innerWidth < 400 ? setIsMobile(true) : setIsMobile(false);
        let allProducts = document.getElementsByClassName("product");
        let button = document.getElementById('show-more-btn');

        for (let a = 0; a < allProducts.length; a++) {
            allProducts[a].style.display = "block";
        }

        if (isMobile) {
            for (let a = showProductCount; a < allProducts.length; a++) {
                allProducts[a].style.display = "none";
            }
            button.style.display = "block";
        }

        if (showProductCount >= allProducts.length || !isMobile) button.style.display = "none";
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        handleResize();
    }, [showProductCount]);

    return (
        <div>
            <Header/>
            <Slider/>
            <Container maxWidth='lg' className='main-container'>
                <Grid container spacing={3}>
                    {ProductData.map((product, index) => (
                        <Grid
                            key={index}
                            item
                            lg={3}
                            md={3}
                            sm={6}
                            xs={12}>
                            <Product
                                image={product.image}
                                title={product.title}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Button variant="contained" onClick={() => {
                    setShowProductCount(showProductCount + 4)
                }} id='show-more-btn'>Show more...</Button>
                <Typography variant="h4" className='section-title'>
                    FREQUENTLY ASKED QUESTIONS (FAQs)
                </Typography>
                <div className='faq'>
                    {FAQData.map((faq, index) => (
                        <FAQ
                            key={index}
                            faqQuestion={faq.question}
                            faqAnswer={faq.answer}
                            faqIndex={index}
                        />
                    ))}
                </div>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
