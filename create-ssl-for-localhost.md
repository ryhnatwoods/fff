download openssl 安装文件
openssl genrsa -out server.key 1024

openssl req -new -key server.key -out server.csr

openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650

openssl req -new -x509 -keyout server.key -out server.crt -config openssl.cnf

refer to
https://ningyu1.github.io/site/post/51-ssl-cert
