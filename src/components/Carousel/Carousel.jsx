import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpapertip.com%2Fes%2FhbwxJR%2F&psig=AOvVaw0sf71JFq8eYJUcbrm4-3ja&ust=1618521350765000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj9i4bU_u8CFQAAAAAdAAAAABAD"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://img.fayerwayer.com/sites/9/2020/12/05/iphones-f624d8d1619c8fbff0573b0add366212.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.videomaker.com/wp-content/uploads/2018/11/GoPro_HERO7_black-1920x1080.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;