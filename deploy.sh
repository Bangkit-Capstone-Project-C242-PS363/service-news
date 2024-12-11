podman build -t signmaster-service-news .
podman tag signmaster-service-news asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news
podman push asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news
gcloud run deploy signmaster-service-news --image=asia-southeast2-docker.pkg.dev/capstone-project-c242-ps363/backend/signmaster-service-news --platform=managed --region=asia-southeast2 --allow-unauthenticated

gcloud run services describe signmaster-service-news --platform=managed --region=asia-southeast2 --format='value(status.url)'
