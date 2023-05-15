FROM nginx:alpine
RUN sed -i '/server {/a \    location / {\n        try_files $uri $uri/ /index.html;\n    }' /etc/nginx/nginx.conf
