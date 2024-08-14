# Simple Load Balancer with Express and TypeScript

This project demonstrates a basic implementation of a load balancer using [Express.js](https://expressjs.com/) and TypeScript. The load balancer distributes incoming HTTP requests across multiple simulated backend servers in a round-robin fashion.

## Project Overview

### What We Are Doing

In this project, we create a simple load balancer using the Express.js framework. The load balancer listens for incoming HTTP requests and distributes them to a set of simulated backend servers (implemented as functions). Each request is forwarded to the next server in the list, cycling through them in a round-robin manner. This basic example demonstrates how load balancing can be implemented in a Node.js application.

### Technologies Used

- **Node.js**: A JavaScript runtime used for building scalable server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A typed superset of JavaScript that adds static types and other features to the language.

## Installation and Setup

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your machine. If not, download and install them from [nodejs.org](https://nodejs.org/).

### Steps to Run the Project

1. **Clone the Repository**:
   
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. npm install

3. npx tsc

4. node main.js
