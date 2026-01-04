# Mini E-Commerce (React)

A small e-commerce UI built using React to demonstrate component design, state management, filtering, and cart functionality.

## Features
- Product listing with 15+ items
- Search by name
- Filter by category
- Sort by price (low → high, high → low)
- Add to cart
- Remove from cart
- Update item quantity
- Stock validation
- Cart persistence using localStorage
- Combined filters (search + category + sort)
- Optimized rendering using memoization
- Live product data fetched from FakeStore API
- Category normalization and stock simulation
- Product images loaded from API


## Tech Stack
- React (Functional Components)
- Context API
- CSS Grid
- LocalStorage

## Architecture
- Cart state handled using Context
- Filters and search handled locally in App
- Products are memoized to avoid unnecessary re-renders
- Business logic separated using custom hooks
- External API data is normalized before rendering
- Categories mapped to UI filters
- Stock derived from product popularity (rating count)


## How to Run
```bash
npm install
npm start

Live Link - https://mini-ecommerce-react-pearl.vercel.app/ 
