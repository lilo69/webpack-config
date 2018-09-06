# Use an official Python runtime as a parent image
FROM python:carbon

# Set the working directory to /app
WORKDIR /app

RUN yarn install

# Copy the current directory contents into the container at /app

# Install any needed packages specified in requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["yarn", "start"]