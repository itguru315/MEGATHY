// Localization
import baseLocal from "../Resources/Localization/baseLocalization";
import React from "react";
import { Image, Dimensions } from "react-native";
var { EventEmitter } = require("fbemitter");

module.exports = {
    /// Screen Width And Height
    scrWidth: Dimensions.get("screen").width,
    scrHeight: Dimensions.get("screen").height,

    /// Other Misc Constants
    alertTitle: "Megathy",
    emitter: new EventEmitter(),
    isLogin: "false",
    loginListener: "loginListener",
    logoutListener: "logoutListener",
    setStoreListener: "setStoreListener",
    languageEnglish: "en",
    languageArabic: "ar",
    reloadOrderSummaryListener: "reloadOrderSummaryListener",
    DeviceInfo: require("react-native-device-info"),

    countyDetails: {
        IN: {
            name: "India",
            code: "IN",
            dialCode: "+91",
            mask: "99999 99999",
            image: this.flagImageIN,
        },
        SA: {
            code: "SA",
            dialCode: "+966",
            mask: "99 999 9999",
            image: this.flagImageSA,
        },
    },

    // Useful Images
    radioImage: isSelected => {
        var imageName = require("../Resources/Images/DeliveryDetails/RadioButtonSelectedRed.png");
        if (isSelected === false) {
            imageName = require("../Resources/Images/DeliveryDetails/RadioButton.png");
        }
        return <Image style={{ width: 20, height: 20 }} source={imageName} />;
    },

    logoImage: () => {
        return <Image style={{ width: 189, height: 59 }} source={require("../Resources/Images/LogoTitleImage.png")} />;
    },

    flagImageIN: () => {
        return (
            <Image style={{ width: 30, height: 20 }} source={require("../Resources/Images/DeliveryDetails/IN.png")} />
        );
    },

    flagImageSA: () => {
        return (
            <Image style={{ width: 30, height: 20 }} source={require("../Resources/Images/DeliveryDetails/SA.png")} />
        );
    },

    /// Common Functions
    debugLog: log => {
        console.log("\n====================>");
        console.log(log);
        console.log("<====================\n");
    },

    /// Async Storage Keys
    keyCurrentUser: "currentUser",
    keyCurrentSettings: "currentSettings",
    keyCurrentStore: "currentStore",
    keyCurrentAppLanguage: "currentAppLanguage",
    keyCurrentCartItems: "cartItems",
    keyScheduleOrderParent: "parent",
    keyCurrentCity: "currentCity",
    keyCurrentArea: "currentArea",

    //Screen Name Keys
    kCategoryScreen: "CategoryScreen",
    kSubCategoryScreen: "SubCategoryScreen",
    kProductScreen: "ProductScreen",
    kCartScreen: "CartScreen",
    kOrderMasterScreen: "OrderMasterScreen",

    /// Common API request parameters
    deviceTypeiPhone: "IPHONE",
    deviceTypeAndroid: "ANDROID",
    notifyId: "0123456789",
    timeZone: "Asia/Riyadh",

    APIConfirmationTypeRegister: "Register",
    APIConfirmationTypeForgotPassword: "Forgot Password",
    APIConfirmationTypeAddress: "Address Conformation",

    /// Rest API details
    // Base URL
    baseURL: "http://192.168.0.3/megathylaravel/public/api/v1/", // Jay Kaneriya
    // baseURL: "http://192.168.0.11/Megathy/MegathyLaravel/public/api/v1/", // BharatBhai
    // baseURL: "http://192.168.0.2/MegathyLaravel/public/api/v1/", //Chintan Adatiya
    // baseURL: "http://manage.megathykom.com/api/v1/", // Live

    /// End Points
    // Login/Signup
    APILogin: "userLogin",
    APIRegister: "registerUser",
    APIForgotPassword: "requestForgotPassword",
    APIVerifyFBId: "verifyfacebookId",
    APIGetCity: "getCity",
    APIGetArea: "getArea",
    APIGetStore: "getStore",
    APISetStore: "setStore",
    APIVerifyPhoneCode: "verifyPhoneCode",
    APIRequestVerifyPhones: "requestVerifyPhones",
    APIUpdatePassword: "updatePassword",

    /// Menu Screens
    APIGetCategory: "getCategory",
    APIGetSubCategory: "getSubCategory",
    APIGetBanners: "banners",
    APIGetProductList: "getProduct",
    APIGetAddress: "address",
    APIAddAddress: "address",
    APIEditAddress: "address",
    APIDeleteAddress: "address",
    APISetOrder: "setOrder",
    APISetScheduleOrder: "setScheduleOrder",
    APIGetOrderTimeSession: "getOrderTimeSession",
    APISetOrderTimeSession: "setOrderTimeSession",
    APIUnsetOrderTimeSession: "unsetOrderTimeSession",
    APIGetUserBookedSession: "getUserBookedSession",
    APICheckCoupenCode: "checkCoupon",
    APISuggestProduct: "suggestProduct",
    APIContactUs: "contactUs",
    APIGetOrderHistory: "orderHistory",
    APIGetChat: "getChat",
    APISendMessage: "chatRequest",

    // General API
    APIGetAppSettingsAndRewards: "getAppSettingsAndRewards",
    APIGetStoreTimeZone: "getStoreTimeZone",

    /// Colors
    themeColor: "#CF2526",
    prodCategoryBGColor: "#EFEDE9",
    buttonDisableColor: "#939393",
    darkGrayBGColor: "#D4D4D4",
    themeGreenColor: "#3B7F38",
    themeYellowColor: "#FAC818",
    themeLightGreenColor: "#53B326",
    grayShadeColor55: "#555555",
    senderBGColor: "#DCF8C6",

    /// Font Family
    themeFont: "Ebrima",

    //Product Key
    kProductDiscountActive: "Active",
    kProductDiscountInactive: "Inactive",
    kProductDiscountType: "fixed",
    kProductDiscountPercentage: "percentage",

    //Product Key
    kProductDiscountActive: "Active",
    kProductDiscountInactive: "Inactive",
    kProductDiscountType: "fixed",
    kProductDiscountPercentage: "percentage",

    //Payment Mode Key
    kPaymentModeCash: "Cash",
    kPaymentModeCard: "Debit/Cradit Card",

    //Coupen Code Key
    kCoupenCodeDiscountActive: "Active",
    kCoupenCodeDiscountInactive: "Inactive",
    kCoupenCodeDiscountTypeFixed: "fixed",
    kCoupenCodeDiscountTypePercentage: "percentage",

    //Order History Key
    kOrderStatusInProcess: "IN PROCESS",
    kOrderStatusDeliveredStat: "DELIVERED",
    kOrderStatusCancel: "CANCEL",
    kOrderStatusPlaced: "Order Placed",
    kOrderStatusConfirmed: "Items Confirmed",
    kOrderStatusDispatched: "Items Dispatched",
    kOrderStatusDelivered: "Items Delivered",

    // Chat Key
    kMessageTypeRequest:"Request",
    kMessageTypeReplay:"Replay",

    actions: {
        /*
        Redux Action Keys Start
        Key formation:
            <API_Name> + <Request|Success|Failure>
        */

        // General API Call
        getAppSettingAndRewardPointRequest: "getAppSettingAndRewardPointRequest",
        getAppSettingAndRewardPointSuccess: "getAppSettingAndRewardPointSuccess",
        getAppSettingAndRewardPointFailure: "getAppSettingAndRewardPointFailure",

        getStoreTimezoneRequest: "getStoreTimezoneRequest",
        getStoreTimezoneSuccess: "getStoreTimezoneSuccess",
        getStoreTimezoneFailure: "getStoreTimezoneFailure",

        // Login Screen
        FBLoginRequest: "FBLoginRequest",
        loginRequest: "loginRequest",
        loginSuccess: "loginSuccess",
        loginFailure: "loginFailure",

        // Sign Up Screen
        signUpRequest: "signUpRequest",
        signUpSuccess: "signUpSuccess",
        signUpFailure: "signUpFailure",

        // Forgot Password Screen
        forgotPasswordRequest: "forgotPasswordRequest",
        forgotPasswordSuccess: "forgotPasswordSuccess",
        forgotPasswordFailure: "forgotPasswordFailure",

        // Verify Code Screen
        verifyPhoneRequest: "verifyPhoneRequest",
        verifyPhoneSuccess: "verifyPhoneSuccess",
        verifyPhoneFailure: "verifyPhoneFailure",
        verifyCodeRequest: "verifyCodeRequest",
        verifyCodeSuccess: "verifyCodeSuccess",
        verifyCodeFailure: "verifyCodeFailure",

        // Reset Password Screen
        resetPasswordRequest: "resetPasswordRequest",
        resetPasswordSuccess: "resetPasswordSuccess",
        resetPasswordFailure: "resetPasswordFailure",

        // City Screen
        getCityRequest: "getCityRequest",
        getCitySuccess: "getCitySuccess",
        getCityFailure: "getCityFailure",

        // Area Screen
        getAreaRequest: "getAreaRequest",
        getAreaSuccess: "getAreaSuccess",
        getAreaFailure: "getAreaFailure",

        // Store Screen
        getStoreRequest: "getStoreRequest",
        getStoreSuccess: "getStoreSuccess",
        getStoreFailure: "getStoreFailure",
        setStoreRequest: "setStoreRequest",
        setStoreSuccess: "setStoreSuccess",
        setStoreFailure: "setStoreFailure",

        // SelectTime Screen & SelectTimeSchedule Screen
        getOrderTimeSessionRequest: "getOrderTimeSessionRequest",
        getOrderTimeSessionSuccess: "getOrderTimeSessionSuccess",
        getOrderTimeSessionFailure: "getOrderTimeSessionFailure",

        getOrderTimeSessionChangeSuccessFlagRequest: "getOrderTimeSessionChangeSuccessFlagRequest",

        // SelectTimeSchedule Screen
        setOrderTimeSessionRequest: "setOrderTimeSessionRequest",
        setOrderTimeSessionSuccess: "setOrderTimeSessionSuccess",
        setOrderTimeSessionFailure: "setOrderTimeSessionFailure",

        setOrderTimeSessionChangeSuccessFlagRequest: "setOrderTimeSessionChangeSuccessFlagRequest",

        // Calendar Screen
        getUserBookedSessionRequest: "getUserBookedSessionRequest",
        getUserBookedSessionSuccess: "getUserBookedSessionSuccess",
        getUserBookedSessionFailure: "getUserBookedSessionFailure",

        unsetOrderTimeSessionRequest: "unsetOrderTimeSessionRequest",
        unsetOrderTimeSessionSuccess: "unsetOrderTimeSessionSuccess",
        unsetOrderTimeSessionFailure: "unsetOrderTimeSessionFailure",

        // Category Screen
        getCategoryRequest: "getCategoryRequest",
        getCategorySuccess: "getCategorySuccess",
        getCategoryFailure: "getCategoryFailure",
        getBannerRequest: "getBannerRequest",
        getBannerSuccess: "getBannerSuccess",
        getBannerFailure: "getBannerFailure",

        // SubCategory Screen
        getSubCategoryRequest: "getSubCategoryRequest",
        getSubCategorySuccess: "getSubCategorySuccess",
        getSubCategoryFailure: "getSubCategoryFailure",

        // Product Screen
        getProductRequest: "getProductRequest",
        getProductSuccess: "getProductSuccess",
        getProductFailure: "getProductFailure",

        // AddressList Screen
        getAddressRequest: "getAddressRequest",
        getAddressSuccess: "getAddressSuccess",
        getAddressFailure: "getAddressFailure",
        deleteAddressRequest: "deleteAddressRequest",
        deleteAddressSuccess: "deleteAddressSuccess",
        deleteAddressFailure: "deleteAddressFailure",

        // AddressList Screen
        addAddressRequest: "addAddressRequest",
        addAddressSuccess: "addAddressSuccess",
        addAddressFailure: "addAddressFailure",
        editAddressRequest: "editAddressRequest",
        editAddressSuccess: "editAddressSuccess",
        editAddressFailure: "editAddressFailure",

        // OrderMaster Screen
        addAddressRequest: "addAddressRequest",
        addAddressSuccess: "addAddressSuccess",
        addAddressFailure: "addAddressFailure",

        // Order Summary Screen
        checkCoupenCodeRequest: "checkCoupenCodeRequest",
        checkCoupenCodeSuccess: "checkCoupenCodeSuccess",
        checkCoupenCodeFailure: "checkCoupenCodeFailure",

        setOrderRequest: "setOrderRequest",
        setOrderSuccess: "setOrderSuccess",
        setOrderFailure: "setOrderFailure",

        setScheduleOrderRequest: "setScheduleOrderRequest",
        setScheduleOrderSuccess: "setScheduleOrderSuccess",
        setScheduleOrderFailure: "setScheduleOrderFailure",

        // OrderHistory Screen
        getOrderHistoryRequest: "getOrderHistoryRequest",
        getOrderHistorySuccess: "getOrderHistorySuccess",
        getOrderHistoryFailure: "getOrderHistoryFailure",

        // SuggestProduct Screen
        suggestProductRequest: "suggestProductRequest",
        suggestProductSuccess: "suggestProductSuccess",
        suggestProductFailure: "suggestProductFailure",

        // Contact Us
        contactUsRequest: "contactUsRequest",
        contactUsSuccess: "contactUsSuccess",
        contactUsFailure: "contactUsFailure",

        // Chat With Us
        getChatRequest: "getChatRequest",
        getChatSuccess: "getChatSuccess",
        getChatFailure: "getChatFailure",
        sendMessageRequest: "sendMessageRequest",
        sendMessageSuccess: "sendMessageSuccess",
        sendMessageFailure: "sendMessageFailure",
    },

    /*
        Redux Action Keys End
    */
};

/*
Network Utility API Call Template

    networkUtility.postRequest(constant.APIForgotPassword, forgotPasswordParameters).then(
        result => {
            // Hide Loading View
            this.setState({ visible: false });

            // HTTP Status Code => {result.status}
        },
        error => {
            // Hide Loading View
            this.setState({ visible: false });

            constants.debugLog("\nStatus Code: " + error.status);
            constants.debugLog("\nError Message: " + error.message);
            if (error.status != 500) {
                if (global.currentAppLanguage != "en" && error.data["messageAr"] != undefined) {
                    CommonUtilities.showAlert(error.data["messageAr"], false);
                } else {
                    CommonUtilities.showAlert(error.data["message"], false);
                }
            } else {
                constants.debugLog("Internal Server Error: " + error.data);
                CommonUtilities.showAlert("Opps! something went wrong");
            }
        }
    );

    // Loading View
    import Spinner from "react-native-loading-spinner-overlay";

    // Show Spinner in render()

    <Spinner
        visible={this.state.visible}
        cancelable={true}
        textStyle={{ color: "#FFF" }}
    />

*/
