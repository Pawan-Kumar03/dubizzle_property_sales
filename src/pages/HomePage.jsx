import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import ResidentialForSale from "../components/ResidentialForSale/ResidentialForSale";

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllListings, setShowAllListings] = useState(false); // State to track displaying all listings

    const handleSearch = (query) => {
        setSearchQuery(query); // Update the search query state
        setShowAllListings(false); // Ensure showAllListings is false when searching
    };

    const handleDisplayAllListings = () => {
        setShowAllListings(true); // Set showAllListings to true to display all listings
    };

    return (
        <>
            <Banner onSearch={handleSearch} onDisplayAllListings={handleDisplayAllListings} /> {/* Pass handleSearch and handleDisplayAllListings functions */}
            <ResidentialForSale searchQuery={searchQuery} showAll={showAllListings} /> {/* Pass searchQuery and showAllListings to ResidentialForSale */}
        </>
    );
}
