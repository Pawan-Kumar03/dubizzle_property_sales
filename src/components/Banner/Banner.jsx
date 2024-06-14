import React, { useState } from "react";
import saleProperty from "../../assets/icons/sale-property.svg";
import inputSearch from "../../assets/icons/input-search.svg";

export default function Banner({ onSearch, onDisplayAllListings }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchQuery); // Pass the search query to the parent component
    };

    const handleDisplayAllListings = (event) => {
        event.preventDefault();
        onDisplayAllListings(); // Trigger function to display all listings
    };

    return (
        <section>
            <div className="container bg-none lg:bg-banner bg-cover bg-center bg-no-repeat lg:my-2 lg:pb-10 lg:pt-5 rounded-md">
                <h1 className="text-2xl text-center font-semibold lg:text-white lg:mb-8 hidden lg:block">
                    The best place to sell your property in Sukkur
                </h1>
                <div className="lg:bg-black lg:bg-opacity-50 rounded-md lg:p-4 lg:w-[88%] mx-auto">
                    <div className="hidden lg:flex items-center space-x-14 mb-4">
                        <span className="text-base font-semibold lg:text-white hidden lg:block">
                            Searching in
                        </span>
                        <ul className="hidden lg:flex items-center space-x-2 text-sm">
                            <li>
                                <button
                                    className="hover:bg-primary-500 duration-200 text-white px-5 py-2 font-semibold rounded-full"
                                    onClick={handleDisplayAllListings} // Update onClick handler
                                >
                                    Property for Sale
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form className="lg:flex lg:space-x-3 px-2 lg:px-0 py-4 lg:py-0 relative" onSubmit={handleSearch}>
                        <input
                            className="w-full p-4 lg:rounded-md rounded-full border border-gray-300/50 dark:border-gray-400/20 dark:bg-slate-800/40 dark:text-gray-300"
                            placeholder="Search for anything"
                            type="text"
                            name="search"
                            id="search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <img
                            src={inputSearch}
                            alt="input-search"
                            className="hidden lg:inline-block absolute right-[190px] top-5 w-5 opacity-60 bg-white dark:bg-transparent dark:opacity-100"
                        />
                        <button type="submit">
                            <img
                                src={inputSearch}
                                alt="input-search"
                                className="absolute bottom-8 right-8 w-5 lg:hidden opacity-60"
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="btn px-12 hidden lg:inline-block py-4"
                            />
                        </button>
                    </form>
                </div>
            </div>

            <div className="container lg:hidden grid grid-cols-3 gap-2 px-2 py-3 text-center text-xs">
                <a
                    className="flex flex-col space-y-1 items-center px-3 py-6 hover:underline rounded decoration-primary-500 border border-gray-300/40 dark:border-gray-400/30 shadow-sm"
                    onClick={handleDisplayAllListings} // Update onClick handler
                    href="#"
                >
                    <img className="w-5" src={saleProperty} alt="propperty-sale-icon" />
                    <span className="dark:text-gray-100">Property for Sale</span>
                </a>
            </div>
        </section>
    );
}
