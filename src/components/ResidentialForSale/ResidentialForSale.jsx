import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";

export default function ResidentialForSale({ searchParams = {}, showAll, listings }) {
    const [filteredResults, setFilteredResults] = useState(listings);

    useEffect(() => {
        const filtered = listings.filter((listing) => {
            return (
                (searchParams.city ? listing.city === searchParams.city : true) &&
                (searchParams.location ? listing.location.toLowerCase().includes(searchParams.location.toLowerCase()) : true) &&
                (searchParams.propertyType ? listing.propertyType === searchParams.propertyType : true) &&
                (searchParams.priceRange ? parseInt(listing.price.replace(/[^0-9]/g, "")) <= parseInt(searchParams.priceRange.replace(/[^0-9]/g, "")) : true) &&
                (searchParams.beds ? listing.beds === parseInt(searchParams.beds) : true)
            );
        });
        setFilteredResults(filtered);
    }, [searchParams, listings]);

    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleClick = (property) => {
        setSelectedProperty(property);
    };

    return (
        <section className="py-2 px-2 lg:px-0">
            <div className="container">
                <h1 className="text-2xl font-semibold mb-5 dark:text-gray-100">
                    {searchParams.city ? `Property in search ${searchParams.city}` : "Popular in Property for Sale in UAE"}
                </h1>
                {filteredResults.length > 0 ? (
                    <Swiper
                        spaceBetween={10}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            400: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {filteredResults.map((item, index) => (
                            <SwiperSlide className="mb-10" key={index}>
                                <Card item={item} onClick={() => handleClick(item)} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center dark:text-gray-400">No properties match your search criteria.</p>
                )}
            </div>
            {selectedProperty && (
                <div className="container mt-8">
                    <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">Property Details</h2>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 lg:pr-4">
                            <img className="rounded-lg mb-4 object-cover h-80 w-full" src={selectedProperty.image} alt={selectedProperty.title} />
                        </div>
                        <div className="lg:w-1/2 lg:pl-4">
                            <h3 className="text-lg font-semibold mb-2 text-primary-500">{selectedProperty.title}</h3>
                            <p className="text-sm mb-2 dark:text-gray-300">{selectedProperty.price}</p>
                            <p className="mb-4 dark:text-gray-400 text-sm">{selectedProperty.city}, {selectedProperty.location}</p>
                            <p className="mb-4 dark:text-gray-400 text-sm">{selectedProperty.propertyType}</p>
                            <p className="mb-4 dark:text-gray-400 text-sm">{selectedProperty.beds} Beds</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
