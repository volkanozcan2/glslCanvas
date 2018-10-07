from busybox
copy . /www
expose 8000
cmd httpd -p 8000 -h /www;tail -f /dev/null
