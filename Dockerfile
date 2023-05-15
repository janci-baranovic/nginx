FROM nginx:alpine
RUN echo 'location / {' >> /etc/nginx/nginx.conf && \
    echo '    try_files $uri $uri/ /index.html;' >> /etc/nginx/nginx.conf && \
    echo '}' >> /etc/nginx/nginx.conf
