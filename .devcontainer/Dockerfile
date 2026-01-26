FROM oven/bun:1

# Install needed packages and setup non-root user
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        curl \
        wget \
        unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN id -u bun >/dev/null 2>&1 || useradd -m bun

# Set up working directory
WORKDIR /workspaces/casino-games

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER bun
