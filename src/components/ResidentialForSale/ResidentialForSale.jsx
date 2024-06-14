import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";

export default function ResidentialForSale({ searchQuery, showAll }) {
    const [listings, setListings] = useState([
			{
				image: "https://tse3.mm.bing.net/th?id=OIP.819Digph-0OfdWBLjkmxWQHaE9&pid=Api&P=0&h=220",
				title: "2 Beds • 1 Baths",
				price: "PKR 3,500,000",
				extension: "Saddar, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/94707593-800x600.jpeg",
				title: "3 Beds • 3 Baths",
				price: "PKR 4,200,000",
				extension: "Barrage Colony, Sukkur",
			  },
			  {
				image: "https://sukkurproperty.com/property/assets/uploads/images/single_img/dsc_0007.jpg",
				title: "4 Beds • 3 Baths",
				price: "PKR 5,800,000",
				extension: "Sukkur Housing Society, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/65652154-800x600.jpeg",
				title: "5 Beds • 4 Baths",
				price: "PKR 8,500,000",
				extension: "Airport Road, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/75610232-800x600.jpeg",
				title: "4 Beds • 3 Baths",
				price: "PKR 6,200,000",
				extension: "Pak Colony, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/70038855-800x600.jpeg",
				title: "3 Beds • 2 Baths",
				price: "PKR 3,800,000",
				extension: "Barrage Colony, Sukkur",
			  },
			  {
				image: "https://tse4.mm.bing.net/th?id=OIP.t2gvxD9o3clMDP0ILaQfvgHaFj&pid=Api&P=0&h=220",
				title: "4 Beds • 4 Baths",
				price: "PKR 6,500,000",
				extension: "Pak Colony, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/91949830-800x600.jpeg",
				title: "5 Beds • 3 Baths",
				price: "PKR 8,200,000",
				extension: "Sukkur Housing Society, Sukkur",
			  },
			  {
				image: "https://media.zameen.com/thumbnails/9324305-800x600.jpeg",
				title: "6 Beds • 5 Baths",
				price: "PKR 9,500,000",
				extension: "Airport Road, Sukkur",
			  },
			  {
				image: "https://i.ytimg.com/vi/klhTtRZcRtY/maxresdefault.jpg",
				title: "4 Beds • 3 Baths",
				price: "PKR 5,000,000",
				extension: "Pak Colony, Sukkur",
			  },		
    ]);

    const [selectedProperty, setSelectedProperty] = useState(null);

    const filteredListings = showAll
        ? listings
        : listings.filter((listing) =>
              listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              listing.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
              listing.extension.toLowerCase().includes(searchQuery.toLowerCase())
          );

    const handleClick = (property) => {
        setSelectedProperty(property);
    };

    return (
        <section className="py-2 px-2 lg:px-0">
            <div className="container">
                <h1 className="text-2xl font-semibold mb-5 dark:text-gray-100">
                    Popular in Property for Sale
                </h1>
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
                    {filteredListings.map((item, index) => (
                        <SwiperSlide className="mb-10" key={index}>
                            <Card item={item} onClick={handleClick} />
                        </SwiperSlide>
                    ))}
                </Swiper>
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
                            <p className="mb-4 dark:text-gray-400 text-sm">{selectedProperty.extension}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
