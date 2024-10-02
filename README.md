# Design Factory Project
This project includes a Next.js frontend and a Strapi CMS backend. Please follow the steps below to run the project.

## Clone the project

First, clone the project from the GitHub repository to your local machine:

```bash
git clone https://github.com/HaoZhangSid/Design-factory.git
```

Please make sure your code is up to date with the latest master branch. After that, you can create your own branch. To do this, follow these steps:

Make sure you're on the master branch:

```bash
git checkout master
```
Pull the latest changes:

```bash
git pull origin master
```
Create a new branch:

```bash
git checkout -b your-branch-name

```

## Install dependencies

Frontend (Next.js)
Navigate to the frontend project directory and install the dependencies:
```bash
cd sampola
npm install
```

Backend (Strapi CMS)
Navigate to the backend project directory and install the dependencies:
```bash
cd my-strapi-project
npm install
```

## Start the development servers
Start the Strapi backend:
Navigate to the my-strapi-project directory and run the following command to start Strapi:
```
npm run develop
```
### The Strapi CMS admin panel will be running at:
http://localhost:1337/admin

Strapi login credentials:
Username: admin@gmail.com
Password: Qwer1234.


Start the Next.js frontend:
Navigate to the sampola directory and run the following command to start the Next.js frontend:
```
npm run dev
```

The frontend will be running at http://localhost:3000/.


You can focus on the website's style and layout first and temporarily store the content information on the frontend. Once the content is finalized, we will translate it into multiple languages and then store it in the CMS. Finally, the frontend will use an API to fetch the content from the CMS.

If you encounter any issues, feel free to ask in the group, or ChatGPT can help solve most of your questions.

Api_token:
41cdf1cb5df951c86532f62f1abd9954e1d304019e41499805497d0ed9b2d20cd3e3da4e33cfdcd30183e87ae9913a3f9181d114891d7808ec3fb51f76a2ed216cd41104f0199c2246f3b975384e5dfab9c94fd7a1d16467954eb188653591204f9872d9f0c65df48fd0d601257d4499806f78599281077b609b116871da6007