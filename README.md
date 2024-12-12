# News API Documentation

## Base URL

- Development: `http://localhost:8080`
- Production: `https://signmaster-news-kji5w4ybbq-et.a.run.app`

## Database Configuration

PostgreSQL database credentials:

- Host: 34.50.71.68
- Database: main
- Username: admin
- Port: 5432

## Endpoints

### 1. Get All News

Retrieves a list of all news articles.

**Request:**

```
GET /news
```

**Response:**

```json
[
  {
    "id": 1,
    "title": "Example Title",
    "description": "Example Description",
    "image": "https://storage.googleapis.com/bucket-news-image/news-image/example.jpg"
  }
]
```

### 2. Get Specific News

Retrieves a specific news article by ID.

**Request:**

```
GET /news/{id}
```

**Parameters:**

- `id`: News article ID (number)

**Response:**

```json
{
  "id": 1,
  "title": "Example Title",
  "description": "Example Description",
  "image": "https://storage.googleapis.com/bucket-news-image/news-image/example.jpg"
}
```

### 3. Create News

Creates a new news article.

**Request:**

```
POST /news
```

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "title": "News Title",
  "description": "News Description",
  "image": "https://storage.googleapis.com/bucket-news-image/news-image/image.jpg"
}
```

**Response:**

```json
{
  "id": 1,
  "title": "News Title",
  "description": "News Description",
  "image": "https://storage.googleapis.com/bucket-news-image/news-image/image.jpg"
}
```

### 4. Update News

Updates an existing news article.

**Request:**

```
PUT /news/{id}
```

**Parameters:**

- `id`: News article ID to update

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "image": "https://storage.googleapis.com/bucket-news-image/news-image/updated.jpg"
}
```

### 5. Delete News

Deletes a specific news article.

**Request:**

```
DELETE /news/{id}
```

**Parameters:**

- `id`: News article ID to delete

## Example Usage

### Creating a News Article

```bash
curl -X POST http://localhost:3000/news \
-H "Content-Type: application/json" \
-d '{
    "title": "7 Pemuda Asal Indonesia Kembangkan Aplikasi Edukasi Bahasa Isyarat",
    "description": "Tujuh anak muda kreatif dari Indonesia meluncurkan aplikasi inovatif untuk mempelajari bahasa isyarat...",
    "image": "https://storage.googleapis.com/bucket-news-image/news-image/news%201.jpg"
}'
```

### Getting All News

```bash
curl http://localhost:3000/news
```

## Notes

- All requests that include a body should have the Content-Type header set to `application/json`
- The image URLs should point to your Google Cloud Storage bucket
- The server runs on port 3000 by default
