/*server {
  listen 80;
  server_name meowmoew.com;

  location / {
      proxy_pass https://219.89.9.210:3000/;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
  }
}*/
