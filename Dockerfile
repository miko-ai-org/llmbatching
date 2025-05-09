FROM node:20

# Set working directory
WORKDIR /app

# Copy root package.json and install root deps (concurrently)
COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate --schema=prisma/schema.prisma

# Expose ports
EXPOSE 9487

# Start both frontend and backend concurrently
CMD ["npm", "run", "start"]
