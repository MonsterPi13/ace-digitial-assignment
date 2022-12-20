
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
} = require('./runtime/index')


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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

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
  PrizePool: 'PrizePool'
});

const compressedDMMF = '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'
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

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dD0iLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBQb3J2aWRlcl90eXBlIHsKICBnaXRodWIKfQoKZW51bSBSZWdpb25fdHlwZSB7CiAgV0VVCiAgRUVVCiAgQ04KICBOQQogIFNBCiAgU0VBCn0KCmVudW0gQW5udWFsX2VkaXRpb24gewogIFRpMTEKICBUaTEwCiAgVGk5CiAgVGk4CiAgVGk3CiAgVGk2CiAgVGk1CiAgVGk0CiAgVGkzCiAgVGkyCiAgVGkxCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHByb3ZpZGVyX3R5cGUgICAgIFBvcnZpZGVyX3R5cGUKICBwcm92aWRlcl91c2VySWQgICBJbnQgICAgICAgICAgICAgQHVuaXF1ZQogIHVzZXJuYW1lICAgICAgICAgIFN0cmluZwogIGF2YXRhcl91cmwgICAgICAgIFN0cmluZwogIGh0bWxfdXJsICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkKfQoKbW9kZWwgUHJpemVQb29sIHsKICBpZCAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFydGljaXBhbnQgICAgICAgU3RyaW5nCiAgcGxhY2UgICAgICAgICAgICAgSW50CiAgcHJpemUgICAgICAgICAgICAgSW50CiAgZGF0ZSAgICAgICAgICAgICAgRGF0ZVRpbWUKICByZWdpb24gICAgICAgICAgICBSZWdpb25fdHlwZQogIGFubnVhbEVkaXRpb24gICAgIEFubnVhbF9lZGl0aW9uCn0KCg=='
config.inlineSchemaHash = '93e2f0b44483dd21a6d1fd28758c2041036ba1ceddd88e72bdbe1001fbd86dc2'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

