
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  provider_type: Porvider_type
  provider_userId: number
  username: string
  avatar_url: string
  html_url: string
  created_at: Date
}

/**
 * Model HeroList
 * 
 */
export type HeroList = {
  id: number
  name: string
  img_url: string
  bio: string
  background_color: string
}

/**
 * Model PrizePool
 * 
 */
export type PrizePool = {
  id: number
  participant: string
  place: number
  prize: number
  date: Date
  region: Region_type
  annualEdition: Annual_edition
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Annual_edition: {
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
};

export type Annual_edition = (typeof Annual_edition)[keyof typeof Annual_edition]


export const Porvider_type: {
  github: 'github'
};

export type Porvider_type = (typeof Porvider_type)[keyof typeof Porvider_type]


export const Region_type: {
  WEU: 'WEU',
  EEU: 'EEU',
  CN: 'CN',
  NA: 'NA',
  SA: 'SA',
  SEA: 'SEA'
};

export type Region_type = (typeof Region_type)[keyof typeof Region_type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.heroList`: Exposes CRUD operations for the **HeroList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroLists
    * const heroLists = await prisma.heroList.findMany()
    * ```
    */
  get heroList(): Prisma.HeroListDelegate<GlobalReject>;

  /**
   * `prisma.prizePool`: Exposes CRUD operations for the **PrizePool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrizePools
    * const prizePools = await prisma.prizePool.findMany()
    * ```
    */
  get prizePool(): Prisma.PrizePoolDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    HeroList: 'HeroList',
    PrizePool: 'PrizePool'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    provider_userId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    provider_userId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    provider_type: Porvider_type | null
    provider_userId: number | null
    username: string | null
    avatar_url: string | null
    html_url: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    provider_type: Porvider_type | null
    provider_userId: number | null
    username: string | null
    avatar_url: string | null
    html_url: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    provider_type: number
    provider_userId: number
    username: number
    avatar_url: number
    html_url: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    provider_userId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    provider_userId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    provider_type?: true
    provider_userId?: true
    username?: true
    avatar_url?: true
    html_url?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    provider_type?: true
    provider_userId?: true
    username?: true
    avatar_url?: true
    html_url?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    provider_type?: true
    provider_userId?: true
    username?: true
    avatar_url?: true
    html_url?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    provider_type: Porvider_type
    provider_userId: number
    username: string
    avatar_url: string
    html_url: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    provider_type?: boolean
    provider_userId?: boolean
    username?: boolean
    avatar_url?: boolean
    html_url?: boolean
    created_at?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Model HeroList
   */


  export type AggregateHeroList = {
    _count: HeroListCountAggregateOutputType | null
    _avg: HeroListAvgAggregateOutputType | null
    _sum: HeroListSumAggregateOutputType | null
    _min: HeroListMinAggregateOutputType | null
    _max: HeroListMaxAggregateOutputType | null
  }

  export type HeroListAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroListSumAggregateOutputType = {
    id: number | null
  }

  export type HeroListMinAggregateOutputType = {
    id: number | null
    name: string | null
    img_url: string | null
    bio: string | null
    background_color: string | null
  }

  export type HeroListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    img_url: string | null
    bio: string | null
    background_color: string | null
  }

  export type HeroListCountAggregateOutputType = {
    id: number
    name: number
    img_url: number
    bio: number
    background_color: number
    _all: number
  }


  export type HeroListAvgAggregateInputType = {
    id?: true
  }

  export type HeroListSumAggregateInputType = {
    id?: true
  }

  export type HeroListMinAggregateInputType = {
    id?: true
    name?: true
    img_url?: true
    bio?: true
    background_color?: true
  }

  export type HeroListMaxAggregateInputType = {
    id?: true
    name?: true
    img_url?: true
    bio?: true
    background_color?: true
  }

  export type HeroListCountAggregateInputType = {
    id?: true
    name?: true
    img_url?: true
    bio?: true
    background_color?: true
    _all?: true
  }

  export type HeroListAggregateArgs = {
    /**
     * Filter which HeroList to aggregate.
     * 
    **/
    where?: HeroListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroLists to fetch.
     * 
    **/
    orderBy?: Enumerable<HeroListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: HeroListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroLists
    **/
    _count?: true | HeroListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroListMaxAggregateInputType
  }

  export type GetHeroListAggregateType<T extends HeroListAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroList[P]>
      : GetScalarType<T[P], AggregateHeroList[P]>
  }




  export type HeroListGroupByArgs = {
    where?: HeroListWhereInput
    orderBy?: Enumerable<HeroListOrderByWithAggregationInput>
    by: Array<HeroListScalarFieldEnum>
    having?: HeroListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroListCountAggregateInputType | true
    _avg?: HeroListAvgAggregateInputType
    _sum?: HeroListSumAggregateInputType
    _min?: HeroListMinAggregateInputType
    _max?: HeroListMaxAggregateInputType
  }


  export type HeroListGroupByOutputType = {
    id: number
    name: string
    img_url: string
    bio: string
    background_color: string
    _count: HeroListCountAggregateOutputType | null
    _avg: HeroListAvgAggregateOutputType | null
    _sum: HeroListSumAggregateOutputType | null
    _min: HeroListMinAggregateOutputType | null
    _max: HeroListMaxAggregateOutputType | null
  }

  type GetHeroListGroupByPayload<T extends HeroListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HeroListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroListGroupByOutputType[P]>
            : GetScalarType<T[P], HeroListGroupByOutputType[P]>
        }
      >
    >


  export type HeroListSelect = {
    id?: boolean
    name?: boolean
    img_url?: boolean
    bio?: boolean
    background_color?: boolean
  }


  export type HeroListGetPayload<S extends boolean | null | undefined | HeroListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HeroList :
    S extends undefined ? never :
    S extends { include: any } & (HeroListArgs | HeroListFindManyArgs)
    ? HeroList 
    : S extends { select: any } & (HeroListArgs | HeroListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HeroList ? HeroList[P] : never
  } 
      : HeroList


  type HeroListCountArgs = Merge<
    Omit<HeroListFindManyArgs, 'select' | 'include'> & {
      select?: HeroListCountAggregateInputType | true
    }
  >

  export interface HeroListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one HeroList that matches the filter.
     * @param {HeroListFindUniqueArgs} args - Arguments to find a HeroList
     * @example
     * // Get one HeroList
     * const heroList = await prisma.heroList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HeroListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HeroListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HeroList'> extends True ? Prisma__HeroListClient<HeroListGetPayload<T>> : Prisma__HeroListClient<HeroListGetPayload<T> | null, null>

    /**
     * Find one HeroList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HeroListFindUniqueOrThrowArgs} args - Arguments to find a HeroList
     * @example
     * // Get one HeroList
     * const heroList = await prisma.heroList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HeroListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HeroListFindUniqueOrThrowArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Find the first HeroList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListFindFirstArgs} args - Arguments to find a HeroList
     * @example
     * // Get one HeroList
     * const heroList = await prisma.heroList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HeroListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HeroListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HeroList'> extends True ? Prisma__HeroListClient<HeroListGetPayload<T>> : Prisma__HeroListClient<HeroListGetPayload<T> | null, null>

    /**
     * Find the first HeroList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListFindFirstOrThrowArgs} args - Arguments to find a HeroList
     * @example
     * // Get one HeroList
     * const heroList = await prisma.heroList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HeroListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HeroListFindFirstOrThrowArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Find zero or more HeroLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroLists
     * const heroLists = await prisma.heroList.findMany()
     * 
     * // Get first 10 HeroLists
     * const heroLists = await prisma.heroList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroListWithIdOnly = await prisma.heroList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HeroListFindManyArgs>(
      args?: SelectSubset<T, HeroListFindManyArgs>
    ): PrismaPromise<Array<HeroListGetPayload<T>>>

    /**
     * Create a HeroList.
     * @param {HeroListCreateArgs} args - Arguments to create a HeroList.
     * @example
     * // Create one HeroList
     * const HeroList = await prisma.heroList.create({
     *   data: {
     *     // ... data to create a HeroList
     *   }
     * })
     * 
    **/
    create<T extends HeroListCreateArgs>(
      args: SelectSubset<T, HeroListCreateArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Create many HeroLists.
     *     @param {HeroListCreateManyArgs} args - Arguments to create many HeroLists.
     *     @example
     *     // Create many HeroLists
     *     const heroList = await prisma.heroList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HeroListCreateManyArgs>(
      args?: SelectSubset<T, HeroListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a HeroList.
     * @param {HeroListDeleteArgs} args - Arguments to delete one HeroList.
     * @example
     * // Delete one HeroList
     * const HeroList = await prisma.heroList.delete({
     *   where: {
     *     // ... filter to delete one HeroList
     *   }
     * })
     * 
    **/
    delete<T extends HeroListDeleteArgs>(
      args: SelectSubset<T, HeroListDeleteArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Update one HeroList.
     * @param {HeroListUpdateArgs} args - Arguments to update one HeroList.
     * @example
     * // Update one HeroList
     * const heroList = await prisma.heroList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HeroListUpdateArgs>(
      args: SelectSubset<T, HeroListUpdateArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Delete zero or more HeroLists.
     * @param {HeroListDeleteManyArgs} args - Arguments to filter HeroLists to delete.
     * @example
     * // Delete a few HeroLists
     * const { count } = await prisma.heroList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HeroListDeleteManyArgs>(
      args?: SelectSubset<T, HeroListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroLists
     * const heroList = await prisma.heroList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HeroListUpdateManyArgs>(
      args: SelectSubset<T, HeroListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one HeroList.
     * @param {HeroListUpsertArgs} args - Arguments to update or create a HeroList.
     * @example
     * // Update or create a HeroList
     * const heroList = await prisma.heroList.upsert({
     *   create: {
     *     // ... data to create a HeroList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroList we want to update
     *   }
     * })
    **/
    upsert<T extends HeroListUpsertArgs>(
      args: SelectSubset<T, HeroListUpsertArgs>
    ): Prisma__HeroListClient<HeroListGetPayload<T>>

    /**
     * Count the number of HeroLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListCountArgs} args - Arguments to filter HeroLists to count.
     * @example
     * // Count the number of HeroLists
     * const count = await prisma.heroList.count({
     *   where: {
     *     // ... the filter for the HeroLists we want to count
     *   }
     * })
    **/
    count<T extends HeroListCountArgs>(
      args?: Subset<T, HeroListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroListAggregateArgs>(args: Subset<T, HeroListAggregateArgs>): PrismaPromise<GetHeroListAggregateType<T>>

    /**
     * Group by HeroList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroListGroupByArgs['orderBy'] }
        : { orderBy?: HeroListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroListGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HeroListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HeroList base type for findUnique actions
   */
  export type HeroListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter, which HeroList to fetch.
     * 
    **/
    where: HeroListWhereUniqueInput
  }

  /**
   * HeroList: findUnique
   */
  export interface HeroListFindUniqueArgs extends HeroListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeroList findUniqueOrThrow
   */
  export type HeroListFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter, which HeroList to fetch.
     * 
    **/
    where: HeroListWhereUniqueInput
  }


  /**
   * HeroList base type for findFirst actions
   */
  export type HeroListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter, which HeroList to fetch.
     * 
    **/
    where?: HeroListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroLists to fetch.
     * 
    **/
    orderBy?: Enumerable<HeroListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroLists.
     * 
    **/
    cursor?: HeroListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroLists.
     * 
    **/
    distinct?: Enumerable<HeroListScalarFieldEnum>
  }

  /**
   * HeroList: findFirst
   */
  export interface HeroListFindFirstArgs extends HeroListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeroList findFirstOrThrow
   */
  export type HeroListFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter, which HeroList to fetch.
     * 
    **/
    where?: HeroListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroLists to fetch.
     * 
    **/
    orderBy?: Enumerable<HeroListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroLists.
     * 
    **/
    cursor?: HeroListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroLists.
     * 
    **/
    distinct?: Enumerable<HeroListScalarFieldEnum>
  }


  /**
   * HeroList findMany
   */
  export type HeroListFindManyArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter, which HeroLists to fetch.
     * 
    **/
    where?: HeroListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroLists to fetch.
     * 
    **/
    orderBy?: Enumerable<HeroListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroLists.
     * 
    **/
    cursor?: HeroListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HeroListScalarFieldEnum>
  }


  /**
   * HeroList create
   */
  export type HeroListCreateArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * The data needed to create a HeroList.
     * 
    **/
    data: XOR<HeroListCreateInput, HeroListUncheckedCreateInput>
  }


  /**
   * HeroList createMany
   */
  export type HeroListCreateManyArgs = {
    /**
     * The data used to create many HeroLists.
     * 
    **/
    data: Enumerable<HeroListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HeroList update
   */
  export type HeroListUpdateArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * The data needed to update a HeroList.
     * 
    **/
    data: XOR<HeroListUpdateInput, HeroListUncheckedUpdateInput>
    /**
     * Choose, which HeroList to update.
     * 
    **/
    where: HeroListWhereUniqueInput
  }


  /**
   * HeroList updateMany
   */
  export type HeroListUpdateManyArgs = {
    /**
     * The data used to update HeroLists.
     * 
    **/
    data: XOR<HeroListUpdateManyMutationInput, HeroListUncheckedUpdateManyInput>
    /**
     * Filter which HeroLists to update
     * 
    **/
    where?: HeroListWhereInput
  }


  /**
   * HeroList upsert
   */
  export type HeroListUpsertArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * The filter to search for the HeroList to update in case it exists.
     * 
    **/
    where: HeroListWhereUniqueInput
    /**
     * In case the HeroList found by the `where` argument doesn't exist, create a new HeroList with this data.
     * 
    **/
    create: XOR<HeroListCreateInput, HeroListUncheckedCreateInput>
    /**
     * In case the HeroList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<HeroListUpdateInput, HeroListUncheckedUpdateInput>
  }


  /**
   * HeroList delete
   */
  export type HeroListDeleteArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
    /**
     * Filter which HeroList to delete.
     * 
    **/
    where: HeroListWhereUniqueInput
  }


  /**
   * HeroList deleteMany
   */
  export type HeroListDeleteManyArgs = {
    /**
     * Filter which HeroLists to delete
     * 
    **/
    where?: HeroListWhereInput
  }


  /**
   * HeroList without action
   */
  export type HeroListArgs = {
    /**
     * Select specific fields to fetch from the HeroList
     * 
    **/
    select?: HeroListSelect | null
  }



  /**
   * Model PrizePool
   */


  export type AggregatePrizePool = {
    _count: PrizePoolCountAggregateOutputType | null
    _avg: PrizePoolAvgAggregateOutputType | null
    _sum: PrizePoolSumAggregateOutputType | null
    _min: PrizePoolMinAggregateOutputType | null
    _max: PrizePoolMaxAggregateOutputType | null
  }

  export type PrizePoolAvgAggregateOutputType = {
    id: number | null
    place: number | null
    prize: number | null
  }

  export type PrizePoolSumAggregateOutputType = {
    id: number | null
    place: number | null
    prize: number | null
  }

  export type PrizePoolMinAggregateOutputType = {
    id: number | null
    participant: string | null
    place: number | null
    prize: number | null
    date: Date | null
    region: Region_type | null
    annualEdition: Annual_edition | null
  }

  export type PrizePoolMaxAggregateOutputType = {
    id: number | null
    participant: string | null
    place: number | null
    prize: number | null
    date: Date | null
    region: Region_type | null
    annualEdition: Annual_edition | null
  }

  export type PrizePoolCountAggregateOutputType = {
    id: number
    participant: number
    place: number
    prize: number
    date: number
    region: number
    annualEdition: number
    _all: number
  }


  export type PrizePoolAvgAggregateInputType = {
    id?: true
    place?: true
    prize?: true
  }

  export type PrizePoolSumAggregateInputType = {
    id?: true
    place?: true
    prize?: true
  }

  export type PrizePoolMinAggregateInputType = {
    id?: true
    participant?: true
    place?: true
    prize?: true
    date?: true
    region?: true
    annualEdition?: true
  }

  export type PrizePoolMaxAggregateInputType = {
    id?: true
    participant?: true
    place?: true
    prize?: true
    date?: true
    region?: true
    annualEdition?: true
  }

  export type PrizePoolCountAggregateInputType = {
    id?: true
    participant?: true
    place?: true
    prize?: true
    date?: true
    region?: true
    annualEdition?: true
    _all?: true
  }

  export type PrizePoolAggregateArgs = {
    /**
     * Filter which PrizePool to aggregate.
     * 
    **/
    where?: PrizePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrizePools to fetch.
     * 
    **/
    orderBy?: Enumerable<PrizePoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PrizePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrizePools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrizePools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrizePools
    **/
    _count?: true | PrizePoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrizePoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrizePoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrizePoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrizePoolMaxAggregateInputType
  }

  export type GetPrizePoolAggregateType<T extends PrizePoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePrizePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrizePool[P]>
      : GetScalarType<T[P], AggregatePrizePool[P]>
  }




  export type PrizePoolGroupByArgs = {
    where?: PrizePoolWhereInput
    orderBy?: Enumerable<PrizePoolOrderByWithAggregationInput>
    by: Array<PrizePoolScalarFieldEnum>
    having?: PrizePoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrizePoolCountAggregateInputType | true
    _avg?: PrizePoolAvgAggregateInputType
    _sum?: PrizePoolSumAggregateInputType
    _min?: PrizePoolMinAggregateInputType
    _max?: PrizePoolMaxAggregateInputType
  }


  export type PrizePoolGroupByOutputType = {
    id: number
    participant: string
    place: number
    prize: number
    date: Date
    region: Region_type
    annualEdition: Annual_edition
    _count: PrizePoolCountAggregateOutputType | null
    _avg: PrizePoolAvgAggregateOutputType | null
    _sum: PrizePoolSumAggregateOutputType | null
    _min: PrizePoolMinAggregateOutputType | null
    _max: PrizePoolMaxAggregateOutputType | null
  }

  type GetPrizePoolGroupByPayload<T extends PrizePoolGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PrizePoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrizePoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrizePoolGroupByOutputType[P]>
            : GetScalarType<T[P], PrizePoolGroupByOutputType[P]>
        }
      >
    >


  export type PrizePoolSelect = {
    id?: boolean
    participant?: boolean
    place?: boolean
    prize?: boolean
    date?: boolean
    region?: boolean
    annualEdition?: boolean
  }


  export type PrizePoolGetPayload<S extends boolean | null | undefined | PrizePoolArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PrizePool :
    S extends undefined ? never :
    S extends { include: any } & (PrizePoolArgs | PrizePoolFindManyArgs)
    ? PrizePool 
    : S extends { select: any } & (PrizePoolArgs | PrizePoolFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PrizePool ? PrizePool[P] : never
  } 
      : PrizePool


  type PrizePoolCountArgs = Merge<
    Omit<PrizePoolFindManyArgs, 'select' | 'include'> & {
      select?: PrizePoolCountAggregateInputType | true
    }
  >

  export interface PrizePoolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one PrizePool that matches the filter.
     * @param {PrizePoolFindUniqueArgs} args - Arguments to find a PrizePool
     * @example
     * // Get one PrizePool
     * const prizePool = await prisma.prizePool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrizePoolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrizePoolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PrizePool'> extends True ? Prisma__PrizePoolClient<PrizePoolGetPayload<T>> : Prisma__PrizePoolClient<PrizePoolGetPayload<T> | null, null>

    /**
     * Find one PrizePool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrizePoolFindUniqueOrThrowArgs} args - Arguments to find a PrizePool
     * @example
     * // Get one PrizePool
     * const prizePool = await prisma.prizePool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrizePoolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PrizePoolFindUniqueOrThrowArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Find the first PrizePool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolFindFirstArgs} args - Arguments to find a PrizePool
     * @example
     * // Get one PrizePool
     * const prizePool = await prisma.prizePool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrizePoolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrizePoolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PrizePool'> extends True ? Prisma__PrizePoolClient<PrizePoolGetPayload<T>> : Prisma__PrizePoolClient<PrizePoolGetPayload<T> | null, null>

    /**
     * Find the first PrizePool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolFindFirstOrThrowArgs} args - Arguments to find a PrizePool
     * @example
     * // Get one PrizePool
     * const prizePool = await prisma.prizePool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrizePoolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PrizePoolFindFirstOrThrowArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Find zero or more PrizePools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrizePools
     * const prizePools = await prisma.prizePool.findMany()
     * 
     * // Get first 10 PrizePools
     * const prizePools = await prisma.prizePool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prizePoolWithIdOnly = await prisma.prizePool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrizePoolFindManyArgs>(
      args?: SelectSubset<T, PrizePoolFindManyArgs>
    ): PrismaPromise<Array<PrizePoolGetPayload<T>>>

    /**
     * Create a PrizePool.
     * @param {PrizePoolCreateArgs} args - Arguments to create a PrizePool.
     * @example
     * // Create one PrizePool
     * const PrizePool = await prisma.prizePool.create({
     *   data: {
     *     // ... data to create a PrizePool
     *   }
     * })
     * 
    **/
    create<T extends PrizePoolCreateArgs>(
      args: SelectSubset<T, PrizePoolCreateArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Create many PrizePools.
     *     @param {PrizePoolCreateManyArgs} args - Arguments to create many PrizePools.
     *     @example
     *     // Create many PrizePools
     *     const prizePool = await prisma.prizePool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrizePoolCreateManyArgs>(
      args?: SelectSubset<T, PrizePoolCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PrizePool.
     * @param {PrizePoolDeleteArgs} args - Arguments to delete one PrizePool.
     * @example
     * // Delete one PrizePool
     * const PrizePool = await prisma.prizePool.delete({
     *   where: {
     *     // ... filter to delete one PrizePool
     *   }
     * })
     * 
    **/
    delete<T extends PrizePoolDeleteArgs>(
      args: SelectSubset<T, PrizePoolDeleteArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Update one PrizePool.
     * @param {PrizePoolUpdateArgs} args - Arguments to update one PrizePool.
     * @example
     * // Update one PrizePool
     * const prizePool = await prisma.prizePool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrizePoolUpdateArgs>(
      args: SelectSubset<T, PrizePoolUpdateArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Delete zero or more PrizePools.
     * @param {PrizePoolDeleteManyArgs} args - Arguments to filter PrizePools to delete.
     * @example
     * // Delete a few PrizePools
     * const { count } = await prisma.prizePool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrizePoolDeleteManyArgs>(
      args?: SelectSubset<T, PrizePoolDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrizePools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrizePools
     * const prizePool = await prisma.prizePool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrizePoolUpdateManyArgs>(
      args: SelectSubset<T, PrizePoolUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PrizePool.
     * @param {PrizePoolUpsertArgs} args - Arguments to update or create a PrizePool.
     * @example
     * // Update or create a PrizePool
     * const prizePool = await prisma.prizePool.upsert({
     *   create: {
     *     // ... data to create a PrizePool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrizePool we want to update
     *   }
     * })
    **/
    upsert<T extends PrizePoolUpsertArgs>(
      args: SelectSubset<T, PrizePoolUpsertArgs>
    ): Prisma__PrizePoolClient<PrizePoolGetPayload<T>>

    /**
     * Count the number of PrizePools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolCountArgs} args - Arguments to filter PrizePools to count.
     * @example
     * // Count the number of PrizePools
     * const count = await prisma.prizePool.count({
     *   where: {
     *     // ... the filter for the PrizePools we want to count
     *   }
     * })
    **/
    count<T extends PrizePoolCountArgs>(
      args?: Subset<T, PrizePoolCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrizePoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrizePool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrizePoolAggregateArgs>(args: Subset<T, PrizePoolAggregateArgs>): PrismaPromise<GetPrizePoolAggregateType<T>>

    /**
     * Group by PrizePool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizePoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrizePoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrizePoolGroupByArgs['orderBy'] }
        : { orderBy?: PrizePoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrizePoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizePoolGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PrizePool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrizePoolClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PrizePool base type for findUnique actions
   */
  export type PrizePoolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter, which PrizePool to fetch.
     * 
    **/
    where: PrizePoolWhereUniqueInput
  }

  /**
   * PrizePool: findUnique
   */
  export interface PrizePoolFindUniqueArgs extends PrizePoolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PrizePool findUniqueOrThrow
   */
  export type PrizePoolFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter, which PrizePool to fetch.
     * 
    **/
    where: PrizePoolWhereUniqueInput
  }


  /**
   * PrizePool base type for findFirst actions
   */
  export type PrizePoolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter, which PrizePool to fetch.
     * 
    **/
    where?: PrizePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrizePools to fetch.
     * 
    **/
    orderBy?: Enumerable<PrizePoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrizePools.
     * 
    **/
    cursor?: PrizePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrizePools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrizePools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrizePools.
     * 
    **/
    distinct?: Enumerable<PrizePoolScalarFieldEnum>
  }

  /**
   * PrizePool: findFirst
   */
  export interface PrizePoolFindFirstArgs extends PrizePoolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PrizePool findFirstOrThrow
   */
  export type PrizePoolFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter, which PrizePool to fetch.
     * 
    **/
    where?: PrizePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrizePools to fetch.
     * 
    **/
    orderBy?: Enumerable<PrizePoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrizePools.
     * 
    **/
    cursor?: PrizePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrizePools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrizePools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrizePools.
     * 
    **/
    distinct?: Enumerable<PrizePoolScalarFieldEnum>
  }


  /**
   * PrizePool findMany
   */
  export type PrizePoolFindManyArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter, which PrizePools to fetch.
     * 
    **/
    where?: PrizePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrizePools to fetch.
     * 
    **/
    orderBy?: Enumerable<PrizePoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrizePools.
     * 
    **/
    cursor?: PrizePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrizePools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrizePools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PrizePoolScalarFieldEnum>
  }


  /**
   * PrizePool create
   */
  export type PrizePoolCreateArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * The data needed to create a PrizePool.
     * 
    **/
    data: XOR<PrizePoolCreateInput, PrizePoolUncheckedCreateInput>
  }


  /**
   * PrizePool createMany
   */
  export type PrizePoolCreateManyArgs = {
    /**
     * The data used to create many PrizePools.
     * 
    **/
    data: Enumerable<PrizePoolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PrizePool update
   */
  export type PrizePoolUpdateArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * The data needed to update a PrizePool.
     * 
    **/
    data: XOR<PrizePoolUpdateInput, PrizePoolUncheckedUpdateInput>
    /**
     * Choose, which PrizePool to update.
     * 
    **/
    where: PrizePoolWhereUniqueInput
  }


  /**
   * PrizePool updateMany
   */
  export type PrizePoolUpdateManyArgs = {
    /**
     * The data used to update PrizePools.
     * 
    **/
    data: XOR<PrizePoolUpdateManyMutationInput, PrizePoolUncheckedUpdateManyInput>
    /**
     * Filter which PrizePools to update
     * 
    **/
    where?: PrizePoolWhereInput
  }


  /**
   * PrizePool upsert
   */
  export type PrizePoolUpsertArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * The filter to search for the PrizePool to update in case it exists.
     * 
    **/
    where: PrizePoolWhereUniqueInput
    /**
     * In case the PrizePool found by the `where` argument doesn't exist, create a new PrizePool with this data.
     * 
    **/
    create: XOR<PrizePoolCreateInput, PrizePoolUncheckedCreateInput>
    /**
     * In case the PrizePool was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PrizePoolUpdateInput, PrizePoolUncheckedUpdateInput>
  }


  /**
   * PrizePool delete
   */
  export type PrizePoolDeleteArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
    /**
     * Filter which PrizePool to delete.
     * 
    **/
    where: PrizePoolWhereUniqueInput
  }


  /**
   * PrizePool deleteMany
   */
  export type PrizePoolDeleteManyArgs = {
    /**
     * Filter which PrizePools to delete
     * 
    **/
    where?: PrizePoolWhereInput
  }


  /**
   * PrizePool without action
   */
  export type PrizePoolArgs = {
    /**
     * Select specific fields to fetch from the PrizePool
     * 
    **/
    select?: PrizePoolSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const HeroListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img_url: 'img_url',
    bio: 'bio',
    background_color: 'background_color'
  };

  export type HeroListScalarFieldEnum = (typeof HeroListScalarFieldEnum)[keyof typeof HeroListScalarFieldEnum]


  export const PrizePoolScalarFieldEnum: {
    id: 'id',
    participant: 'participant',
    place: 'place',
    prize: 'prize',
    date: 'date',
    region: 'region',
    annualEdition: 'annualEdition'
  };

  export type PrizePoolScalarFieldEnum = (typeof PrizePoolScalarFieldEnum)[keyof typeof PrizePoolScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    provider_type: 'provider_type',
    provider_userId: 'provider_userId',
    username: 'username',
    avatar_url: 'avatar_url',
    html_url: 'html_url',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    provider_type?: EnumPorvider_typeFilter | Porvider_type
    provider_userId?: IntFilter | number
    username?: StringFilter | string
    avatar_url?: StringFilter | string
    html_url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    provider_type?: SortOrder
    provider_userId?: SortOrder
    username?: SortOrder
    avatar_url?: SortOrder
    html_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    provider_userId?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    provider_type?: SortOrder
    provider_userId?: SortOrder
    username?: SortOrder
    avatar_url?: SortOrder
    html_url?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    provider_type?: EnumPorvider_typeWithAggregatesFilter | Porvider_type
    provider_userId?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    avatar_url?: StringWithAggregatesFilter | string
    html_url?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HeroListWhereInput = {
    AND?: Enumerable<HeroListWhereInput>
    OR?: Enumerable<HeroListWhereInput>
    NOT?: Enumerable<HeroListWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    img_url?: StringFilter | string
    bio?: StringFilter | string
    background_color?: StringFilter | string
  }

  export type HeroListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    bio?: SortOrder
    background_color?: SortOrder
  }

  export type HeroListWhereUniqueInput = {
    id?: number
  }

  export type HeroListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    bio?: SortOrder
    background_color?: SortOrder
    _count?: HeroListCountOrderByAggregateInput
    _avg?: HeroListAvgOrderByAggregateInput
    _max?: HeroListMaxOrderByAggregateInput
    _min?: HeroListMinOrderByAggregateInput
    _sum?: HeroListSumOrderByAggregateInput
  }

  export type HeroListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HeroListScalarWhereWithAggregatesInput>
    OR?: Enumerable<HeroListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HeroListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    img_url?: StringWithAggregatesFilter | string
    bio?: StringWithAggregatesFilter | string
    background_color?: StringWithAggregatesFilter | string
  }

  export type PrizePoolWhereInput = {
    AND?: Enumerable<PrizePoolWhereInput>
    OR?: Enumerable<PrizePoolWhereInput>
    NOT?: Enumerable<PrizePoolWhereInput>
    id?: IntFilter | number
    participant?: StringFilter | string
    place?: IntFilter | number
    prize?: IntFilter | number
    date?: DateTimeFilter | Date | string
    region?: EnumRegion_typeFilter | Region_type
    annualEdition?: EnumAnnual_editionFilter | Annual_edition
  }

  export type PrizePoolOrderByWithRelationInput = {
    id?: SortOrder
    participant?: SortOrder
    place?: SortOrder
    prize?: SortOrder
    date?: SortOrder
    region?: SortOrder
    annualEdition?: SortOrder
  }

  export type PrizePoolWhereUniqueInput = {
    id?: number
  }

  export type PrizePoolOrderByWithAggregationInput = {
    id?: SortOrder
    participant?: SortOrder
    place?: SortOrder
    prize?: SortOrder
    date?: SortOrder
    region?: SortOrder
    annualEdition?: SortOrder
    _count?: PrizePoolCountOrderByAggregateInput
    _avg?: PrizePoolAvgOrderByAggregateInput
    _max?: PrizePoolMaxOrderByAggregateInput
    _min?: PrizePoolMinOrderByAggregateInput
    _sum?: PrizePoolSumOrderByAggregateInput
  }

  export type PrizePoolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrizePoolScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrizePoolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrizePoolScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    participant?: StringWithAggregatesFilter | string
    place?: IntWithAggregatesFilter | number
    prize?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    region?: EnumRegion_typeWithAggregatesFilter | Region_type
    annualEdition?: EnumAnnual_editionWithAggregatesFilter | Annual_edition
  }

  export type UserCreateInput = {
    provider_type: Porvider_type
    provider_userId: number
    username: string
    avatar_url: string
    html_url: string
    created_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    provider_type: Porvider_type
    provider_userId: number
    username: string
    avatar_url: string
    html_url: string
    created_at?: Date | string
  }

  export type UserUpdateInput = {
    provider_type?: EnumPorvider_typeFieldUpdateOperationsInput | Porvider_type
    provider_userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_type?: EnumPorvider_typeFieldUpdateOperationsInput | Porvider_type
    provider_userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    provider_type: Porvider_type
    provider_userId: number
    username: string
    avatar_url: string
    html_url: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    provider_type?: EnumPorvider_typeFieldUpdateOperationsInput | Porvider_type
    provider_userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_type?: EnumPorvider_typeFieldUpdateOperationsInput | Porvider_type
    provider_userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    html_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroListCreateInput = {
    name: string
    img_url: string
    bio: string
    background_color: string
  }

  export type HeroListUncheckedCreateInput = {
    id?: number
    name: string
    img_url: string
    bio: string
    background_color: string
  }

  export type HeroListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
  }

  export type HeroListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
  }

  export type HeroListCreateManyInput = {
    id?: number
    name: string
    img_url: string
    bio: string
    background_color: string
  }

  export type HeroListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
  }

  export type HeroListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
  }

  export type PrizePoolCreateInput = {
    participant: string
    place: number
    prize: number
    date: Date | string
    region: Region_type
    annualEdition: Annual_edition
  }

  export type PrizePoolUncheckedCreateInput = {
    id?: number
    participant: string
    place: number
    prize: number
    date: Date | string
    region: Region_type
    annualEdition: Annual_edition
  }

  export type PrizePoolUpdateInput = {
    participant?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    prize?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegion_typeFieldUpdateOperationsInput | Region_type
    annualEdition?: EnumAnnual_editionFieldUpdateOperationsInput | Annual_edition
  }

  export type PrizePoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    prize?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegion_typeFieldUpdateOperationsInput | Region_type
    annualEdition?: EnumAnnual_editionFieldUpdateOperationsInput | Annual_edition
  }

  export type PrizePoolCreateManyInput = {
    id?: number
    participant: string
    place: number
    prize: number
    date: Date | string
    region: Region_type
    annualEdition: Annual_edition
  }

  export type PrizePoolUpdateManyMutationInput = {
    participant?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    prize?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegion_typeFieldUpdateOperationsInput | Region_type
    annualEdition?: EnumAnnual_editionFieldUpdateOperationsInput | Annual_edition
  }

  export type PrizePoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant?: StringFieldUpdateOperationsInput | string
    place?: IntFieldUpdateOperationsInput | number
    prize?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: EnumRegion_typeFieldUpdateOperationsInput | Region_type
    annualEdition?: EnumAnnual_editionFieldUpdateOperationsInput | Annual_edition
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumPorvider_typeFilter = {
    equals?: Porvider_type
    in?: Enumerable<Porvider_type>
    notIn?: Enumerable<Porvider_type>
    not?: NestedEnumPorvider_typeFilter | Porvider_type
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    provider_type?: SortOrder
    provider_userId?: SortOrder
    username?: SortOrder
    avatar_url?: SortOrder
    html_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    provider_userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    provider_type?: SortOrder
    provider_userId?: SortOrder
    username?: SortOrder
    avatar_url?: SortOrder
    html_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    provider_type?: SortOrder
    provider_userId?: SortOrder
    username?: SortOrder
    avatar_url?: SortOrder
    html_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    provider_userId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumPorvider_typeWithAggregatesFilter = {
    equals?: Porvider_type
    in?: Enumerable<Porvider_type>
    notIn?: Enumerable<Porvider_type>
    not?: NestedEnumPorvider_typeWithAggregatesFilter | Porvider_type
    _count?: NestedIntFilter
    _min?: NestedEnumPorvider_typeFilter
    _max?: NestedEnumPorvider_typeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type HeroListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    bio?: SortOrder
    background_color?: SortOrder
  }

  export type HeroListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    bio?: SortOrder
    background_color?: SortOrder
  }

  export type HeroListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img_url?: SortOrder
    bio?: SortOrder
    background_color?: SortOrder
  }

  export type HeroListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRegion_typeFilter = {
    equals?: Region_type
    in?: Enumerable<Region_type>
    notIn?: Enumerable<Region_type>
    not?: NestedEnumRegion_typeFilter | Region_type
  }

  export type EnumAnnual_editionFilter = {
    equals?: Annual_edition
    in?: Enumerable<Annual_edition>
    notIn?: Enumerable<Annual_edition>
    not?: NestedEnumAnnual_editionFilter | Annual_edition
  }

  export type PrizePoolCountOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    place?: SortOrder
    prize?: SortOrder
    date?: SortOrder
    region?: SortOrder
    annualEdition?: SortOrder
  }

  export type PrizePoolAvgOrderByAggregateInput = {
    id?: SortOrder
    place?: SortOrder
    prize?: SortOrder
  }

  export type PrizePoolMaxOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    place?: SortOrder
    prize?: SortOrder
    date?: SortOrder
    region?: SortOrder
    annualEdition?: SortOrder
  }

  export type PrizePoolMinOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    place?: SortOrder
    prize?: SortOrder
    date?: SortOrder
    region?: SortOrder
    annualEdition?: SortOrder
  }

  export type PrizePoolSumOrderByAggregateInput = {
    id?: SortOrder
    place?: SortOrder
    prize?: SortOrder
  }

  export type EnumRegion_typeWithAggregatesFilter = {
    equals?: Region_type
    in?: Enumerable<Region_type>
    notIn?: Enumerable<Region_type>
    not?: NestedEnumRegion_typeWithAggregatesFilter | Region_type
    _count?: NestedIntFilter
    _min?: NestedEnumRegion_typeFilter
    _max?: NestedEnumRegion_typeFilter
  }

  export type EnumAnnual_editionWithAggregatesFilter = {
    equals?: Annual_edition
    in?: Enumerable<Annual_edition>
    notIn?: Enumerable<Annual_edition>
    not?: NestedEnumAnnual_editionWithAggregatesFilter | Annual_edition
    _count?: NestedIntFilter
    _min?: NestedEnumAnnual_editionFilter
    _max?: NestedEnumAnnual_editionFilter
  }

  export type EnumPorvider_typeFieldUpdateOperationsInput = {
    set?: Porvider_type
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRegion_typeFieldUpdateOperationsInput = {
    set?: Region_type
  }

  export type EnumAnnual_editionFieldUpdateOperationsInput = {
    set?: Annual_edition
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumPorvider_typeFilter = {
    equals?: Porvider_type
    in?: Enumerable<Porvider_type>
    notIn?: Enumerable<Porvider_type>
    not?: NestedEnumPorvider_typeFilter | Porvider_type
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumPorvider_typeWithAggregatesFilter = {
    equals?: Porvider_type
    in?: Enumerable<Porvider_type>
    notIn?: Enumerable<Porvider_type>
    not?: NestedEnumPorvider_typeWithAggregatesFilter | Porvider_type
    _count?: NestedIntFilter
    _min?: NestedEnumPorvider_typeFilter
    _max?: NestedEnumPorvider_typeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRegion_typeFilter = {
    equals?: Region_type
    in?: Enumerable<Region_type>
    notIn?: Enumerable<Region_type>
    not?: NestedEnumRegion_typeFilter | Region_type
  }

  export type NestedEnumAnnual_editionFilter = {
    equals?: Annual_edition
    in?: Enumerable<Annual_edition>
    notIn?: Enumerable<Annual_edition>
    not?: NestedEnumAnnual_editionFilter | Annual_edition
  }

  export type NestedEnumRegion_typeWithAggregatesFilter = {
    equals?: Region_type
    in?: Enumerable<Region_type>
    notIn?: Enumerable<Region_type>
    not?: NestedEnumRegion_typeWithAggregatesFilter | Region_type
    _count?: NestedIntFilter
    _min?: NestedEnumRegion_typeFilter
    _max?: NestedEnumRegion_typeFilter
  }

  export type NestedEnumAnnual_editionWithAggregatesFilter = {
    equals?: Annual_edition
    in?: Enumerable<Annual_edition>
    notIn?: Enumerable<Annual_edition>
    not?: NestedEnumAnnual_editionWithAggregatesFilter | Annual_edition
    _count?: NestedIntFilter
    _min?: NestedEnumAnnual_editionFilter
    _max?: NestedEnumAnnual_editionFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}