import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var _prisma: PrismaClient | undefined
}

export function getPrisma(): PrismaClient {
  if (!global._prisma) {
    global._prisma = new PrismaClient()
  }
  return global._prisma
}

// Convenience export — same pattern but as a getter
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    return (getPrisma() as unknown as Record<string | symbol, unknown>)[prop]
  },
})
