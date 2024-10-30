import React from 'react'
import blog from './assets/blog.jpg'
import accordion from './assets/accordion.jpg'
import column from './assets/3-column.jpg'

function Angular(){
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide w-50 p-4 mx-auto" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={blog} className="d-block w-100" alt="profile"/>
                    </div>
                    <div className="carousel-item">
                        <img src={column} className="d-block w-100" alt="colm"/>
                    </div>
                    <div className="carousel-item">
                        <img src={accordion} className="d-block w-100" alt="acc"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Angular