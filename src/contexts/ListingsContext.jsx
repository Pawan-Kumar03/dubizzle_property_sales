import React, { createContext, useState } from "react";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
    const [listings, setListings] = useState([
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/13/c072cb02-0433-4e97-a5b5-de04e8f9e7a9/9c8f203af0e4430b867df024e8ef0fb8-.jpg?impolicy=dpv",
            title: "2 Beds • 1 Bath",
            price: "AED 500,000",
            city: "Dubai",
            location: "Downtown",
            propertyType: "Apartment",
            beds: 2,
            extension: "Downtown, Dubai"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/05/23/89fec225-2cad-44d3-b2c0-bfa8385606b5/d7b9ebdda9f04734981836d65aba71ef-.jpg?impolicy=legacy&imwidth=800",
            title: "3 Beds • 3 Baths",
            price: "AED 1,200,000",
            city: "Abu Dhabi",
            location: "Corniche",
            propertyType: "Villa",
            beds: 3,
            extension: "Corniche, Abu Dhabi"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/24/8bedb115-c93c-4180-8b8f-8b3e01fa0c55/5c9729efe932456dbb8455c973f66cf2-.jpg?impolicy=dpv",
            title: "4 Beds • 3 Baths",
            price: "AED 2,500,000",
            city: "Sharjah",
            location: "Al Majaz",
            propertyType: "House",
            beds: 4,
            extension: "Al Majaz, Sharjah"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/21/966d7fcb-9d5a-4538-9aab-acd3d3d13b1f/43717c4bfaf444489aafc583524875c0-.jpg?impolicy=lpv",
            title: "5 Beds • 4 Baths",
            price: "AED 3,500,000",
            city: "Dubai",
            location: "Palm Jumeirah",
            propertyType: "Villa",
            beds: 5,
            extension: "Palm Jumeirah, Dubai"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/24/b113c380-597e-4619-b313-007646cb2c8a/849f6440947c463685cefacc4e8c5a72-.jpg?impolicy=lpv",
            title: "4 Beds • 3 Baths",
            price: "AED 2,200,000",
            city: "Ajman",
            location: "Al Rashidiya",
            propertyType: "House",
            beds: 4,
            extension: "Al Rashidiya, Ajman"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/21/9a26b967-7319-4789-9732-5fbcb12caf12/9aafbf05917149c887ad29dcfaab96a3-.jpg?impolicy=lpv",
            title: "3 Beds • 2 Baths",
            price: "AED 1,800,000",
            city: "Dubai",
            location: "JLT",
            propertyType: "Apartment",
            beds: 3,
            extension: "JLT, Dubai"
        },
        {
            image: "https://tse4.mm.bing.net/th?id=OIP.t2gvxD9o3clMDP0ILaQfvgHaFj&pid=Api&P=0&h=220",
            title: "4 Beds • 4 Baths",
            price: "AED 3,000,000",
            city: "Abu Dhabi",
            location: "Saadiyat Island",
            propertyType: "Villa",
            beds: 4,
            extension: "Saadiyat Island, Abu Dhabi"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/09/645ab931-7de1-4041-9a84-6ed51256bcc4/c0bbd321452046dbb53cf2b8dae0d095-.jpg?impolicy=legacy&imwidth=480",
            title: "5 Beds • 3 Baths",
            price: "AED 2,800,000",
            city: "Sharjah",
            location: "Al Khan",
            propertyType: "House",
            beds: 5,
            extension: "Al Khan, Sharjah"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/21/d1364cb5-bbda-4c43-92b4-92062eb2bdc8/846e4f26501942609494a080017f4765-.jpg?impolicy=lpv",
            title: "6 Beds • 5 Baths",
            price: "AED 4,500,000",
            city: "Dubai",
            location: "Emirates Hills",
            propertyType: "Villa",
            beds: 6,
            extension: "Emirates Hills, Dubai"
        },
        {
            image: "https://dbz-images.dubizzle.com/images/2024/06/20/2c0df274-28ad-4709-8e6e-dccb7fa307b1/ca7ce4e531a14f3d925fac944aab2d4e-.jpg?impolicy=lpv",
            title: "4 Beds • 3 Baths",
            price: "AED 2,000,000",
            city: "Ajman",
            location: "Al Nuaimiya",
            propertyType: "House",
            beds: 4,
            extension: "Al Nuaimiya, Ajman"
        },
    ]);

    const addListing = (newListing) => {
        setListings((prevListings) => [...prevListings, newListing]);
    };

    return (
        <ListingsContext.Provider value={{ listings, addListing }}>
            {children}
        </ListingsContext.Provider>
    );
};

export default ListingsContext;
