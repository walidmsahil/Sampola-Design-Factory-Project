# 使用 Node.js 20 作为基础镜像
FROM node:20-alpine

# 创建并设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制 Next.js 源代码
COPY . .

# **执行构建命令**
RUN npm run build

# 暴露 Next.js 的端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "run", "start"]
