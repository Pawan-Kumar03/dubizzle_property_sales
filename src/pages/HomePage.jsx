import React, { useState, useContext } from "react";
import Banner from "../components/Banner/Banner";
import ResidentialForSale from "../components/ResidentialForSale/ResidentialForSale";
import ListingsContext from "../contexts/ListingsContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { listings } = useContext(ListingsContext);
    const [searchParams, setSearchParams] = useState({});
    const [showAllListings, setShowAllListings] = useState(false);
    const [showPlaceAnAdPage, setShowPlaceAnAdPage] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (query) => {
        setSearchParams(query);
        setShowAllListings(false);
    };

    const handleDisplayAllListings = () => {
        setShowAllListings(true);
    };

    const handlePlaceAnAd = () => {
        setShowPlaceAnAdPage(true);
        navigate("/place-an-ad"); // Navigate to the place an ad page
    };

    return (
        <>
            <Banner onSearch={handleSearch} onDisplayAllListings={handleDisplayAllListings} onPlaceAnAd={handlePlaceAnAd} />
            <ResidentialForSale searchParams={searchParams} showAll={showAllListings} listings={listings} />
        </>
    );
}
