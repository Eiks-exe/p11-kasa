import React, { useRef } from 'react'
import IconChevronRight from '../Icons/IconChevronRight';
import "./AppCaroussel.scss"
type Props = {
    images: string[]
    imageFormat?: { w?: string; h?: string };
}

const AppCaroussel = ({images, imageFormat}: Props) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const imageRef = useRef<HTMLImageElement>(null);

    const changeImage = (direction: "next"|"previous") => {
        if(direction === "next") {
            setCurrentImage(currentImage -1 >=0 ? currentImage - 1: images.length-1)
            imageRef.current?.classList.remove('carousel-image-animate');
            void imageRef.current?.offsetWidth;
            imageRef.current?.classList.add('carousel-image-animate');
        } else {
            setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : images.length - 1);

            //CSS Trick to re-animate the image
            imageRef.current?.classList.remove('carousel-image-animate');
            void imageRef.current?.offsetWidth;
            imageRef.current?.classList.add('carousel-image-animate'); 
        }
    }


    const preload = (): void => {
        if (images.length > 1) {
            for (let i = 1; i < images.length; i++) {
                let temp: HTMLImageElement | undefined = new Image();
                temp.src = images[i];
                temp = undefined;
            }
        }
    };
    return (
        <div id="carousel">
            <img
                ref={imageRef}
                src={images[currentImage]}
                style={{ width: imageFormat?.w, height: imageFormat?.h }}
                width={imageFormat?.w}
                height={imageFormat?.h}
                onLoad={preload}
                alt="#"
            />
            <div className="app_carousel_filter" />
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="app_carousel_arrow_button"
                        style={{ left: '2%' }}
                        aria-label="Previous"
                        onClick={() => changeImage('previous')}
                    >
                        <IconChevronRight
                            style={{
                                transform: 'rotate(180deg)',
                            }}
                            color={'white'}
                        />
                    </button>
                    <button
                        type="button"
                        className="app_carousel_arrow_button"
                        style={{ right: '2%' }}
                        aria-label="Next"
                        onClick={() => changeImage('next')}
                    >
                        <IconChevronRight
                            color={'white'}
                            style={{
                                
                            }}
                        />
                    </button>
                </>
            )}
        </div>
    )
}

export default AppCaroussel