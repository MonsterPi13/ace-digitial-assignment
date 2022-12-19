
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.HeroListScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  img_url: 'img_url',
  bio: 'bio',
  background_color: 'background_color'
});

exports.Prisma.PrizePoolScalarFieldEnum = makeEnum({
  id: 'id',
  participant: 'participant',
  place: 'place',
  prize: 'prize',
  date: 'date',
  region: 'region',
  annualEdition: 'annualEdition'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  provider_type: 'provider_type',
  provider_userId: 'provider_userId',
  username: 'username',
  avatar_url: 'avatar_url',
  html_url: 'html_url',
  created_at: 'created_at'
});
exports.Annual_edition = makeEnum({
  Ti11: 'Ti11',
  Ti10: 'Ti10',
  Ti9: 'Ti9',
  Ti8: 'Ti8',
  Ti7: 'Ti7',
  Ti6: 'Ti6',
  Ti5: 'Ti5',
  Ti4: 'Ti4',
  Ti3: 'Ti3',
  Ti2: 'Ti2',
  Ti1: 'Ti1'
});

exports.Porvider_type = makeEnum({
  github: 'github'
});

exports.Region_type = makeEnum({
  WEU: 'WEU',
  EEU: 'EEU',
  CN: 'CN',
  NA: 'NA',
  SA: 'SA',
  SEA: 'SEA'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  HeroList: 'HeroList',
  PrizePool: 'PrizePool'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/ruanpeng/playground/ace-digital-assignment/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.7.1",
  "engineVersion": "272861e07ab64f234d3ffc4094e32bd61775599c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dD0iLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBQb3J2aWRlcl90eXBlIHsKICBnaXRodWIKfQoKZW51bSBSZWdpb25fdHlwZSB7CiAgV0VVCiAgRUVVCiAgQ04KICBOQQogIFNBCiAgU0VBCn0KCmVudW0gQW5udWFsX2VkaXRpb24gewogIFRpMTEKICBUaTEwCiAgVGk5CiAgVGk4CiAgVGk3CiAgVGk2CiAgVGk1CiAgVGk0CiAgVGkzCiAgVGkyCiAgVGkxCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHByb3ZpZGVyX3R5cGUgICAgIFBvcnZpZGVyX3R5cGUKICBwcm92aWRlcl91c2VySWQgICBJbnQgICAgICAgICAgICAgQHVuaXF1ZQogIHVzZXJuYW1lICAgICAgICAgIFN0cmluZwogIGF2YXRhcl91cmwgICAgICAgIFN0cmluZwogIGh0bWxfdXJsICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkKfQoKbW9kZWwgSGVyb0xpc3QgewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgICAgICAgICBTdHJpbmcKICBpbWdfdXJsICAgICAgICAgICBTdHJpbmcKICBiaW8gICAgICAgICAgICAgICBTdHJpbmcKICBiYWNrZ3JvdW5kX2NvbG9yICBTdHJpbmcKfQoKbW9kZWwgUHJpemVQb29sIHsKICBpZCAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFydGljaXBhbnQgICAgICAgU3RyaW5nCiAgcGxhY2UgICAgICAgICAgICAgSW50CiAgcHJpemUgICAgICAgICAgICAgSW50CiAgZGF0ZSAgICAgICAgICAgICAgRGF0ZVRpbWUKICByZWdpb24gICAgICAgICAgICBSZWdpb25fdHlwZQogIGFubnVhbEVkaXRpb24gICAgIEFubnVhbF9lZGl0aW9uCn0KCg=='
config.inlineSchemaHash = '405bde7af9f4b3b751f1e7c99c0ead603e6c263e8c9d81ea7e54eac866c753b8'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

