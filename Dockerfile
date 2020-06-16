FROM nginx

LABEL name = 'react-web2'
LABEL version = 'v1.0'

COPY ./build /usr/share/nginx/html
COPY ./react-config.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

EXPOSE 86