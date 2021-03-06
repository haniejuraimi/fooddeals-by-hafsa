var firebaseConfig = {
    apiKey: "AIzaSyCtd_uNBZMvw8XRcKog7aGd6UNodtEZCwo",
    authDomain: "coupons-for-you-el.firebaseapp.com",
    databaseURL: "https://coupons-for-you-el.firebaseio.com",
    projectId: "coupons-for-you-el",
    storageBucket: "coupons-for-you-el.appspot.com",
    messagingSenderId: "950396480131",
    appId: "1:950396480131:web:057ca2d53a1d57ab6709b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = new Vue({
    el: '#app',
    data: {
        coupons: [],
        selectedCompanyName: null,
        selectedPrice: null,
        selectedLocation: null,
        selectedCoupon: {},
    },
    mounted: async function () {
        const db = firebase.firestore();
        let couponsRef = db.collection('coupons');

        const snapshot = await couponsRef.get();
        this.coupons = snapshot.docs.map(doc => doc.data());
    },
    methods: {
        openCouponModal: function (selectedCoupon) {
            this.selectedCoupon = selectedCoupon;
        },
        closeCouponModal: function () {
            this.selectedCoupon = {}
        },
        companyNameFilterSelected: function (selectedCompanyName) {
            console.log(selectedCompanyName)
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
        setLocation: function (selectedLocation) {
            this.selectedLocation = selectedLocation;
        },
        clearLocation: function () {
            this.selectedLocation = null;
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
            const selectedLocation = this.selectedLocation

            if (!selectedPrice && !selectedCompanyName && !selectedLocation) {
                return this.coupons;
            }

            // price is null, companyName is KFC
            console.log({ selectedPrice, selectedCompanyName, selectedLocation })

            let couponsFilteredByPrice = this.coupons;
            if (selectedPrice) {
                // filter
                couponsFilteredByPrice = this.coupons.filter(function (coupon) {
                    if (coupon.price === selectedPrice) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            console.log("at company name filter, the value of coupons filtered by price", couponsFilteredByPrice)
            const couponsFilteredByPriceAndCompanyName = couponsFilteredByPrice.filter(function (coupon) {
                if (!selectedCompanyName) return true;

                const companyName = coupon.companyName.trim();
                if (companyName === selectedCompanyName) {
                    return true;
                } else {
                    return false;
                }
            })

            console.log("at location filter, the value of coupons filtered by price and name", couponsFilteredByPriceAndCompanyName)
            const couponsFilteredByPriceAndCompanyNameAndLocation = couponsFilteredByPriceAndCompanyName.filter(function (coupon) {
                if (!selectedLocation) {
                    return true;
                }

                if (!coupon.locationTags) { return false }

                if (coupon.locationTags.includes(selectedLocation)) {
                    return true;
                } else {
                    return false;
                }
            })

            return couponsFilteredByPriceAndCompanyNameAndLocation;
        },
        couponsWithUniqueCompanyNames: function () {
            function getUnique(coupons) {
                var uniqueArrayOfCompanies = [];

                // Loop through array values
                for (const coupon of coupons) {
                    const companyName = coupon.companyName.trim();
                    if (!uniqueArrayOfCompanies.includes(companyName)) {
                        uniqueArrayOfCompanies.push(companyName);
                    }
                }
                return uniqueArrayOfCompanies;
            }

            return getUnique(this.coupons);
        },

        couponsWithUniquePrices: function () {
            function getUnique(coupons) {
                var uniqueArrayOfPrices = [];

                // Loop through array values
                for (const coupon of coupons) {
                    if (!uniqueArrayOfPrices.includes(coupon.price)) {
                        uniqueArrayOfPrices.push(coupon.price);
                    }
                }
                return uniqueArrayOfPrices;
            }

            return getUnique(this.coupons);
        }
    }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    $('.toast').toast('show');
});
