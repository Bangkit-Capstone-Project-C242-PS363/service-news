FROM oven/bun
WORKDIR /usr/src/app
COPY . .

# Install dependencies
RUN bun install; bun nest build
EXPOSE 8080
ENTRYPOINT [ "bun", "nest", "start" ]
