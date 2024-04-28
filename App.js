import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./icon.jpeg";
import userIcon from "./user-icon.png";
import { FaSearch } from "react-icons/fa";

// Header Component - logo, search, list items, profile icon
const HeaderComponent = () => {
    return (
        <div className="header">
            {/*Logo*/}
            <div className="left">
                <img src={icon} alt="icon" />
            </div>
            {/*Search Bar*/}
            <div className="center">
                <input className="input" type="text" placeholder="Search" />
                <button type="submit">
                    <FaSearch />
                </button>
            </div>
            {/*Navigation items*/}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {/*Profile Icon*/}
            <div className="right">
                <img src={userIcon} alt="profile-icon" />
            </div>
        </div>
    );
};

const resList = [
    {
        "info": {
            "id": "17301",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17301.JPG",
            "locality": "Vani Vilas Road",
            "areaName": "Basavanagudi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-vani-vilas-road-basavanagudi-bangalore-17301",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "457522",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/3770fd3f-18e3-4a61-b8df-8a36fd7d5887_457522.jpg",
            "locality": "Gandhi Bazaar Main Road",
            "areaName": "Basavangudi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-29 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-gandhi-bazaar-main-road-basavangudi-bangalore-457522",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "77949",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Gandhi Bazar",
            "areaName": "Basavanagudi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "23818",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Bull Temple Road",
            "areaName": "Basavanagudi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-bull-temple-road-basavanagudi-bangalore-23818",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "484182",
            "name": "California Burrito",
            "cloudinaryImageId": "dgaistubp3t7pd2r2cff",
            "locality": "Gandhi Bazaar",
            "areaName": "Gandhi Bazaar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-29 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-gandhi-bazaar-bangalore-484182",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "39063",
            "name": "Hotel Navayuga",
            "cloudinaryImageId": "zozbnn7oeipqdqy9rmjg",
            "locality": "Majestic",
            "areaName": "Majestic",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Andhra"
            ],
            "avgRating": 4.4,
            "parentId": "21555",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 16:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-navayuga-majestic-bangalore-39063",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "46647",
            "name": "Ayodhya Upachar",
            "cloudinaryImageId": "74914b1ea91d2c6b1ddce5db6ce8759f",
            "locality": "Banashankari",
            "areaName": "Banashankari",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Ice Cream",
                "Chaat"
            ],
            "avgRating": 4.4,
            "parentId": "370539",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ayodhya-upachar-banashankari-bangalore-46647",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "433950",
            "name": "SGS Nonveg Gundu Palav (Balepet)",
            "cloudinaryImageId": "jsuj2gmytreaeadxqjny",
            "locality": "UB City",
            "areaName": "Balepet",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "South Indian",
                "Biryani"
            ],
            "avgRating": 4.6,
            "parentId": "261469",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 14:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sgs-nonveg-gundu-palav-balepet-ub-city-balepet-bangalore-433950",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "807965",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "b345adcead43fa4f77fbc2fcd2979f0c",
            "locality": "Basavanagudi",
            "areaName": "Banashankari",
            "costForTwo": "₹650 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4,
            "parentId": "332",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-basavanagudi-banashankari-bangalore-807965",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "56428",
            "name": "Puliyogare Point",
            "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
            "locality": "Basavanagudi",
            "areaName": "Basavanagudi",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.6,
            "parentId": "8409",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/puliyogare-point-basavanagudi-bangalore-56428",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "792606",
            "name": "Shiv Sagar Signature",
            "cloudinaryImageId": "75c49a5d43681cb2406227ae82f6c781",
            "locality": "Gandhi Bazar Main Road",
            "areaName": "Basavanagudi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.5,
            "parentId": "183310",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shiv-sagar-signature-gandhi-bazar-main-road-basavanagudi-bangalore-792606",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "277965",
            "name": "Dwarkamai Pure Veg Restaurant",
            "cloudinaryImageId": "xasb3saoezi04u4c76u0",
            "locality": "Basavanagudi",
            "areaName": "Basavanagudi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Italian-American"
            ],
            "avgRating": 4.3,
            "parentId": "75585",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-28 15:30:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-a6c50e37-cdf7-4bb9-9e9d-732a4324a38a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dwarkamai-pure-veg-restaurant-basavanagudi-bangalore-277965",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];
const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="res-card">
            <img src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId
            }/>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                {
                    resList.map(item => (
                        <RestaurantCard resData={item} />
                    ))
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <HeaderComponent />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the component
root.render(<AppLayout/>);