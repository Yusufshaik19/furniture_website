
# Furniture Website Deployment using Jenkins, Docker, and AWS EC2

## Project Overview
Static furniture business website deployed on an AWS EC2 instance using Jenkins, Docker, and Nginx with CI/CD integration.

## Stack Used
- HTML/CSS
- Jenkins (CI/CD automation)
- Docker & Nginx (Containerized static site)
- GitHub (code repo)
- AWS EC2 (hosting)

## Deployment Pipeline
1. Push code to GitHub
2. Jenkins pulls code on build trigger
3. Jenkins builds Docker image
4. Docker runs container to serve website

##Project structure
furniture_website/
├── frontend/                         # All frontend website files
│   ├── shop.html                   # Main homepage
│   ├── styles/                      # (optional) CSS styles
│   ├── images/                      # Images used across the site
│   │   ├── steel-almirah.png
│   │   └── office-chair.jpg
│   └── scripts/                     # (optional) JS files
│
├── backend/                         # Reserved for future backend APIs
│   └── (empty or placeholder for now)
│
├── Dockerfile                       # Builds Docker image with Nginx to serve frontend
├── README.md                        # Project overview and instructions
├── package.json                     # (optional) if you used any Node.js tooling
├── node_modules/                    # (if applicable) from npm install
└── .gitignore                       # Files/folders to ignore in Git


#docker file

# Use official lightweight Nginx image
FROM nginx:alpine

# Remove the default Nginx HTML content
RUN rm -rf /usr/share/nginx/html/*

# Copy custom static website files from the frontend folder into Nginx's root
COPY frontend/ /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
