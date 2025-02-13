import React from 'react'
import App from '../App'
import Nopage from './Nopage'
import Building from './Building'
import MobileViews from './MoblieViews'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import AddProps from './AddProps'
import MyProperty from './MyProperty'
import EditForm from './EditForm'
import Details from './Details'
import PricingPlans from './PricingPlans'
import AddPlan from './AddPlan'
import About from './About'
import RefundPolicy from './RefundPolicy'
import PrivacyPolicy from './PrivacyPolicy'
import InterestStatus from './InterestStatus'
import NewProperty from './NewProperty'
import BusinessOpportunity from './BusinessOpportunity'
import OurSupport from './OurSupport'
import AboutMobile from './AboutMobile'
import RefundMobile from './RefundMobile'
import { PhoneNumberProvider } from '../context/PhoneNumberContext'; // Import the context provider
import MyProfile from './MyProfile'
// import CardsDemo from './Detail/InterestOwner'
import MyPlan from './MyPlan'
import ContactedBuyers from './ContactedBuyers'
import LeadsCenter from './LeadsCenter'
import MatchedBuyers from './MatchedBuyers'
import MyCalledList from './MyCalledList'
import MyInterestBuyers from './MyInterestBuyers'
import MyPhotoRequest from './MyPhotoRequest'
import MyOffers from './MyOffers'
import MyLastViewProperty from './MyLastViewProperty'
import MySentInterest from './MySentInterest'
import MyShortlistedProperty from './MyShortlistedProperty'
import ShortListedBuyers from './ShortListedBuyers'
import RecivedOwnerInterest from './RecivedOwnerInterest'
import PhotoRequestSent from './PhotoRequestSent'
import OfferFromBuyer from './OfferFromBuyer'
import ViewedBuyers from './ViewedBuyers'
import BuyerLists from './BuyerLists'
import Owner from './Owner'
import InterestBuyer from './Detail/InterestOwner'
import BuyerInterest from './Detail/BuyerInterest'
import NeedHelpOwner from './Detail/NeedHelpOwner'
import NeedHelpBuyer from './Detail/NeedHelpBuyer'
import ContactBuyer from './Detail/ContactBuyer'
import ContactOwner from './Detail/ContactOwner'
import ReportPropertyOwner from './Detail/ReportPropertyOwner'
import ReportPropertyBuyer from './Detail/ReportPropertyBuyer'
import SoldOutOwner from './Detail/SoldOutOwner'
import SoldOutBuyer from './Detail/SoldOutBuyer'
import FavoriteOwner from './Detail/FavoriteOwner'
import FavoriteBuyer from './Detail/FavoriteBuyer'
import InterestOwner from './Detail/InterestOwner'



export default function RouterPage() {

  
  return (
    // <PhoneNumberProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/mobileviews" element={<MobileViews />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Construction" element={<Building />} />
    <Route path="*" element={<Nopage />} />
    <Route path='/my' element={<MyProperty />} />
        <Route path='/new-property' element={<NewProperty />} />
        <Route path='/add-form' element={<AddProps/>}/>
        <Route path='/edit-form' element={<EditForm />} />
        <Route path='/detail' element={<Details />} />
        <Route path='/plans' element={< PricingPlans/>} />
        <Route path='/add-plan' element={< AddPlan/>} />
        <Route path='/about' element={<About />} />
        <Route path='/refund-policy' element={< RefundPolicy/>} />
        <Route path='/about-mobile' element={<AboutMobile />} />
        <Route path='/refund-mobile' element={< RefundMobile/>} />
        <Route path='/privacy-policy' element={< PrivacyPolicy/>} />
        <Route path='/interest' element={< InterestStatus/>} />
        <Route path='/business' element={< BusinessOpportunity />} />
        <Route path='/our-support' element={< OurSupport  />} />
        <Route path='/my-profile' element={< MyProfile  />} />
        <Route path='/my-plan' element={< MyPlan  />} />

        <Route path='/contact-buyer' element={< ContactedBuyers/>} />
        <Route path='/leads' element={< LeadsCenter />} />
        <Route path='/matched-buyers' element={< MatchedBuyers  />} />
        <Route path='/my-call' element={< MyCalledList  />} />
        <Route path='/my-interest-buyer' element={< MyInterestBuyers/>} />
        <Route path='/my-photo' element={< MyPhotoRequest />} />
        <Route path='/my-offers' element={< MyOffers  />} />
        <Route path='/my-last-property' element={< MyLastViewProperty/>} />
        <Route path='/my-sent-interest' element={< MySentInterest />} />
        <Route path='/my-short-property' element={< MyShortlistedProperty/>} />
        <Route path='/my-sent-interest' element={< MySentInterest />} />
        <Route path='/shortlist-buyer' element={< ShortListedBuyers/>} />
        <Route path='/recive-owner-interest' element={< RecivedOwnerInterest />} />
        <Route path='/photo-request-send' element={< PhotoRequestSent/>} />
        <Route path='/offer-from-buyer' element={< OfferFromBuyer />} />
        <Route path='/view-buyers' element={< ViewedBuyers/>} />
        <Route path='/buyer-lists' element={< BuyerLists/>} />
        <Route path='/owner' element={< Owner/>} />

        <Route path='/interest-owner/:phoneNumber' element={< InterestOwner/>} />
        <Route path='/interest-buyer/:phoneNumber' element={< BuyerInterest/>} />
        <Route path='/help-owner/:phoneNumber' element={< NeedHelpOwner/>} />
        <Route path='/help-buyer/:phoneNumber' element={< NeedHelpBuyer/>} />
        <Route path='/contact-owner/:phoneNumber' element={< ContactOwner/>} />
        <Route path='/contact-buyer/:phoneNumber' element={<ContactBuyer/>} />
        <Route path='/report-property-owner/:phoneNumber' element={< ReportPropertyOwner/>} />
        <Route path='/report-property-buyer/:phoneNumber' element={< ReportPropertyBuyer/>} />
        <Route path='/soldout-owner/:phoneNumber' element={< SoldOutOwner/>} />
        <Route path='/soldout-buyer/:phoneNumber' element={<SoldOutBuyer/>} />
        <Route path='/favorite-owner/:phoneNumber' element={< FavoriteOwner/>} />
        <Route path='/favorite-buyer/:phoneNumber' element={<FavoriteBuyer/>} />


    </Routes>
    </BrowserRouter> 
    // </PhoneNumberProvider> 
  )
}
