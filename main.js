var app = new Vue({
    el: '#app',
    data: {
        coupons: [
            {
                companyName: 'KFC',
                code: '2CHICKEN',
                price: '$4.95',
                couponName: '2pc Chicken Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "kfc_5.JPG"
            },
            {
                companyName: 'KFC',
                code: '2TENDERS',
                price: '$1,95',
                couponName: '2pc Hot & Crispy Tenders',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1275.jpg"
            },
            {
                companyName: 'KFC',
                code: '8FOR8',
                price: '$8',
                couponName: '3pc Chicken & 5 Tenders',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1276.jpg"
            },
            {
                companyName: 'KFC',
                code: 'NUGGETS',
                price: '$3',
                couponName: '9pc Nuggets',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1277.jpg"
            },
            {
                companyName: 'KFC',
                code: 'ANY2BOWLS',
                price: '$5',
                couponName: 'Any 2 Bowls',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1278.jpg"
            },
            {
                companyName: 'KFC',
                code: '2WINGS',
                price: '$3.35',
                couponName: '1-for-1 Wings',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1279.jpg"
            },
            {
                companyName: 'KFC',
                code: 'STACKER',
                price: '$7.95',
                couponName: 'Zinger Stacker & Cheese Fries',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1282.jpg"
            },
            {
                companyName: 'KFC',
                code: 'SNACKER',
                price: '$2.50',
                couponName: '4pc Nuggets with Fries',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1283.jpg"
            },
            {
                companyName: 'KFC',
                code: 'BWBUDDYML',
                price: '$9.95',
                couponName: 'Bowl Buddy Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1284.jpg"
            },
            {
                companyName: 'KFC',
                code: 'PKTBUDDYML',
                price: '$9.95',
                couponName: 'BBQ Pockett Buddy Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1285.jpg"
            },
            {
                companyName: 'KFC',
                code: 'SNACKNSHARE',
                price: '$8.95',
                couponName: 'Snack & Share Box (5 Tenders & 12 Nuggets)',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1286.jpg"
            },
            {
                companyName: 'KFC',
                code: 'FEAST',
                price: '$25.95',
                couponName: 'Savers Feast (9pc Chicken, 2 Mashed Potatoes, 1 Coleslaw, 4 Regular Soft Drinks',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1287.jpg"
            },
            {
                companyName: 'KFC',
                code: 'TWISTER',
                price: '$4',
                couponName: '1-for-1 Twister',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1288.jpg"
            },
            {
                companyName: 'KFC',
                code: 'MILO',
                price: '$3.30',
                couponName: '1-for-1 Iced Milo',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1289.jpg"
            },
            {
                companyName: 'KFC',
                code: 'RISER',
                price: '$3.95',
                couponName: 'Riser Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1290.jpg"
            },
            {
                companyName: 'KFC',
                code: 'PORRIDGE',
                price: '$4.95',
                couponName: 'Original Recipe Porridge Meal',
                dueDate: '19 Nov 2019',
                invalidPlaces: 'KFC Jewel Changi Airport, Kidzania and Singapore Zoo',
                invalidThings: 'KFC Delivery and KFC Corporate Events',
                gambar: "IMG_1291.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.50',
                couponName: 'Turkey Ham Croissanwich w/ Egg Meal',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1322.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$7.00',
                couponName: 'Whopper Meal',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1321.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.00',
                couponName: 'Long Chicken Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1320.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$5.00',
                couponName: 'Tendergrill Chicken Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1319.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$4.00',
                couponName: ' Hamburger Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1318.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$3.00',
                couponName: 'Turkey Sausage Croissanwich With Egg',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1317.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$6.00',
                couponName: 'Turkey Ham & Cheese Omelette Platter',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1316.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$3.20',
                couponName: '1-For-1 Minute Maid Refresh',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1315.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.00',
                couponName: 'Hash Browns',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1314.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.50',
                couponName: 'Onion Rings',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1313.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$1.50',
                couponName: '4pc Nuggets',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1312.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$11.00',
                couponName: 'Double Fish N Crisp + Single Mushroom Swiss Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1311.jpg"
            },
            {
                companyName: 'BURGER KING',
                code: '-',
                price: '$15.90',
                couponName: 'Mushroom Swiss Tendergrill Chicken + TenderCrisp Chicken + Hershey Sundae Pie Set',
                dueDate: '25 Feb 2020',
                invalidPlaces: 'BK Kallang Leisure Park, Jewel and Airport Stores',
                invalidThings: 'BK Delivery and Catering  ',
                gambar: "IMG_1310.jpg"
            },
        ],
        selectedCompanyName: null,
        selectedPrice: null,
    },

    methods: {
        companyNameFilterSelected: function (selectedCompanyName) {
            this.selectedCompanyName = selectedCompanyName;
        },
        clearFoodOutletsFilter: function () {
            this.selectedCompanyName = null;
        },
        priceFilterSelected: function (selectedPrice) {
            this.selectedPrice = selectedPrice;
        },
        clearPriceFilter: function () {
            this.selectedPrice = null;
        },
        filteredFoodOutlets: function () {
            const selectedCompanyName = this.selectedCompanyName;
            if (!selectedCompanyName) return this.coupons;

            return this.coupons.filter(function (coupon) {
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            });
        },
    },

    computed: {
        filteredCoupons: function () {
            const selectedPrice = this.selectedPrice;
            const selectedCompanyName = this.selectedCompanyName;

            // price is null, companyName is KFC
            console.log({selectedPrice, selectedCompanyName})


            let couponsFilteredByPrice = this.coupons;
            if(selectedPrice){
                // filter
                couponsFilteredByPrice = this.coupons.filter(function (coupon) {
                    if (coupon.price === selectedPrice) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            if(!selectedCompanyName){ 
                return couponsFilteredByPrice;   
            }

            console.log("at company name filter, the value of coupons filtered by price", couponsFilteredByPrice)
            const couponsFilteredByPriceAndCompanyName = couponsFilteredByPrice.filter(function(coupon){
                if (coupon.companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            })


            return couponsFilteredByPriceAndCompanyName;
        },
    }

})