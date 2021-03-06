import * as React from "react"
import { Carousel } from "reap-ui"

export default () => (
    <Carousel>
        <Carousel.Item>
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                aria-label="Placeholder: First slide"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
            </svg>
        </Carousel.Item>
        <Carousel.Item>
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                aria-label="Placeholder: Second slide"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#666"></rect>
                <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
            </svg>
        </Carousel.Item>
        <Carousel.Item>
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                aria-label="Placeholder: Third slide"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#555"></rect>
                <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
            </svg>
        </Carousel.Item>
    </Carousel>
)