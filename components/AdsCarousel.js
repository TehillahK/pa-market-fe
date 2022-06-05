import {Carousel} from "react-bootstrap";

const AdsCarousel = () => {
    const imageFit = "cover"
    const imageHeight = "15rem"
    const imageWidth = "18rem"
  return(
      <Carousel variant="light"
                indicators={false}
                fade
      >
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/5848486/pexels-photo-5848486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="First slide"
                  style={{height:imageHeight,width:imageWidth,objectFit:imageFit,borderRadius:"2rem"}}
              />
              <Carousel.Caption>

              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/Screenshot%202022-06-05%20043325.png?alt=media&token=1253ca2c-3eff-4131-8923-7016a85a02a8"
                  alt="Second slide"
                  style={{height:imageHeight,width:imageWidth,objectFit:imageFit,borderRadius:"2rem"}}
              />
              <Carousel.Caption>

              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/5848486/pexels-photo-5848486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Third slide"
                  style={{height:imageHeight,width:imageWidth,objectFit:imageFit,borderRadius:"2rem"}}
              />
              <Carousel.Caption>

              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}
export  default AdsCarousel;
