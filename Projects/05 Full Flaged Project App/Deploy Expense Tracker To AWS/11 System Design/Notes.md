# System Design

---

## Section 1: Vertical Scaling vs Horizontal Scaling

### Vertical Scaling (Scaling Up)

* Definition: Adding more resources (CPU, RAM, storage) to a **single machine**.
* Example: Upgrading an EC2 instance from `t2.micro` to `m5.large`.
* Pros:

  * Simple to implement.
  * No code changes required.
* Cons:

  * Limited by hardware capacity.
  * Expensive at higher levels.
  * Possible downtime during upgrade.

### Horizontal Scaling (Scaling Out)

* Definition: Adding more **machines/servers** to distribute the load.
* Example: Deploying multiple servers behind a **load balancer**.
* Pros:

  * Practically unlimited scalability.
  * Provides fault tolerance and redundancy.
  * Works well with distributed and cloud-native systems.
* Cons:

  * More complex architecture.
  * Requires load balancing and distributed data handling.

### Preferred Approach

* **Horizontal Scaling** is generally preferred in large-scale, modern applications because:

  * It avoids hardware limitations.
  * Provides high availability.
  * Works well in cloud environments.

---

## What is a Database Antipattern?

An **antipattern** is a practice that seems convenient or logical in the short term but leads to **performance, scalability, or maintainability issues** in the long run.

Databases have many common antipatterns — **structural**, **query-related**, and **usage-related**. Below is a structured list.

---

### 1. Structural Antipatterns

#### a) One Big Table (God Table)

* All data stored in a single table.
* Leads to **complex queries, poor readability, and performance issues**.
* **Solution:** Normalize tables into smaller, meaningful entities.

#### b) Overusing Joins / Under-Normalization

* Having too many joins slows queries.
* On the other side, not normalizing enough creates **data duplication and inconsistency**.
* **Solution:** Apply proper normalization and denormalization balance.

#### c) Ignoring Data Relationships

* Not using foreign keys or constraints.
* Causes **data integrity problems**.
* **Solution:** Define relationships explicitly.

---

### 2. Indexing & Query Antipatterns

#### a) Improper Indexing

* No indexes → slow queries.
* Too many indexes → high memory usage, slow inserts.
* **Solution:** Add indexes based on actual query patterns.

#### b) Overfetching / Underfetching

* Queries fetching too much or too little data.
* **Solution:** Optimize queries, use `SELECT` only required columns, apply pagination.

---

### 3. Usage Antipatterns

#### a) Using Database as a Message Queue

* Developers insert jobs into a DB table and poll it like a queue.
* **Problems:**

  * Causes high latency and performance bottlenecks.
  * Scaling becomes very expensive.
  * Locks and deadlocks due to concurrency.
* **Solution:** Use real queue systems (RabbitMQ, Kafka, SQS, Redis Streams).

#### b) Storing Unnecessary or Unstructured Data

* Dumping logs, documents, or blobs in relational DB.
* **Problems:** Wastes storage, slows queries.
* **Solution:** Use NoSQL/Blob storage (MongoDB, S3, Elasticsearch).
#
### c) Overusing Stored Procedures for Business Logic

* All logic tied to DB.
* **Problems:** Hard to scale, harder to maintain across systems.
* **Solution:** Keep logic in application layer, use DB for persistence.

---

### Why Avoid Antipatterns?

* Reduce **performance**.
* Increase **scalability challenges**.
* Risk **data inconsistency**.
* Make **maintenance harder**.

---

### Consolidated Solutions

* Normalize tables properly → follow **normal forms**.
* Use **indexes wisely** → based on actual query needs.
* Apply **constraints and foreign keys**.
* Avoid DB misuse → don’t use it as a **queue, cache, or log store**.
* Use **replication, sharding, caching** for scaling.
* Choose **NoSQL / distributed databases** when necessary.

---

## Final Recap

* ✅ **God Table, improper indexing, ignoring relationships** → structural/query antipatterns.
* ✅ **DB as a queue** → usage antipattern.
* ❌ All should be avoided because they hurt **performance, scalability, and maintainability**.
* ✅ Solutions include **normalization, indexing, caching, sharding, and using proper tools (message queues, blob stores, NoSQL)**.

---

## Section 3: Microservices vs Monolith Architecture

### Monolith Architecture

* Definition: Application built as a **single unified unit**.
* Characteristics:

  * All features (auth, user management, payments, etc.) are part of one codebase.
  * Single deployment.
* Pros:

  * Simple to develop and deploy for small projects.
  * Easy debugging.
* Cons:

  * Difficult to scale specific features.
  * Harder to maintain as app grows.
  * Any change requires redeploying the entire system.

### Microservices Architecture

* Definition: Application built as a **collection of small, independent services**.
* Characteristics:

  * Each service handles a specific functionality (e.g., auth, payments).
  * Services communicate via APIs (REST, gRPC, messaging).
  * Independent deployment of services.
* Pros:

  * Easier to scale individual services.
  * Better fault isolation.
  * Flexible technology choices per service.
* Cons:

  * More complex to set up.
  * Requires handling inter-service communication.
  * Needs strong DevOps and monitoring setup.

### Difference Between Monolith and Microservices

| Feature         | Monolith               | Microservices                    |
| --------------- | ---------------------- | -------------------------------- |
| Structure       | Single codebase        | Multiple independent services    |
| Deployment      | One deployment unit    | Independent deployments          |
| Scalability     | Scale entire app       | Scale specific service           |
| Technology      | Single tech stack      | Different stacks per service     |
| Fault Tolerance | Entire system may fail | Only one service may fail        |
| Best For        | Small/medium apps      | Large, complex, distributed apps |

---

# Recap

* **Scaling:** Vertical = add power to one server, Horizontal = add more servers. Preferred = **Horizontal**.
* **Database Antipatterns:** Avoid God Tables, bad indexing, ignoring relationships. Solutions = normalization, indexing, sharding.
* **Architectures:** Monolith = single codebase, Microservices = multiple independent services. Microservices preferred for large-scale systems.

---

# End of Notes
