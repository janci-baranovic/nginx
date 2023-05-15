FROM nginx:alpine
RUN sed -i 's@^\(\s*\)location\s*/\s*{@\1location / {\n\1    try_files $uri $uri/ /index.html;\n\1}@' /etc/nginx/nginx.conf
