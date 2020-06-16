FROM nginx

LABEL name = 'react-web'
LABEL version = 'v1.0'

COPY ./dist /usr/share/nginx/html
COPY ./react-config.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

EXPOSE 86