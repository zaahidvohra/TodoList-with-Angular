# Stage 1: Build React app
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/todo-list /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
