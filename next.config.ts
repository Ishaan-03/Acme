import type { NextConfig } from 'next';

export  const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};