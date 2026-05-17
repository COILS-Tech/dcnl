# Instagram Integration Guide

## Current Status

✅ **Instagram Handle Updated**: `dominioncity_amsterdam`  
✅ **Instagram Section**: Already integrated on branch pages  
✅ **Followers**: 255 followers, 278 posts

## How the Instagram Carousel Works

The Instagram Carousel component on your site is designed to work with **Sanity CMS**. It displays curated posts and automatically ranks them by engagement (views and comments).

### Features:
- Displays your best-performing Instagram posts
- Automatic ranking by views and comments
- Shows images and videos
- Links to original posts on Instagram
- Responsive carousel with navigation

## Recent Instagram Posts (from @dominioncity_amsterdam)

Here are the latest post URLs I found on your Instagram page:

1. https://www.instagram.com/dominioncity_amsterdam/p/DYcnzPyDZdV/
2. https://www.instagram.com/dominioncity_amsterdam/p/DYbz1eHOksz/
3. https://www.instagram.com/dominioncity_amsterdam/p/DYSTwwfjVtJ/
4. https://www.instagram.com/dominioncity_amsterdam/p/DYQTpmsDABQ/
5. https://www.instagram.com/dominioncity_amsterdam/p/DYQTIIHDOUJ/
6. https://www.instagram.com/dominioncity_amsterdam/p/DX7sUXKDXUr/
7. https://www.instagram.com/dominioncity_amsterdam/p/DX7iN1_jl4W/
8. https://www.instagram.com/dominioncity_amsterdam/p/DX6NTG5jSgy/
9. https://www.instagram.com/dominioncity_amsterdam/p/DX42OmHjtph/
10. https://www.instagram.com/dominioncity_amsterdam/p/DXzda_BjbE0/
11. https://www.instagram.com/dominioncity_amsterdam/p/DXsITP-DoIJ/
12. https://www.instagram.com/dominioncity_amsterdam/p/DXsGysGjvXr/

## How to Add Instagram Posts to Your Site

### Option 1: Using Sanity Studio

1. **Access Sanity Studio**
   - Visit: `/studio` on your site (e.g., `localhost:3000/studio`)
   - Log in with your Sanity credentials

2. **Navigate to Branches**
   - Find "Amsterdam" or "Rotterdam" branch
   - Scroll to "Instagram Highlights" section

3. **Add a New Highlight**
   - Click "+ Add Item"
   - Fill in the following fields:
     - **Title**: Short description (e.g., "Sunday Worship", "Community Prayer")
     - **Instagram URL**: Full post URL from Instagram
     - **Media Type**: Choose "Image" or "Video"
     - **Thumbnail**: Upload the post image
     - **Caption**: Copy the post caption
     - **View Count**: Estimated views (for ranking)
     - **Comment Count**: Number of comments (for ranking)
     - **Posted At**: Date of the post

4. **Upload Thumbnail**
   - Download the image from Instagram
   - Upload to Sanity in the "Thumbnail" field

5. **Save and Publish**
   - Click "Publish" to make it live on your site

### Option 2: Direct Instagram Embed (Alternative)

If you want to show a live Instagram feed instead of curated posts, you can use Instagram's official embed widget. However, the current implementation is better for:
- Controlling which content appears
- Ranking posts by engagement
- Faster loading times
- Better mobile experience

## What Shows When No Posts Are Added

When no Instagram highlights are added in Sanity, the site shows:

> **"Curate top posts in Sanity"**
> 
> Add Instagram post URLs, thumbnails, views, and comments under this branch.
> The carousel will automatically rank the highest-performing photos and videos.
>
> [View @dominioncity_amsterdam →]

## Recommended Posts to Add

Choose your best posts that showcase:
1. ✨ **Worship moments** - Hands raised, singing, powerful moments
2. 👥 **Community** - Fellowship, gatherings, group photos
3. 📖 **Teaching** - Pastor preaching, Bible study
4. 🎉 **Special events** - Conferences, baptisms, celebrations
5. 💬 **Testimonies** - Life-changing stories
6. 📅 **Announcements** - Upcoming events, service times

Aim to add **5-10 of your best posts** to start.

## Tips for Best Results

- **High-quality images**: Choose clear, well-lit photos
- **Engagement**: Add posts with higher views/comments first
- **Variety**: Mix worship, community, and teaching content
- **Keep updated**: Refresh every month with new content
- **Mobile-first**: All thumbnails should look good on phones

## Support

For help with Sanity CMS:
- Sanity Docs: https://www.sanity.io/docs
- Sanity Studio: https://www.sanity.io/docs/sanity-studio

## Instagram Links

- **Amsterdam**: https://www.instagram.com/dominioncity_amsterdam/
- **View on Site**: Visit `/amsterdam` to see the Instagram section
