---
title: 包管理工具
---

## 教程

## 安装依赖

### 安装 包管理工具

::: code-tabs#shell

@tab pnpm

```bash
npm install -g pnpm
```

@tab yarn

```bash
npm install -g yarn
```

:::

### 安装项目依赖

::: code-tabs#shell

@tab pnpm

```bash
pnpm install
```

@tab yarn

```bash
yarn install
```

@tab npm

```bash
npm install
```

:::

### 安装指定包

```bash
pnpm add <package-name>
```

### 全局安装包

```bash
pnpm add -g <package-name>
```

## 更新依赖

### 更新所有依赖

```bash
pnpm update
```

### 更新指定依赖

```bash
pnpm update <package-name>
```

## 卸载依赖

### 卸载依赖

```bash
pnpm remove <package-name>
```

### 卸载全局依赖

```bash
pnpm remove -g <package-name>
```

## 运行脚本

### 运行 package.json 中的脚本

```bash
pnpm run <script-name>
```

### 简化运行脚本（无需 run）

```bash
pnpm list
```

## 查看依赖信息

### 查看某个包的信息

```bash
pnpm info <package-name>
```

### 查看过时的依赖

```bash
pnpm outdated
```

## 清理缓存

### 清理缓存

```bash
pnpm store prune
```

## 初始化项目

### 创建一个新的 package.json 文件

```bash
pnpm init
```

## 锁定文件

### 生成或更新 pnpm-lock.yaml 文件

```bash
pnpm install
```

### 检查锁文件是否一致

```bash
pnpm dlx pnpm-audit-fix
```
