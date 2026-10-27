# Branch Pages - Complete Update Summary

This document tracks all updates made to the Amsterdam and Rotterdam branch pages based on Facebook information and user requirements.

## ✅ Completed Updates

### 1. Service Times Updated
- **Amsterdam**: Every Sunday at **10:00 AM**
- **Rotterdam**: Every Sunday at **12:00 PM**

### 2. Map Locations Added
Both branch pages now feature interactive Google Maps embedded in the "Join Us" section showing:
- **Amsterdam**: Convention Center Novotel, Europaboulevard 10, 1083 AD Amsterdam, The Netherlands
- **Rotterdam**: Suite 5 (Upstairs), Dotterbloemstraat 25, 3053 JV Rotterdam, The Netherlands

### 3. Branch Photo Carousels Added
Created beautiful image carousels for both branches displaying:
- Worship services
- Community gatherings
- Prayer meetings
- Conferences
- Branch gatherings

**Features**:
- 5 photos per branch
- Previous/Next navigation buttons
- Thumbnail navigation bar
- Image counter
- Smooth transitions
- Responsive design

---

## Amsterdam Branch

### Contact Information
- **Meeting Address**: Convention Center Novotel, Europaboulevard 10, 1083 AD Amsterdam (from 1 November 2026; all Sunday meetings continue here).
- **Service Time**: Sunday at 10:00 AM
- **Email**: dominioncityamsterdam@gmail.com
- **Instagram**: @dominioncityamsterdam
- **Website**: dominioncity.cc
- **Facebook**: 242 followers

### Mission
"Welcome to official page of Dominioncity Amsterdam. We are a non-denominational church with a mission to empower and raise leaders who will transform the society."

### Available Photos
Located in `/public/branches/amsterdam/`:
- `worship-1.jpg` (97KB) - Worship service
- `community-1.jpg` (164KB) - Community gathering
- `prayer-1.jpg` (199KB) - Prayer meeting
- `conference-1.jpg` (109KB) - Conference
- `gathering-1.jpg` (195KB) - Group photo

---

## Rotterdam Branch

### Contact Information
- **Meeting Address**: Suite 5 (Upstairs), Dotterbloemstraat 25, 3053 JV Rotterdam, The Netherlands
- **Service Time**: Sunday at 12:00 PM
- **Email**: dominioncityrotterdam@gmail.com
- **Instagram**: (check Facebook page)
- **Website**: dominioncity.cc
- **Facebook**: 702 followers

### Tagline
"Raising leaders that transform society"

### Service Information
- **Hours**: Always open
- **Classes**: Online classes · In-person classes

### Available Photos
Located in `/public/branches/rotterdam/`:
- `worship-1.jpg` (56KB) - Worship service
- `community-1.jpg` (244KB) - Community gathering
- `prayer-1.jpg` (254KB) - Prayer meeting
- `conference-1.jpg` (125KB) - Conference
- `gathering-1.jpg` (143KB) - Group photo

---

## Technical Implementation

### Files Created
1. `/components/BranchPhotoCarousel.tsx` - Photo carousel component with navigation
2. `/public/branches/amsterdam/` - Amsterdam branch images (5 photos)
3. `/public/branches/rotterdam/` - Rotterdam branch images (5 photos)

### Files Modified
1. `/data/fallbackBranches.ts`
   - Updated service times (Amsterdam: 10:00 AM, Rotterdam: 12:00 PM)
   - Added full addresses
   - Added Google Maps embed URLs
   - Fixed Instagram handle for Amsterdam

2. `/app/[branch]/page.tsx`
   - Imported BranchPhotoCarousel component
   - Added photo arrays for both branches
   - Integrated carousel after Instagram section

### Components Used
- **ServiceTimes**: Displays service schedule and embedded Google Map
- **BranchPhotoCarousel**: Custom carousel showing 5 branch photos with navigation
- **InstagramCarousel**: Shows Instagram highlights from Sanity CMS

---

## Next Steps (Optional Enhancements)

### To Add Real Facebook/Instagram Photos:
1. Log into Facebook/Instagram
2. Visit the branch pages
3. Download actual photos from their galleries
4. Replace the stock images in `/public/branches/[branch-name]/`
5. Update the photo arrays in `app/[branch]/page.tsx` if you add/remove images

### Recommended Photo Types:
- Worship moments (hands raised, people singing)
- Pastor preaching
- Community fellowship
- Prayer gatherings
- Special events (conferences, baptisms)
- Branch team photos
- Testimonies

---

## Facebook Page Links

- **Amsterdam**: https://www.facebook.com/people/Dominion-City-Amsterdam/61564111511150/
- **Rotterdam**: https://www.facebook.com/people/DC-Rotterdam-The-Netherlands/100090486544598/

---

## Summary

✅ Service times updated (Amsterdam 10:00 AM, Rotterdam 12:00 PM)  
✅ Google Maps embedded on both pages  
✅ Photo carousels added with 5 images each  
✅ Contact information updated  
✅ Addresses added to "Join Us" section  
✅ All pages responsive and mobile-friendly
