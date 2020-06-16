FROM nginx
LABEL name='react-web2'
LABEL version='1.0'
COPY ./build /usr/share/nginx/html
COPY ./react-config.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html

EXPOSE 80
EXPOSE 86