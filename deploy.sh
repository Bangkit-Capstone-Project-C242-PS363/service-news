podman build -t signmaster-service-news .
podman tag signmaster-service-news asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news
podman push asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news
gcloud run deploy signmaster-service-news --image=asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news --platform=managed --region=asia-southeast2 --allow-unauthenticated

url=$(gcloud run services describe signmaster-service-news --platform=managed --region=asia-southeast2 --format='value(status.url)')
url=${url#https://}
echo "setup $url to nginx"
gcloud compute ssh nginx -- -p 22 "sudo sed 's/proxy_pass.*\/news/proxy_pass https:\/\/$url\/news/g' -i /etc/nginx/conf.d/signlang.conf; sudo nginx -t; sudo systemctl reload nginx"
