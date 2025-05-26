FROM node:22-bookworm

# Install needed packages and setup non-root user
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        curl \
        wget \
        unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.6.1

# Set up working directory
WORKDIR /workspaces/casino-games

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER node