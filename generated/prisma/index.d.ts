
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model openai_batch_tasks
 * 
 */
export type openai_batch_tasks = $Result.DefaultSelection<Prisma.$openai_batch_tasksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Openai_batch_tasks
 * const openai_batch_tasks = await prisma.openai_batch_tasks.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Openai_batch_tasks
   * const openai_batch_tasks = await prisma.openai_batch_tasks.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.openai_batch_tasks`: Exposes CRUD operations for the **openai_batch_tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Openai_batch_tasks
    * const openai_batch_tasks = await prisma.openai_batch_tasks.findMany()
    * ```
    */
  get openai_batch_tasks(): Prisma.openai_batch_tasksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    openai_batch_tasks: 'openai_batch_tasks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "openai_batch_tasks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      openai_batch_tasks: {
        payload: Prisma.$openai_batch_tasksPayload<ExtArgs>
        fields: Prisma.openai_batch_tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.openai_batch_tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.openai_batch_tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          findFirst: {
            args: Prisma.openai_batch_tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.openai_batch_tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          findMany: {
            args: Prisma.openai_batch_tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>[]
          }
          create: {
            args: Prisma.openai_batch_tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          createMany: {
            args: Prisma.openai_batch_tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.openai_batch_tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>[]
          }
          delete: {
            args: Prisma.openai_batch_tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          update: {
            args: Prisma.openai_batch_tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          deleteMany: {
            args: Prisma.openai_batch_tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.openai_batch_tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.openai_batch_tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>[]
          }
          upsert: {
            args: Prisma.openai_batch_tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openai_batch_tasksPayload>
          }
          aggregate: {
            args: Prisma.Openai_batch_tasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpenai_batch_tasks>
          }
          groupBy: {
            args: Prisma.openai_batch_tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Openai_batch_tasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.openai_batch_tasksCountArgs<ExtArgs>
            result: $Utils.Optional<Openai_batch_tasksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    openai_batch_tasks?: openai_batch_tasksOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
   * Model openai_batch_tasks
   */

  export type AggregateOpenai_batch_tasks = {
    _count: Openai_batch_tasksCountAggregateOutputType | null
    _avg: Openai_batch_tasksAvgAggregateOutputType | null
    _sum: Openai_batch_tasksSumAggregateOutputType | null
    _min: Openai_batch_tasksMinAggregateOutputType | null
    _max: Openai_batch_tasksMaxAggregateOutputType | null
  }

  export type Openai_batch_tasksAvgAggregateOutputType = {
    time_last_updated: number | null
    time_created: number | null
  }

  export type Openai_batch_tasksSumAggregateOutputType = {
    time_last_updated: bigint | null
    time_created: bigint | null
  }

  export type Openai_batch_tasksMinAggregateOutputType = {
    id: string | null
    original_base_url: string | null
    custom_id: string | null
    openai_file_id: string | null
    file_uploaded: boolean | null
    openai_batch_id: string | null
    status: string | null
    time_last_updated: bigint | null
    time_created: bigint | null
    output_file_id: string | null
    error_file_id: string | null
  }

  export type Openai_batch_tasksMaxAggregateOutputType = {
    id: string | null
    original_base_url: string | null
    custom_id: string | null
    openai_file_id: string | null
    file_uploaded: boolean | null
    openai_batch_id: string | null
    status: string | null
    time_last_updated: bigint | null
    time_created: bigint | null
    output_file_id: string | null
    error_file_id: string | null
  }

  export type Openai_batch_tasksCountAggregateOutputType = {
    id: number
    original_base_url: number
    custom_id: number
    json_data: number
    openai_file_id: number
    file_uploaded: number
    openai_batch_id: number
    status: number
    result: number
    time_last_updated: number
    time_created: number
    output_file_id: number
    error_file_id: number
    _all: number
  }


  export type Openai_batch_tasksAvgAggregateInputType = {
    time_last_updated?: true
    time_created?: true
  }

  export type Openai_batch_tasksSumAggregateInputType = {
    time_last_updated?: true
    time_created?: true
  }

  export type Openai_batch_tasksMinAggregateInputType = {
    id?: true
    original_base_url?: true
    custom_id?: true
    openai_file_id?: true
    file_uploaded?: true
    openai_batch_id?: true
    status?: true
    time_last_updated?: true
    time_created?: true
    output_file_id?: true
    error_file_id?: true
  }

  export type Openai_batch_tasksMaxAggregateInputType = {
    id?: true
    original_base_url?: true
    custom_id?: true
    openai_file_id?: true
    file_uploaded?: true
    openai_batch_id?: true
    status?: true
    time_last_updated?: true
    time_created?: true
    output_file_id?: true
    error_file_id?: true
  }

  export type Openai_batch_tasksCountAggregateInputType = {
    id?: true
    original_base_url?: true
    custom_id?: true
    json_data?: true
    openai_file_id?: true
    file_uploaded?: true
    openai_batch_id?: true
    status?: true
    result?: true
    time_last_updated?: true
    time_created?: true
    output_file_id?: true
    error_file_id?: true
    _all?: true
  }

  export type Openai_batch_tasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which openai_batch_tasks to aggregate.
     */
    where?: openai_batch_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openai_batch_tasks to fetch.
     */
    orderBy?: openai_batch_tasksOrderByWithRelationInput | openai_batch_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: openai_batch_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openai_batch_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openai_batch_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned openai_batch_tasks
    **/
    _count?: true | Openai_batch_tasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Openai_batch_tasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Openai_batch_tasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Openai_batch_tasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Openai_batch_tasksMaxAggregateInputType
  }

  export type GetOpenai_batch_tasksAggregateType<T extends Openai_batch_tasksAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenai_batch_tasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenai_batch_tasks[P]>
      : GetScalarType<T[P], AggregateOpenai_batch_tasks[P]>
  }




  export type openai_batch_tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: openai_batch_tasksWhereInput
    orderBy?: openai_batch_tasksOrderByWithAggregationInput | openai_batch_tasksOrderByWithAggregationInput[]
    by: Openai_batch_tasksScalarFieldEnum[] | Openai_batch_tasksScalarFieldEnum
    having?: openai_batch_tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Openai_batch_tasksCountAggregateInputType | true
    _avg?: Openai_batch_tasksAvgAggregateInputType
    _sum?: Openai_batch_tasksSumAggregateInputType
    _min?: Openai_batch_tasksMinAggregateInputType
    _max?: Openai_batch_tasksMaxAggregateInputType
  }

  export type Openai_batch_tasksGroupByOutputType = {
    id: string
    original_base_url: string
    custom_id: string
    json_data: JsonValue
    openai_file_id: string | null
    file_uploaded: boolean
    openai_batch_id: string | null
    status: string
    result: JsonValue | null
    time_last_updated: bigint
    time_created: bigint
    output_file_id: string | null
    error_file_id: string | null
    _count: Openai_batch_tasksCountAggregateOutputType | null
    _avg: Openai_batch_tasksAvgAggregateOutputType | null
    _sum: Openai_batch_tasksSumAggregateOutputType | null
    _min: Openai_batch_tasksMinAggregateOutputType | null
    _max: Openai_batch_tasksMaxAggregateOutputType | null
  }

  type GetOpenai_batch_tasksGroupByPayload<T extends openai_batch_tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Openai_batch_tasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Openai_batch_tasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Openai_batch_tasksGroupByOutputType[P]>
            : GetScalarType<T[P], Openai_batch_tasksGroupByOutputType[P]>
        }
      >
    >


  export type openai_batch_tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_base_url?: boolean
    custom_id?: boolean
    json_data?: boolean
    openai_file_id?: boolean
    file_uploaded?: boolean
    openai_batch_id?: boolean
    status?: boolean
    result?: boolean
    time_last_updated?: boolean
    time_created?: boolean
    output_file_id?: boolean
    error_file_id?: boolean
  }, ExtArgs["result"]["openai_batch_tasks"]>

  export type openai_batch_tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_base_url?: boolean
    custom_id?: boolean
    json_data?: boolean
    openai_file_id?: boolean
    file_uploaded?: boolean
    openai_batch_id?: boolean
    status?: boolean
    result?: boolean
    time_last_updated?: boolean
    time_created?: boolean
    output_file_id?: boolean
    error_file_id?: boolean
  }, ExtArgs["result"]["openai_batch_tasks"]>

  export type openai_batch_tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_base_url?: boolean
    custom_id?: boolean
    json_data?: boolean
    openai_file_id?: boolean
    file_uploaded?: boolean
    openai_batch_id?: boolean
    status?: boolean
    result?: boolean
    time_last_updated?: boolean
    time_created?: boolean
    output_file_id?: boolean
    error_file_id?: boolean
  }, ExtArgs["result"]["openai_batch_tasks"]>

  export type openai_batch_tasksSelectScalar = {
    id?: boolean
    original_base_url?: boolean
    custom_id?: boolean
    json_data?: boolean
    openai_file_id?: boolean
    file_uploaded?: boolean
    openai_batch_id?: boolean
    status?: boolean
    result?: boolean
    time_last_updated?: boolean
    time_created?: boolean
    output_file_id?: boolean
    error_file_id?: boolean
  }

  export type openai_batch_tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "original_base_url" | "custom_id" | "json_data" | "openai_file_id" | "file_uploaded" | "openai_batch_id" | "status" | "result" | "time_last_updated" | "time_created" | "output_file_id" | "error_file_id", ExtArgs["result"]["openai_batch_tasks"]>

  export type $openai_batch_tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "openai_batch_tasks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      original_base_url: string
      custom_id: string
      json_data: Prisma.JsonValue
      openai_file_id: string | null
      file_uploaded: boolean
      openai_batch_id: string | null
      status: string
      result: Prisma.JsonValue | null
      time_last_updated: bigint
      time_created: bigint
      output_file_id: string | null
      error_file_id: string | null
    }, ExtArgs["result"]["openai_batch_tasks"]>
    composites: {}
  }

  type openai_batch_tasksGetPayload<S extends boolean | null | undefined | openai_batch_tasksDefaultArgs> = $Result.GetResult<Prisma.$openai_batch_tasksPayload, S>

  type openai_batch_tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<openai_batch_tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Openai_batch_tasksCountAggregateInputType | true
    }

  export interface openai_batch_tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['openai_batch_tasks'], meta: { name: 'openai_batch_tasks' } }
    /**
     * Find zero or one Openai_batch_tasks that matches the filter.
     * @param {openai_batch_tasksFindUniqueArgs} args - Arguments to find a Openai_batch_tasks
     * @example
     * // Get one Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends openai_batch_tasksFindUniqueArgs>(args: SelectSubset<T, openai_batch_tasksFindUniqueArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Openai_batch_tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {openai_batch_tasksFindUniqueOrThrowArgs} args - Arguments to find a Openai_batch_tasks
     * @example
     * // Get one Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends openai_batch_tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, openai_batch_tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Openai_batch_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksFindFirstArgs} args - Arguments to find a Openai_batch_tasks
     * @example
     * // Get one Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends openai_batch_tasksFindFirstArgs>(args?: SelectSubset<T, openai_batch_tasksFindFirstArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Openai_batch_tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksFindFirstOrThrowArgs} args - Arguments to find a Openai_batch_tasks
     * @example
     * // Get one Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends openai_batch_tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, openai_batch_tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Openai_batch_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findMany()
     * 
     * // Get first 10 Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openai_batch_tasksWithIdOnly = await prisma.openai_batch_tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends openai_batch_tasksFindManyArgs>(args?: SelectSubset<T, openai_batch_tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Openai_batch_tasks.
     * @param {openai_batch_tasksCreateArgs} args - Arguments to create a Openai_batch_tasks.
     * @example
     * // Create one Openai_batch_tasks
     * const Openai_batch_tasks = await prisma.openai_batch_tasks.create({
     *   data: {
     *     // ... data to create a Openai_batch_tasks
     *   }
     * })
     * 
     */
    create<T extends openai_batch_tasksCreateArgs>(args: SelectSubset<T, openai_batch_tasksCreateArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Openai_batch_tasks.
     * @param {openai_batch_tasksCreateManyArgs} args - Arguments to create many Openai_batch_tasks.
     * @example
     * // Create many Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends openai_batch_tasksCreateManyArgs>(args?: SelectSubset<T, openai_batch_tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Openai_batch_tasks and returns the data saved in the database.
     * @param {openai_batch_tasksCreateManyAndReturnArgs} args - Arguments to create many Openai_batch_tasks.
     * @example
     * // Create many Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Openai_batch_tasks and only return the `id`
     * const openai_batch_tasksWithIdOnly = await prisma.openai_batch_tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends openai_batch_tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, openai_batch_tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Openai_batch_tasks.
     * @param {openai_batch_tasksDeleteArgs} args - Arguments to delete one Openai_batch_tasks.
     * @example
     * // Delete one Openai_batch_tasks
     * const Openai_batch_tasks = await prisma.openai_batch_tasks.delete({
     *   where: {
     *     // ... filter to delete one Openai_batch_tasks
     *   }
     * })
     * 
     */
    delete<T extends openai_batch_tasksDeleteArgs>(args: SelectSubset<T, openai_batch_tasksDeleteArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Openai_batch_tasks.
     * @param {openai_batch_tasksUpdateArgs} args - Arguments to update one Openai_batch_tasks.
     * @example
     * // Update one Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends openai_batch_tasksUpdateArgs>(args: SelectSubset<T, openai_batch_tasksUpdateArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Openai_batch_tasks.
     * @param {openai_batch_tasksDeleteManyArgs} args - Arguments to filter Openai_batch_tasks to delete.
     * @example
     * // Delete a few Openai_batch_tasks
     * const { count } = await prisma.openai_batch_tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends openai_batch_tasksDeleteManyArgs>(args?: SelectSubset<T, openai_batch_tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Openai_batch_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends openai_batch_tasksUpdateManyArgs>(args: SelectSubset<T, openai_batch_tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Openai_batch_tasks and returns the data updated in the database.
     * @param {openai_batch_tasksUpdateManyAndReturnArgs} args - Arguments to update many Openai_batch_tasks.
     * @example
     * // Update many Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Openai_batch_tasks and only return the `id`
     * const openai_batch_tasksWithIdOnly = await prisma.openai_batch_tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends openai_batch_tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, openai_batch_tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Openai_batch_tasks.
     * @param {openai_batch_tasksUpsertArgs} args - Arguments to update or create a Openai_batch_tasks.
     * @example
     * // Update or create a Openai_batch_tasks
     * const openai_batch_tasks = await prisma.openai_batch_tasks.upsert({
     *   create: {
     *     // ... data to create a Openai_batch_tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Openai_batch_tasks we want to update
     *   }
     * })
     */
    upsert<T extends openai_batch_tasksUpsertArgs>(args: SelectSubset<T, openai_batch_tasksUpsertArgs<ExtArgs>>): Prisma__openai_batch_tasksClient<$Result.GetResult<Prisma.$openai_batch_tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Openai_batch_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksCountArgs} args - Arguments to filter Openai_batch_tasks to count.
     * @example
     * // Count the number of Openai_batch_tasks
     * const count = await prisma.openai_batch_tasks.count({
     *   where: {
     *     // ... the filter for the Openai_batch_tasks we want to count
     *   }
     * })
    **/
    count<T extends openai_batch_tasksCountArgs>(
      args?: Subset<T, openai_batch_tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Openai_batch_tasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Openai_batch_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Openai_batch_tasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Openai_batch_tasksAggregateArgs>(args: Subset<T, Openai_batch_tasksAggregateArgs>): Prisma.PrismaPromise<GetOpenai_batch_tasksAggregateType<T>>

    /**
     * Group by Openai_batch_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openai_batch_tasksGroupByArgs} args - Group by arguments.
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
      T extends openai_batch_tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: openai_batch_tasksGroupByArgs['orderBy'] }
        : { orderBy?: openai_batch_tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, openai_batch_tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenai_batch_tasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the openai_batch_tasks model
   */
  readonly fields: openai_batch_tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for openai_batch_tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__openai_batch_tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the openai_batch_tasks model
   */
  interface openai_batch_tasksFieldRefs {
    readonly id: FieldRef<"openai_batch_tasks", 'String'>
    readonly original_base_url: FieldRef<"openai_batch_tasks", 'String'>
    readonly custom_id: FieldRef<"openai_batch_tasks", 'String'>
    readonly json_data: FieldRef<"openai_batch_tasks", 'Json'>
    readonly openai_file_id: FieldRef<"openai_batch_tasks", 'String'>
    readonly file_uploaded: FieldRef<"openai_batch_tasks", 'Boolean'>
    readonly openai_batch_id: FieldRef<"openai_batch_tasks", 'String'>
    readonly status: FieldRef<"openai_batch_tasks", 'String'>
    readonly result: FieldRef<"openai_batch_tasks", 'Json'>
    readonly time_last_updated: FieldRef<"openai_batch_tasks", 'BigInt'>
    readonly time_created: FieldRef<"openai_batch_tasks", 'BigInt'>
    readonly output_file_id: FieldRef<"openai_batch_tasks", 'String'>
    readonly error_file_id: FieldRef<"openai_batch_tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * openai_batch_tasks findUnique
   */
  export type openai_batch_tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter, which openai_batch_tasks to fetch.
     */
    where: openai_batch_tasksWhereUniqueInput
  }

  /**
   * openai_batch_tasks findUniqueOrThrow
   */
  export type openai_batch_tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter, which openai_batch_tasks to fetch.
     */
    where: openai_batch_tasksWhereUniqueInput
  }

  /**
   * openai_batch_tasks findFirst
   */
  export type openai_batch_tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter, which openai_batch_tasks to fetch.
     */
    where?: openai_batch_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openai_batch_tasks to fetch.
     */
    orderBy?: openai_batch_tasksOrderByWithRelationInput | openai_batch_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for openai_batch_tasks.
     */
    cursor?: openai_batch_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openai_batch_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openai_batch_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of openai_batch_tasks.
     */
    distinct?: Openai_batch_tasksScalarFieldEnum | Openai_batch_tasksScalarFieldEnum[]
  }

  /**
   * openai_batch_tasks findFirstOrThrow
   */
  export type openai_batch_tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter, which openai_batch_tasks to fetch.
     */
    where?: openai_batch_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openai_batch_tasks to fetch.
     */
    orderBy?: openai_batch_tasksOrderByWithRelationInput | openai_batch_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for openai_batch_tasks.
     */
    cursor?: openai_batch_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openai_batch_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openai_batch_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of openai_batch_tasks.
     */
    distinct?: Openai_batch_tasksScalarFieldEnum | Openai_batch_tasksScalarFieldEnum[]
  }

  /**
   * openai_batch_tasks findMany
   */
  export type openai_batch_tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter, which openai_batch_tasks to fetch.
     */
    where?: openai_batch_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openai_batch_tasks to fetch.
     */
    orderBy?: openai_batch_tasksOrderByWithRelationInput | openai_batch_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing openai_batch_tasks.
     */
    cursor?: openai_batch_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openai_batch_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openai_batch_tasks.
     */
    skip?: number
    distinct?: Openai_batch_tasksScalarFieldEnum | Openai_batch_tasksScalarFieldEnum[]
  }

  /**
   * openai_batch_tasks create
   */
  export type openai_batch_tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * The data needed to create a openai_batch_tasks.
     */
    data: XOR<openai_batch_tasksCreateInput, openai_batch_tasksUncheckedCreateInput>
  }

  /**
   * openai_batch_tasks createMany
   */
  export type openai_batch_tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many openai_batch_tasks.
     */
    data: openai_batch_tasksCreateManyInput | openai_batch_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * openai_batch_tasks createManyAndReturn
   */
  export type openai_batch_tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * The data used to create many openai_batch_tasks.
     */
    data: openai_batch_tasksCreateManyInput | openai_batch_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * openai_batch_tasks update
   */
  export type openai_batch_tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * The data needed to update a openai_batch_tasks.
     */
    data: XOR<openai_batch_tasksUpdateInput, openai_batch_tasksUncheckedUpdateInput>
    /**
     * Choose, which openai_batch_tasks to update.
     */
    where: openai_batch_tasksWhereUniqueInput
  }

  /**
   * openai_batch_tasks updateMany
   */
  export type openai_batch_tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update openai_batch_tasks.
     */
    data: XOR<openai_batch_tasksUpdateManyMutationInput, openai_batch_tasksUncheckedUpdateManyInput>
    /**
     * Filter which openai_batch_tasks to update
     */
    where?: openai_batch_tasksWhereInput
    /**
     * Limit how many openai_batch_tasks to update.
     */
    limit?: number
  }

  /**
   * openai_batch_tasks updateManyAndReturn
   */
  export type openai_batch_tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * The data used to update openai_batch_tasks.
     */
    data: XOR<openai_batch_tasksUpdateManyMutationInput, openai_batch_tasksUncheckedUpdateManyInput>
    /**
     * Filter which openai_batch_tasks to update
     */
    where?: openai_batch_tasksWhereInput
    /**
     * Limit how many openai_batch_tasks to update.
     */
    limit?: number
  }

  /**
   * openai_batch_tasks upsert
   */
  export type openai_batch_tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * The filter to search for the openai_batch_tasks to update in case it exists.
     */
    where: openai_batch_tasksWhereUniqueInput
    /**
     * In case the openai_batch_tasks found by the `where` argument doesn't exist, create a new openai_batch_tasks with this data.
     */
    create: XOR<openai_batch_tasksCreateInput, openai_batch_tasksUncheckedCreateInput>
    /**
     * In case the openai_batch_tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<openai_batch_tasksUpdateInput, openai_batch_tasksUncheckedUpdateInput>
  }

  /**
   * openai_batch_tasks delete
   */
  export type openai_batch_tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
    /**
     * Filter which openai_batch_tasks to delete.
     */
    where: openai_batch_tasksWhereUniqueInput
  }

  /**
   * openai_batch_tasks deleteMany
   */
  export type openai_batch_tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which openai_batch_tasks to delete
     */
    where?: openai_batch_tasksWhereInput
    /**
     * Limit how many openai_batch_tasks to delete.
     */
    limit?: number
  }

  /**
   * openai_batch_tasks without action
   */
  export type openai_batch_tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the openai_batch_tasks
     */
    select?: openai_batch_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the openai_batch_tasks
     */
    omit?: openai_batch_tasksOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Openai_batch_tasksScalarFieldEnum: {
    id: 'id',
    original_base_url: 'original_base_url',
    custom_id: 'custom_id',
    json_data: 'json_data',
    openai_file_id: 'openai_file_id',
    file_uploaded: 'file_uploaded',
    openai_batch_id: 'openai_batch_id',
    status: 'status',
    result: 'result',
    time_last_updated: 'time_last_updated',
    time_created: 'time_created',
    output_file_id: 'output_file_id',
    error_file_id: 'error_file_id'
  };

  export type Openai_batch_tasksScalarFieldEnum = (typeof Openai_batch_tasksScalarFieldEnum)[keyof typeof Openai_batch_tasksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type openai_batch_tasksWhereInput = {
    AND?: openai_batch_tasksWhereInput | openai_batch_tasksWhereInput[]
    OR?: openai_batch_tasksWhereInput[]
    NOT?: openai_batch_tasksWhereInput | openai_batch_tasksWhereInput[]
    id?: StringFilter<"openai_batch_tasks"> | string
    original_base_url?: StringFilter<"openai_batch_tasks"> | string
    custom_id?: StringFilter<"openai_batch_tasks"> | string
    json_data?: JsonFilter<"openai_batch_tasks">
    openai_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    file_uploaded?: BoolFilter<"openai_batch_tasks"> | boolean
    openai_batch_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    status?: StringFilter<"openai_batch_tasks"> | string
    result?: JsonNullableFilter<"openai_batch_tasks">
    time_last_updated?: BigIntFilter<"openai_batch_tasks"> | bigint | number
    time_created?: BigIntFilter<"openai_batch_tasks"> | bigint | number
    output_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    error_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
  }

  export type openai_batch_tasksOrderByWithRelationInput = {
    id?: SortOrder
    original_base_url?: SortOrder
    custom_id?: SortOrder
    json_data?: SortOrder
    openai_file_id?: SortOrderInput | SortOrder
    file_uploaded?: SortOrder
    openai_batch_id?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    time_last_updated?: SortOrder
    time_created?: SortOrder
    output_file_id?: SortOrderInput | SortOrder
    error_file_id?: SortOrderInput | SortOrder
  }

  export type openai_batch_tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: openai_batch_tasksWhereInput | openai_batch_tasksWhereInput[]
    OR?: openai_batch_tasksWhereInput[]
    NOT?: openai_batch_tasksWhereInput | openai_batch_tasksWhereInput[]
    original_base_url?: StringFilter<"openai_batch_tasks"> | string
    custom_id?: StringFilter<"openai_batch_tasks"> | string
    json_data?: JsonFilter<"openai_batch_tasks">
    openai_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    file_uploaded?: BoolFilter<"openai_batch_tasks"> | boolean
    openai_batch_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    status?: StringFilter<"openai_batch_tasks"> | string
    result?: JsonNullableFilter<"openai_batch_tasks">
    time_last_updated?: BigIntFilter<"openai_batch_tasks"> | bigint | number
    time_created?: BigIntFilter<"openai_batch_tasks"> | bigint | number
    output_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
    error_file_id?: StringNullableFilter<"openai_batch_tasks"> | string | null
  }, "id">

  export type openai_batch_tasksOrderByWithAggregationInput = {
    id?: SortOrder
    original_base_url?: SortOrder
    custom_id?: SortOrder
    json_data?: SortOrder
    openai_file_id?: SortOrderInput | SortOrder
    file_uploaded?: SortOrder
    openai_batch_id?: SortOrderInput | SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    time_last_updated?: SortOrder
    time_created?: SortOrder
    output_file_id?: SortOrderInput | SortOrder
    error_file_id?: SortOrderInput | SortOrder
    _count?: openai_batch_tasksCountOrderByAggregateInput
    _avg?: openai_batch_tasksAvgOrderByAggregateInput
    _max?: openai_batch_tasksMaxOrderByAggregateInput
    _min?: openai_batch_tasksMinOrderByAggregateInput
    _sum?: openai_batch_tasksSumOrderByAggregateInput
  }

  export type openai_batch_tasksScalarWhereWithAggregatesInput = {
    AND?: openai_batch_tasksScalarWhereWithAggregatesInput | openai_batch_tasksScalarWhereWithAggregatesInput[]
    OR?: openai_batch_tasksScalarWhereWithAggregatesInput[]
    NOT?: openai_batch_tasksScalarWhereWithAggregatesInput | openai_batch_tasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"openai_batch_tasks"> | string
    original_base_url?: StringWithAggregatesFilter<"openai_batch_tasks"> | string
    custom_id?: StringWithAggregatesFilter<"openai_batch_tasks"> | string
    json_data?: JsonWithAggregatesFilter<"openai_batch_tasks">
    openai_file_id?: StringNullableWithAggregatesFilter<"openai_batch_tasks"> | string | null
    file_uploaded?: BoolWithAggregatesFilter<"openai_batch_tasks"> | boolean
    openai_batch_id?: StringNullableWithAggregatesFilter<"openai_batch_tasks"> | string | null
    status?: StringWithAggregatesFilter<"openai_batch_tasks"> | string
    result?: JsonNullableWithAggregatesFilter<"openai_batch_tasks">
    time_last_updated?: BigIntWithAggregatesFilter<"openai_batch_tasks"> | bigint | number
    time_created?: BigIntWithAggregatesFilter<"openai_batch_tasks"> | bigint | number
    output_file_id?: StringNullableWithAggregatesFilter<"openai_batch_tasks"> | string | null
    error_file_id?: StringNullableWithAggregatesFilter<"openai_batch_tasks"> | string | null
  }

  export type openai_batch_tasksCreateInput = {
    id: string
    original_base_url: string
    custom_id: string
    json_data: JsonNullValueInput | InputJsonValue
    openai_file_id?: string | null
    file_uploaded?: boolean
    openai_batch_id?: string | null
    status: string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated: bigint | number
    time_created: bigint | number
    output_file_id?: string | null
    error_file_id?: string | null
  }

  export type openai_batch_tasksUncheckedCreateInput = {
    id: string
    original_base_url: string
    custom_id: string
    json_data: JsonNullValueInput | InputJsonValue
    openai_file_id?: string | null
    file_uploaded?: boolean
    openai_batch_id?: string | null
    status: string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated: bigint | number
    time_created: bigint | number
    output_file_id?: string | null
    error_file_id?: string | null
  }

  export type openai_batch_tasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_base_url?: StringFieldUpdateOperationsInput | string
    custom_id?: StringFieldUpdateOperationsInput | string
    json_data?: JsonNullValueInput | InputJsonValue
    openai_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_uploaded?: BoolFieldUpdateOperationsInput | boolean
    openai_batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated?: BigIntFieldUpdateOperationsInput | bigint | number
    time_created?: BigIntFieldUpdateOperationsInput | bigint | number
    output_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    error_file_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type openai_batch_tasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_base_url?: StringFieldUpdateOperationsInput | string
    custom_id?: StringFieldUpdateOperationsInput | string
    json_data?: JsonNullValueInput | InputJsonValue
    openai_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_uploaded?: BoolFieldUpdateOperationsInput | boolean
    openai_batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated?: BigIntFieldUpdateOperationsInput | bigint | number
    time_created?: BigIntFieldUpdateOperationsInput | bigint | number
    output_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    error_file_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type openai_batch_tasksCreateManyInput = {
    id: string
    original_base_url: string
    custom_id: string
    json_data: JsonNullValueInput | InputJsonValue
    openai_file_id?: string | null
    file_uploaded?: boolean
    openai_batch_id?: string | null
    status: string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated: bigint | number
    time_created: bigint | number
    output_file_id?: string | null
    error_file_id?: string | null
  }

  export type openai_batch_tasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_base_url?: StringFieldUpdateOperationsInput | string
    custom_id?: StringFieldUpdateOperationsInput | string
    json_data?: JsonNullValueInput | InputJsonValue
    openai_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_uploaded?: BoolFieldUpdateOperationsInput | boolean
    openai_batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated?: BigIntFieldUpdateOperationsInput | bigint | number
    time_created?: BigIntFieldUpdateOperationsInput | bigint | number
    output_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    error_file_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type openai_batch_tasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_base_url?: StringFieldUpdateOperationsInput | string
    custom_id?: StringFieldUpdateOperationsInput | string
    json_data?: JsonNullValueInput | InputJsonValue
    openai_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_uploaded?: BoolFieldUpdateOperationsInput | boolean
    openai_batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    time_last_updated?: BigIntFieldUpdateOperationsInput | bigint | number
    time_created?: BigIntFieldUpdateOperationsInput | bigint | number
    output_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    error_file_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type openai_batch_tasksCountOrderByAggregateInput = {
    id?: SortOrder
    original_base_url?: SortOrder
    custom_id?: SortOrder
    json_data?: SortOrder
    openai_file_id?: SortOrder
    file_uploaded?: SortOrder
    openai_batch_id?: SortOrder
    status?: SortOrder
    result?: SortOrder
    time_last_updated?: SortOrder
    time_created?: SortOrder
    output_file_id?: SortOrder
    error_file_id?: SortOrder
  }

  export type openai_batch_tasksAvgOrderByAggregateInput = {
    time_last_updated?: SortOrder
    time_created?: SortOrder
  }

  export type openai_batch_tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    original_base_url?: SortOrder
    custom_id?: SortOrder
    openai_file_id?: SortOrder
    file_uploaded?: SortOrder
    openai_batch_id?: SortOrder
    status?: SortOrder
    time_last_updated?: SortOrder
    time_created?: SortOrder
    output_file_id?: SortOrder
    error_file_id?: SortOrder
  }

  export type openai_batch_tasksMinOrderByAggregateInput = {
    id?: SortOrder
    original_base_url?: SortOrder
    custom_id?: SortOrder
    openai_file_id?: SortOrder
    file_uploaded?: SortOrder
    openai_batch_id?: SortOrder
    status?: SortOrder
    time_last_updated?: SortOrder
    time_created?: SortOrder
    output_file_id?: SortOrder
    error_file_id?: SortOrder
  }

  export type openai_batch_tasksSumOrderByAggregateInput = {
    time_last_updated?: SortOrder
    time_created?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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