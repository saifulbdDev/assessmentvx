import React from 'react';
import Slider from 'react-slick';
import Item from './Item';
import './slick.css';

function Sliders() {
 
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '0px',
    };
   const data  = [
     {title:"SEO Optimized", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-globe"},
     {title:"Fully Responsive", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-laptop"},
     {title:"Clean Coded", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-edit"},
     {title:"Clean Coded", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-edit"},
     {title:"Clean Coded", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-edit"},
     {title:"Clean Coded", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-edit"},
     {title:"Clean Coded", body:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet",icon:"fa fa-edit"},
     
   ]
    return (
      <section className="Services">
        <div className="container mx-auto">
          <div class="colspan-12">
            <div id="services-slider">
              <Slider {...settings}>
                {data.map((item) => {
                  return <Item key={item.title} item={item} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  
}
export default Sliders;